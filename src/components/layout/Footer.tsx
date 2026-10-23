// FooterWordmark (the VFX wordmark) is kept in ./FooterWordmark.tsx; the footer now shows the tumble wall instead.
import FooterTumbleWall from './FooterTumbleWall';

const Footer = () => {
  return (
    // Wrapper div matches the off-white background of the page
    <div className="w-full bg-[#FDF9F9] px-4 sm:px-6 md:px-12 pt-8 md:pt-12">

      {/* The Footer Card */}
      <footer
        className="w-full relative overflow-hidden flex flex-col justify-between bg-[#12110B] pb-4 md:pb-5 pt-10 md:pt-12 rounded-t-[2rem] md:rounded-t-[3rem] shadow-2xl"
      >

        {/* --- MAIN FOOTER CONTENT --- */}
        {/* Updated Grid: 1 col on mobile, 2 cols on tablet, 12-col custom grid on desktop */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-8 lg:gap-8 mb-8 md:mb-10">

          {/* ========================================= */}
          {/* Column 1: BRAND (Logo & Socials)            */}
          {/* lg:col-span-4 gives it extra breathing room */}
          {/* ========================================= */}
          <div className="flex flex-col lg:col-span-4 lg:pr-8">

            {/* Logo Placeholder (Replace with your actual <img /> when ready) */}
            <div className="mb-6">
              {/* <img src="/images/logo-white.png" alt="The Content Gang" className="h-8 md:h-10" /> */}
              {/* <h2 className="text-2xl md:text-3xl font-black text-[#FDF9F9] tracking-tighter">
                The Content <span className="text-[#FF4F31]">Gang.</span>
              </h2> */}
            </div>

            <p className="text-[#FDF9F9]/70 font-medium text-base leading-relaxed mb-8 max-w-sm">
              We make brands impossible to ignore. Smart strategy, scrolling-stopping content, and real growth.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-full bg-[#FDF9F9]/5 hover:bg-[#FF4F31] border border-[#FDF9F9]/10 hover:border-[#FF4F31] flex items-center justify-center text-[#FDF9F9] transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-full bg-[#FDF9F9]/5 hover:bg-[#FF4F31] border border-[#FDF9F9]/10 hover:border-[#FF4F31] flex items-center justify-center text-[#FDF9F9] transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-10 h-10 rounded-full bg-[#FDF9F9]/5 hover:bg-[#FF4F31] border border-[#FDF9F9]/10 hover:border-[#FF4F31] flex items-center justify-center text-[#FDF9F9] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" className="w-10 h-10 rounded-full bg-[#FDF9F9]/5 hover:bg-[#FF4F31] border border-[#FDF9F9]/10 hover:border-[#FF4F31] flex items-center justify-center text-[#FDF9F9] transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ========================================= */}
          {/* Column 2: Quick Links                     */}
          {/* lg:col-span-2                             */}
          {/* ========================================= */}
          <div className="flex flex-col lg:col-span-2">
            <h3 className="text-[#FF4F31] font-bold tracking-wider uppercase mb-6 text-sm">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:flex sm:flex-col gap-x-4 gap-y-4 sm:gap-y-3">
              {['Home', 'About', 'Services', 'Case studies', 'Blogs', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="inline-block py-1 sm:py-0 text-[#FDF9F9]/80 hover:text-[#FF4F31] font-medium transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================= */}
          {/* Column 3: Services                        */}
          {/* lg:col-span-3                             */}
          {/* ========================================= */}
          <div className="flex flex-col lg:col-span-3">
            <h3 className="text-[#FF4F31] font-bold tracking-wider uppercase mb-6 text-sm">Services</h3>
            <ul className="flex flex-col gap-4 sm:gap-3">
              {[
                'Content Creation',
                'Social Media Management',
                'Lead Generation',
                'Influencer Marketing',
                'Web Design & Development',
                'SEO',
                'Digital Marketing'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="inline-block py-1 sm:py-0 text-[#FDF9F9]/80 hover:text-[#FF4F31] font-medium transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================= */}
          {/* Column 4: Let's Talk                      */}
          {/* lg:col-span-3                             */}
          {/* ========================================= */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-3">
            <h3 className="text-[#FF4F31] font-bold tracking-wider uppercase mb-6 text-sm">Let&apos;s Talk</h3>
            <div className="flex flex-col gap-6 md:gap-7">

              <div className="group">
                <span className="block text-[#FDF9F9]/40 text-xs font-bold uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:Bhanu@thecontentgang.com" className="inline-block text-[#FDF9F9] group-hover:text-[#FF4F31] font-semibold text-lg md:text-base transition-colors duration-300">
                  Bhanu@thecontentgang.com
                </a>
              </div>

              <div className="group">
                <span className="block text-[#FDF9F9]/40 text-xs font-bold uppercase tracking-wider mb-1">Phone</span>
                <a href="tel:+917416927037" className="inline-block text-[#FDF9F9] group-hover:text-[#FF4F31] font-semibold text-lg md:text-base transition-colors duration-300">
                  +91 7416927037
                </a>
              </div>

              <div>
                <span className="block text-[#FDF9F9]/40 text-xs font-bold uppercase tracking-wider mb-2">Address</span>
                <p className="text-[#FDF9F9]/80 font-medium text-base md:text-sm leading-relaxed max-w-[250px]">
                  401, B-Block, Asian Suncity, Kondapur, Hyderabad, Telangana.
                </p>
              </div>

            </div>
          </div>

        </div>
        {/* --- END MAIN FOOTER CONTENT --- */}

        {/* Bare minimum structural bottom text */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 text-[#FDF9F9]/40 text-sm font-medium tracking-wide pt-5 border-t border-[#FDF9F9]/10 text-center sm:text-left">
          <span>© {new Date().getFullYear()} The Content Gang.</span>
          <span>All rights reserved.</span>
        </div>

        {/* Social icons rain down and can be thrown around */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mt-2 md:mt-3">
          <FooterTumbleWall />
        </div>

      </footer>
    </div>
  );
};

export default Footer;