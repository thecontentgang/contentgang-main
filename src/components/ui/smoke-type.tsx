"use client";

import { useRef, useState, useSyncExternalStore, type CSSProperties, type ElementType } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { isLowEndDevice } from "../../lib/device";

export interface SmokeSegment {
  text: string;
  /** Final colour of this part of the headline. Defaults to the `color` prop. */
  color?: string;
}

interface SmokeTypeProps {
  /** Headline as lines of coloured segments: each inner array is one line. */
  lines: SmokeSegment[][];
  /** Rendered element, e.g. "h1" or "h2". */
  as?: ElementType;
  id?: string;
  className?: string;
  style?: CSSProperties;
  /** Final text colour (brand dark by default). */
  color?: string;
  /** Colour the letters and the drifting smoke start from (brand orange by default). */
  smokeColor?: string;
  /** "view" plays when scrolled into view, "mount" plays immediately. */
  trigger?: "view" | "mount";
  /** Order the letters condense in. */
  direction?: "left" | "center" | "random";
  /** Seconds between letters. */
  stagger?: number;
  /** Seconds each letter takes to settle. */
  duration?: number;
  /** Seconds before the first letter starts. */
  delay?: number;
  /** How far the smoke drifts upward, in em. */
  rise?: number;
  /** Replay the reveal when the pointer enters. */
  replayOnHover?: boolean;
}

type Letter = { ch: string; color?: string; index: number };
type Token = { type: "space" } | { type: "word"; letters: Letter[] };

const subscribeNever = () => () => {};

const EASE = [0.22, 1, 0.36, 1] as const;

// Deterministic shuffle so server and client render the same order.
const shuffledOrder = (count: number) =>
  Array.from({ length: count }, (_, i) => i).sort(
    (a, b) => ((a * 7919) % count) - ((b * 7919) % count) || a - b
  );

export default function SmokeType({
  lines,
  as: Tag = "span",
  id,
  className,
  style,
  color = "#12110B",
  smokeColor = "#FF4F31",
  trigger = "view",
  direction = "left",
  stagger = 0.045,
  duration = 0.9,
  delay = 0.1,
  rise = 0.6,
  replayOnHover = false,
}: SmokeTypeProps) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [resetting, setResetting] = useState(false);
  // Blur filters are costly on weak GPUs: keep the same reveal with a lighter blur and no drifting smoke layer
  const lowEnd = useSyncExternalStore(subscribeNever, isLowEndDevice, () => false);

  const ready = trigger === "mount" || inView;

  // Split into words/letters, numbering every letter for the stagger order.
  let counter = 0;
  const tokenLines: Token[][] = lines.map((segments) =>
    segments.flatMap<Token>((segment) =>
      segment.text.split(/(\s+)/).filter(Boolean).map<Token>((part) =>
        /^\s+$/.test(part)
          ? { type: "space" }
          : {
              type: "word",
              letters: Array.from(part).map((ch) => ({
                ch,
                color: segment.color,
                index: counter++,
              })),
            }
      )
    )
  );
  const total = counter;
  const random = direction === "random" ? shuffledOrder(total) : [];
  const orderOf = (i: number) =>
    direction === "center"
      ? Math.abs(i - (total - 1) / 2)
      : direction === "random"
        ? random.indexOf(i)
        : i;

  const fullText = lines.map((l) => l.map((s) => s.text).join("")).join(" ");

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: "0.35em", filter: lowEnd ? "blur(5px)" : "blur(14px)", color: smokeColor },
    shown: (d: number) => ({
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: { duration, delay: d, ease: EASE },
    }),
  };
  const smokeVariants: Variants = {
    hidden: { opacity: 0, y: "0em", scale: 1, filter: "blur(8px)" },
    shown: (d: number) => ({
      opacity: [0, 0.55, 0],
      y: ["0em", `-${rise}em`],
      scale: [1, 1.4],
      filter: ["blur(8px)", "blur(16px)"],
      transition: { duration: duration * 1.4, delay: d, ease: "easeOut", times: [0, 0.3, 1] },
    }),
  };

  const handleEnter = () => {
    if (!replayOnHover || reduceMotion) return;
    setResetting(true);
    requestAnimationFrame(() => setResetting(false));
  };

  const state = reduceMotion || (ready && !resetting) ? "shown" : "hidden";

  return (
    <Tag ref={ref} id={id} className={className} style={style} onPointerEnter={handleEnter}>
      <span className="sr-only">{fullText}</span>
      <span aria-hidden="true">
        {tokenLines.map((tokens, li) => (
          <span key={li} className="block">
            {tokens.map((token, ti) =>
              token.type === "space" ? (
                " "
              ) : (
                <span key={ti} className="inline-block whitespace-nowrap">
                  {token.letters.map((letter) => {
                    const d = delay + orderOf(letter.index) * stagger;
                    const final = letter.color ?? color;
                    return (
                      <span key={letter.index} className="relative inline-block">
                        {!lowEnd && (
                          <motion.span
                            data-ch={letter.ch}
                            className="pointer-events-none absolute inset-0 select-none before:content-[attr(data-ch)]"
                            style={{ color: smokeColor }}
                            variants={smokeVariants}
                            initial="hidden"
                            animate={reduceMotion ? "hidden" : state}
                            custom={d}
                          >
                          </motion.span>
                        )}
                        <motion.span
                          className="inline-block"
                          style={{ color: final }}
                          variants={{
                            ...letterVariants,
                            shown: (dd: number) => ({
                              ...(letterVariants.shown as (n: number) => object)(dd),
                              color: final,
                            }),
                          }}
                          initial={reduceMotion ? "shown" : "hidden"}
                          animate={state}
                          custom={d}
                        >
                          {letter.ch}
                        </motion.span>
                      </span>
                    );
                  })}
                </span>
              )
            )}
          </span>
        ))}
      </span>
    </Tag>
  );
}
