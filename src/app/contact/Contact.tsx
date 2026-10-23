"use client";

import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thanks for reaching out! We will get back to you shortly.");
      setMessage("");
    }, 1500);
  };

  const inputClasses = "w-full bg-white border border-[#12110B]/20 rounded-lg px-4 py-3 outline-none focus:border-[#FF4F31] transition-colors text-[#12110B] mt-1";
  const labelClasses = "text-sm font-bold text-[#12110B]";
  const asterisk = <span className="text-[#FF4F31]">*</span>;

  return (
    // Increased top padding (pt-32 md:pt-40) for that spacious, premium feel
    <section className="w-full bg-[#FDF9F9] min-h-screen pt-32 md:pt-40 pb-20 px-4 sm:px-6 md:px-12 lg:px-24">
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: Text and Locations */}
        <div className="flex flex-col">
          <h1 className="text-6xl md:text-7xl lg:text-[6rem] font-black text-[#12110B] tracking-tight mb-8">
            Contact us.
          </h1>
          <p className="text-lg text-[#12110B]/80 font-medium leading-relaxed max-w-md mb-16">
            Interested in working together? So are we! Simply fill out the form on this page to start the conversation. Already have a project brief? Please send your RFP directly to hello@thecontentgang.com
          </p>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            
            {/* Location 1 */}
            <div className="flex flex-col">
              <svg className="w-6 h-6 text-[#FF4F31] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1z" />
              </svg>
              <h3 className="text-lg font-medium text-[#12110B] flex items-center gap-2 mb-4">
                Hyderabad, India <span className="w-2 h-2 rounded-full bg-red-500"></span>
              </h3>
              <div className="text-base text-[#12110B]/70 font-medium leading-relaxed mb-6">
                <strong className="text-[#12110B] block mb-1">The Content Gang HQ</strong>
                401 4th Floor, Asian Sun City<br />
                kondapur, Hyderabad<br />
                Telangana 500081
              </div>
              <div className="text-base text-[#12110B]/70 font-medium leading-relaxed">
                <a href="mailto:hello@thecontentgang.com" className="block hover:text-[#FF4F31] transition-colors">hello@thecontentgang.com</a>
                <a href="tel:+917416927037" className="block hover:text-[#FF4F31] transition-colors">+91 74169 27037</a>
              </div>
            </div>

            {/* Location 2 */}
            <div className="flex flex-col">
              <svg className="w-6 h-6 text-[#FF4F31] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <h3 className="text-lg font-medium text-[#12110B] flex items-center gap-2 mb-4">
                Global Remote <span className="w-2 h-2 rounded-full bg-green-500"></span>
              </h3>
              <div className="text-base text-[#12110B]/70 font-medium leading-relaxed mb-6">
                <strong className="text-[#12110B] block mb-1">The Content Gang Digital</strong>
                Available worldwide across<br />
                all timezones for remote<br />
                collaboration.
              </div>
              <div className="text-base text-[#12110B]/70 font-medium leading-relaxed">
                <a href="mailto:hello@thecontentgang.com" className="block hover:text-[#FF4F31] transition-colors">hello@thecontentgang.com</a>
                <span className="block">Available 24/7</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Form */}
        <div className="flex flex-col">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-2xl">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelClasses}>Name{asterisk}</label>
                <input type="text" id="name" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="company" className={labelClasses}>Company{asterisk}</label>
                <input type="text" id="company" required className={inputClasses} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className={labelClasses}>Email{asterisk}</label>
                <input type="email" id="email" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>Phone</label>
                <input type="tel" id="phone" className={inputClasses} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>Message{asterisk}</label>
              <textarea 
                id="message" 
                required 
                maxLength={600}
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClasses} resize-none mb-1`}
              ></textarea>
              <div className="text-sm text-[#12110B]/50 font-medium">
                {message.length} of 600 max characters
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <input 
                type="checkbox" 
                id="privacy" 
                required 
                className="w-4 h-4 rounded border-[#12110B]/20 text-[#12110B] focus:ring-[#FF4F31] cursor-pointer"
              />
              <label htmlFor="privacy" className="text-base font-medium text-[#12110B] cursor-pointer">
                I agree to the privacy policy.{asterisk}
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`group flex items-center justify-between w-[220px] px-6 py-4 mt-4 bg-[#F4EFEA] text-[#12110B] font-medium text-lg rounded-xl transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#12110B] hover:text-white'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
              {!isSubmitting && (
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              )}
            </button>
          </form>
        </div>

      </div>

      {/* ========================================= */}
      {/* FULL WIDTH MAP SECTION                    */}
      {/* ========================================= */}
      <div className="max-w-[1400px] mx-auto mt-24 md:mt-32">
        <div className="w-full h-[400px] md:h-[500px] bg-[#E5E3DF] rounded-[2rem] overflow-hidden shadow-sm border border-[#12110B]/10 relative group">
          {/* 
            Google Maps Iframe 
            CSS classes added to make it grayscale by default to match the clean aesthetic,
            and switch to full color when the user hovers over the map.
          */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.036791882836!2d78.35872977685013!3d17.457953058097747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d3e20342c184965%3A0x557ed2e398b7e465!2sThe%20Content%20Gang!5e0!3m2!1sen!2sin!4v1789644702088!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          ></iframe>
          
          {/* Overlay text that fades out on hover */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-[#12110B]/5 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
            <h3 className="font-bold text-[#12110B] text-lg">The Content Gang</h3>
            <p className="text-[#12110B]/70 font-medium text-sm">HITEC City, Hyderabad</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;



