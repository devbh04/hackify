import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f2f4f3] w-full pt-24 pb-12 font-body">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-12 py-24 max-w-screen-2xl mx-auto">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-bold text-[#1c1b1b] mb-6 flex items-center">
            <img src="/hacklogo.png" alt="Hackify Logo" className="h-10" />
          </div>
          <p className="text-[#414942] text-sm leading-relaxed mb-8">
            © 2024 Hackify. The Human Curator of Tech Potential. Elevating careers through intentional curation.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#414942] hover:text-[#3e674d] cursor-pointer transition-colors">brand_awareness</span>
            <span className="material-symbols-outlined text-[#414942] hover:text-[#3e674d] cursor-pointer transition-colors">campaign</span>
            <span className="material-symbols-outlined text-[#414942] hover:text-[#3e674d] cursor-pointer transition-colors">public</span>
          </div>
        </div>
        
        <div>
          <h6 className="font-extrabold text-xs uppercase tracking-widest text-on-surface mb-6">Explore</h6>
          <ul className="space-y-4">
            <li><a className="text-[#414942] hover:text-[#3e674d] transition-colors" href="/hackathon">Hackathons</a></li>
            <li><a className="text-[#414942] hover:text-[#3e674d] transition-colors" href="/internship">Internships</a></li>
            <li><a className="text-[#414942] hover:text-[#3e674d] transition-colors" href="/courses">Courses</a></li>
            <li><a className="text-[#414942] hover:text-[#3e674d] transition-colors" href="/mentorship">Mentors</a></li>
          </ul>
        </div>
        
        <div>
          <h6 className="font-extrabold text-xs uppercase tracking-widest text-on-surface mb-6">Company</h6>
          <ul className="space-y-4">
            <li><a className="text-[#414942] hover:text-[#3e674d] transition-colors" href="#">About Us</a></li>
            <li><a className="text-[#414942] hover:text-[#3e674d] transition-colors" href="#">Contact</a></li>
            <li><a className="text-[#414942] hover:text-[#3e674d] transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="text-[#414942] hover:text-[#3e674d] transition-colors" href="#">Terms of Service</a></li>
          </ul>
        </div>
        
        <div>
          <h6 className="font-extrabold text-xs uppercase tracking-widest text-on-surface mb-6">Subscribe</h6>
          <p className="text-[#414942] text-sm mb-4">Weekly curation of top tech opportunities.</p>
          <div className="relative">
            <input 
              className="w-full bg-surface-container-highest border-none rounded-full px-4 py-2 text-sm focus:ring-secondary focus:outline-none" 
              placeholder="email@example.com" 
              type="email" 
            />
            <button className="absolute right-1 top-1 bg-on-primary-fixed text-surface p-1 rounded-full hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-screen-2xl mx-auto px-12 border-t border-outline-variant/10 pt-8 text-center text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">
        Built for the future of work. Made with intentionality.
      </div>
    </footer>
  );
};

export default Footer;