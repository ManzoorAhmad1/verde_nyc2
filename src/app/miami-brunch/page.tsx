// app/brunch/page.jsx

import BrunchBanner from "../components/miami-brunch/BrunchBanner";
import MiamiBrunchContent from "../components/miami-brunch/MiamiBrunchContent";


export const metadata = {
  title: 'Verde NYC Brunch | Best Sunday Brunch in New York',
  description: 'Experience Verde NYC\'s elevated Sunday brunch with Mediterranean and Asian inspired buffet, live music, and premium beverage packages in New York.',
};

export default function MiamiBrunchPage() {
  return (
    <main className="Index" data-collection-id="6952dd734f4b96693033cca0">
      {/* Banner Section */}
      <BrunchBanner />

      {/* Content Section */}
      <section id="brunch-content" className="bg-white">
        <MiamiBrunchContent />
      </section>
      
      {/* Index Navigation (from original) */}
      <nav className="Index-nav overlay fixed right-8 top-1/2 transform -translate-y-1/2 z-[100] hidden lg:block">
        <div className="Index-nav-inner">
          <a href="#brunch-banner" className="Index-nav-item active group flex items-center mb-4">
            <div className="Index-nav-indicator w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
            <div className="Index-nav-text opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-white">Brunch Banner</span>
            </div>
          </a>
          <a href="#brunch-content" className="Index-nav-item group flex items-center">
            <div className="Index-nav-indicator w-2 h-2 bg-white/50 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
            <div className="Index-nav-text opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-white">Verde NYC Brunch</span>
            </div>
          </a>
        </div>
      </nav>
    </main>
  );
}
