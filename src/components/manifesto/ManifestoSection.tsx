"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ManifestoCard = {
  src: string;
  alt: string;
  caption: string;
  // Corner rounding of the card inside the flush row (desktop).
  radius: string;
};

type ManifestoPanel = {
  title: string;
  subtitle: string;
  body: string;
  tags: string[];
  accent?: boolean;
};

const HEADLINE = [
  { text: "Be seen.", className: "text-[#12110B]" },
  { text: "Be remembered.", className: "text-[#12110B]" },
  { text: "Be chosen.", className: "text-[#FF4F31]" },
];

// Cards sit flush in one row; the outer corners are rounded, the inner ones meet.
const CARDS: ManifestoCard[] = [
  {
    src: "/images/manifesto/brand-identity.jpg",
    alt: "Designer's desk with a graphic design book and creative software on a tablet",
    caption: "Brand identity",
    radius: "md:rounded-r-none",
  },
  {
    src: "/images/manifesto/strategy-team.jpg",
    alt: "Creative team working together around a table in a studio",
    caption: "Strategy & collaboration",
    radius: "",
  },
  {
    src: "/images/content-creation.png",
    alt: "Cinematic video production in warm red light",
    caption: "Creative production",
    radius: "md:rounded-l-none",
  },
];

// Same corner shapes as the cards, as values GSAP can tween to square corners.
const PANE_RADII = ["12px 0px 0px 12px", "12px 12px 12px 12px", "0px 12px 12px 0px"];
const SQUARE = "0px 0px 0px 0px";

const PANELS: ManifestoPanel[] = [
  {
    title: "Be seen.",
    subtitle: "Attention is where every great brand begins.",
    body: "We help your brand cut through the noise with distinctive creative, strategic content, and digital experiences that put you in front of the right audience.",
    tags: ["Brand Identity", "Social Media", "Digital Campaigns"],
  },
  {
    title: "Be remembered.",
    subtitle: "Make every impression mean something.",
    body: "We build distinctive brand identities and meaningful digital experiences that stay with people long after the first interaction. Through consistent storytelling, thoughtful design, and authentic communication, we turn attention into lasting connections.",
    tags: [],
  },
  {
    title: "Be chosen.",
    subtitle: "Turn trust into action.",
    body: "We turn meaningful brand connections into real business opportunities. With strategic campaigns, seamless digital experiences, and purposeful messaging, we help your audience move from consideration to choosing your brand.",
    tags: ["Conversion Strategy", "Digital Campaigns", "Business Growth"],
    accent: true,
  },
];

// Scroll distance per timeline unit, as a fraction of the viewport height.
const SCROLL_PER_UNIT = 0.5;
// Near-zero (not zero) so a collapsed image keeps a valid flex ratio.
const HIDDEN = 0.0001;

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // One pinned timeline, driven by scroll:
  //   1. content reveals
  //   2. the whole row of images grows together until it covers the screen
  //   3. one image per statement takes over the full screen, text reveals over it
  // useLayoutEffect sets hidden start states before first paint (no flash).
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const list = listRef.current;
    if (!section || !list) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { desktop } = context.conditions as { desktop: boolean };
        const q = <T extends HTMLElement>(sel: string) =>
          gsap.utils.toArray<T>(sel, section);

        const lines = q("[data-m='line']");
        const copy = q("[data-m='copy']");
        const cards = q("[data-m='card']");
        const overlay = q("[data-m='expand']")[0];
        const panes = q("[data-m='pane']");
        const scrim = q("[data-m='scrim']")[0];
        const panels = q("[data-m='panel']");

        // Opt in to the animated layout (panels overlay the pinned section).
        section.dataset.anim = "true";

        // On phones the row is shifted so the middle card is centred, so the
        // expanding image always starts from where the card is actually seen.
        const prevOverflow = list.style.overflowX;
        if (!desktop) {
          // A transform (unlike scrollLeft) survives the pin re-parenting the section.
          list.style.overflowX = "visible";
          const middle = cards[1];
          gsap.set(list, {
            x: -(middle.offsetLeft - list.offsetLeft - (list.clientWidth - middle.offsetWidth) / 2),
          });
        }

        // Each card's rect relative to the section, ignoring its reveal offset.
        const rects = () => {
          const s = section.getBoundingClientRect();
          return cards.map((c) => {
            const r = c.getBoundingClientRect();
            return {
              left: r.left - s.left,
              top: r.top - s.top - Number(gsap.getProperty(c, "y")),
              width: r.width,
              height: r.height,
            };
          });
        };
        // Where the expanding image starts: the whole row on desktop, just the
        // middle card on phones (the row doesn't fit on screen there).
        const startBox = () => {
          const all = rects();
          const set = desktop ? all : [all[1]];
          const left = Math.min(...set.map((r) => r.left));
          const top = Math.min(...set.map((r) => r.top));
          return {
            left,
            top,
            width: Math.max(...set.map((r) => r.left + r.width)) - left,
            height: Math.max(...set.map((r) => r.top + r.height)) - top,
          };
        };

        gsap.set([...lines, ...copy, ...cards], { opacity: 0, y: 40 });
        gsap.set(overlay, { autoAlpha: 0 });
        gsap.set(scrim, { opacity: 0 });

        const heads = panels.map((p) => p.querySelector<HTMLElement>("[data-p='head']")!);
        const rest = panels.map((p) =>
          Array.from(p.querySelectorAll<HTMLElement>("[data-p='item']"))
        );
        gsap.set(heads, { yPercent: 115 });
        gsap.set(rest.flat(), { autoAlpha: 0, y: 28 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // 1. Everything appears, cards fully visible and in place
        tl.to(lines, { opacity: 1, y: 0, duration: 0.5, stagger: 0.18 })
          .to(copy, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2")
          .to(cards, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, "-=0.1");

        // 2. The row of images grows as one piece until it covers the screen.
        //    Each image keeps its slot (left / middle / right) as it grows.
        tl.addLabel("expand", "+=0.4");
        tl.set(overlay, { autoAlpha: 1 }, "expand");
        tl.set(cards, { autoAlpha: 0 }, "expand");
        tl.fromTo(
          overlay,
          {
            left: () => startBox().left,
            top: () => startBox().top,
            width: () => startBox().width,
            height: () => startBox().height,
          },
          {
            left: 0,
            top: 0,
            width: () => section.clientWidth,
            height: () => section.clientHeight,
            duration: 1.5,
            ease: "power2.inOut",
          },
          "expand"
        );
        tl.fromTo(
          panes,
          {
            // On desktop each image starts as wide as its card; on phones only
            // the middle image is visible.
            flexGrow: (i: number) => (desktop ? rects()[i].width : i === 1 ? 1 : HIDDEN),
            height: (i: number) => (desktop ? rects()[i].height : rects()[1].height),
            borderRadius: (i: number) => PANE_RADII[i],
          },
          {
            flexGrow: desktop ? 1 : (i: number) => (i === 1 ? 1 : HIDDEN),
            height: () => section.clientHeight,
            borderRadius: SQUARE,
            duration: 1.5,
            ease: "power2.inOut",
          },
          "expand"
        );
        tl.to(scrim, { opacity: 1, duration: 0.8, ease: "none" }, "expand+=0.7");

        // 3. Each statement gets its own image: that image widens to take over
        //    the screen while the text for the step reveals over it.
        panels.forEach((_, i) => {
          const isLast = i === panels.length - 1;
          const at = i === 0 ? "+=0.1" : ">";

          tl.to(
            panes,
            {
              flexGrow: (k: number) => (k === i ? 1 : HIDDEN),
              duration: 1.2,
              ease: "power3.inOut",
            },
            at
          );
          if (i > 0) {
            tl.to(
              [heads[i - 1], ...rest[i - 1]],
              { autoAlpha: 0, y: -36, duration: 0.5, ease: "power2.in", stagger: 0.04 },
              "<"
            );
          }
          tl.to(heads[i], { yPercent: 0, duration: 0.8, ease: "power4.out" }, "<0.5");
          tl.to(rest[i], { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 }, "<0.15");
          if (!isLast) tl.to({}, { duration: 0.8 }); // hold so it can be read
        });
        tl.to({}, { duration: 0.5 }); // final hold before unpinning

        ScrollTrigger.create({
          animation: tl,
          trigger: section,
          start: "top top",
          end: () => "+=" + Math.round(window.innerHeight * tl.duration() * SCROLL_PER_UNIT),
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        return () => {
          delete section.dataset.anim;
          list.style.overflowX = prevOverflow;
          gsap.set(list, { clearProps: "x" });
        };
      }
    );

    // Pin positions depend on everything above this section (hero ribbon, images,
    // fonts). Re-measure whenever the page height changes, not just on load/resize.
    let lastHeight = document.documentElement.scrollHeight;
    let timer: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const h = document.documentElement.scrollHeight;
        if (Math.abs(h - lastHeight) < 2) return;
        ScrollTrigger.refresh();
        lastHeight = document.documentElement.scrollHeight;
      }, 150);
    });
    ro.observe(document.body);
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      aria-labelledby="manifesto-heading"
      className="group/m relative z-10 w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 90% 45% at 50% 100%, rgba(255,79,49,0.34) 0%, rgba(255,79,49,0) 70%), linear-gradient(180deg, #FDF9F9 0%, #FDF9F9 28%, #F4EFEA 60%, #F9D9C8 100%)",
      }}
    >
      <div className="flex min-h-svh w-full items-center">
        <div className="relative mx-auto flex w-full max-w-[1240px] flex-col items-center px-5 py-12 sm:px-8 md:py-24">
          {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-6 md:mb-8 w-full"
        >
          <div className="hidden sm:block w-8 h-px bg-black/20" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#12110B]/60">
            THE MANIFESTO
          </span>
          <div className="hidden sm:block w-8 h-px bg-black/20" />
        </motion.div> */}

          {/* Headline */}
          <h2
            id="manifesto-heading"
            className="display-heading text-center text-[#12110B]"
            style={{
              fontSize: "clamp(2.75rem, min(9vw, 12svh), 7.5rem)",
              lineHeight: 0.84,
              letterSpacing: "-0.025em",
            }}
          >
            {HEADLINE.map((line) => (
              <span key={line.text} data-m="line" className={`block ${line.className}`}>
                {line.text}
              </span>
            ))}
          </h2>

          {/* Supporting copy */}
          <p
            data-m="copy"
            className="mt-[clamp(1rem,3.5svh,2.5rem)] max-w-[32rem] text-center text-[15px] leading-relaxed text-[#12110B]/65 sm:text-[15px] md:text-base"
          >
            We combine strategy, creativity, and digital experiences to help
            ambitious brands capture attention, build trust, and grow.
          </p>

          {/* Image row: swipeable on mobile; flush triptych from md, middle larger and on top */}
          <ul
            ref={listRef}
            className="-mx-5 mt-[clamp(1.75rem,6svh,5rem)] flex w-[calc(100%+2.5rem)] snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:w-[calc(100%+4rem)] sm:px-8 md:mx-0 md:grid md:w-full md:max-w-[min(1000px,145svh)] md:grid-cols-[1fr_1.12fr_1fr] md:items-center md:gap-0 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {CARDS.map((card, i) => (
              <li
                key={card.caption}
                data-m="card"
                className={`group relative w-[74%] shrink-0 snap-center sm:w-[54%] md:w-auto md:shrink ${i === 1 ? "md:z-10" : ""
                  }`}
              >
                <figure>
                  <div
                    className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-[#F4EFEA] shadow-[0_18px_40px_-18px_rgba(18,17,11,0.35)] ring-1 ring-black/5 ${card.radius}`}
                  >
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 768px) 30vw, 74vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Expanding images: start exactly on the row, grow to cover the screen */}
      <div
        data-m="expand"
        aria-hidden="true"
        className="absolute z-20 hidden items-center group-data-[anim]/m:flex"
        style={{ left: 0, top: 0, width: 0, height: 0 }}
      >
        {CARDS.map((card) => (
          <div
            key={card.caption}
            data-m="pane"
            className="relative h-0 min-w-0 shrink grow-0 basis-0 overflow-hidden bg-[#12110B]"
          >
            <Image
              src={card.src}
              alt=""
              fill
              sizes="100vw"
              loading="eager"
              className="object-cover"
            />
          </div>
        ))}
        <div
          data-m="scrim"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#12110B]/70 via-[#12110B]/55 to-[#12110B]/80"
        />
      </div>

      {/* Statements. Static dark block without animation; overlaid when animated. */}
      <div className="relative bg-[#12110B] group-data-[anim]/m:pointer-events-none group-data-[anim]/m:absolute group-data-[anim]/m:inset-0 group-data-[anim]/m:z-30 group-data-[anim]/m:bg-transparent">
        {PANELS.map((panel) => (
          <article
            key={panel.title}
            data-m="panel"
            className="relative flex flex-col items-center justify-center px-6 py-16 text-center group-data-[anim]/m:absolute group-data-[anim]/m:inset-0 group-data-[anim]/m:py-0"
          >
            <h3
              className={`display-heading ${panel.accent ? "text-[#FF4F31]" : "text-[#FDF9F9]"}`}
              style={{
                fontSize: "clamp(3rem, min(12vw, 15svh), 8rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.025em",
              }}
            >
              <span className="block overflow-hidden pb-[0.12em]">
                <span data-p="head" className="block">
                  {panel.title}
                </span>
              </span>
            </h3>

            <p
              data-p="item"
              className="mt-[clamp(0.75rem,2.5svh,1.5rem)] max-w-2xl text-lg font-medium text-[#FDF9F9] sm:text-xl md:text-2xl"
            >
              {panel.subtitle}
            </p>

            <p
              data-p="item"
              className="mt-[clamp(0.5rem,2svh,1.25rem)] max-w-xl text-sm leading-relaxed text-[#FDF9F9]/70 md:text-base"
            >
              {panel.body}
            </p>

            {panel.tags.length > 0 && (
              <p
                data-p="item"
                className="mt-[clamp(1rem,3.5svh,2rem)] flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FDF9F9]/80 sm:text-xs"
              >
                {panel.tags.map((tag, i) => (
                  <span key={tag} className="flex items-center gap-3">
                    {i > 0 && (
                      <span aria-hidden="true" className="text-[#FF4F31]">
                        ·
                      </span>
                    )}
                    {tag}
                  </span>
                ))}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
