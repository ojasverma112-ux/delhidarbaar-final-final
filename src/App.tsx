import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Index from './pages/Index';
import { Globe } from 'lucide-react';

function App() {
  const [lang, setLang] = useState<'nl' | 'en'>('nl');

  return (
    <Router>
      <div className="min-h-screen bg-luxury-900 text-luxury-ivory font-body selection:bg-luxury-gold selection:text-luxury-900">
        
        {/* Floating Header / Language Toggle */}
        <header className="fixed top-0 w-full z-50 bg-luxury-900/80 backdrop-blur-lg border-b border-white/5 transition-all duration-500">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
            <div className="flex items-center gap-3 cursor-pointer">
               {/* Replace with actual logo URL from delhidarbaar.nl */}
              <img src="/logo-delhi-darbaar.png" alt="Delhi Darbaar Logo" className="h-10 w-auto object-contain drop-shadow-glow-gold" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none text-luxury-gold tracking-wide">Delhi Darbaar</span>
                <span className="text-[10px] tracking-[0.2em] text-luxury-muted uppercase">Hilversum</span>
              </div>
            </div>

            <nav className="hidden md:flex gap-8 items-center font-medium text-sm tracking-wide">
              <a href="#menu" className="hover:text-luxury-gold transition-colors">{lang === 'nl' ? 'Menu' : 'Menu'}</a>
              <a href="#reviews" className="hover:text-luxury-gold transition-colors">{lang === 'nl' ? 'Recensies' : 'Reviews'}</a>
              <button onClick={() => setLang(lang === 'nl' ? 'en' : 'nl')} className="flex items-center gap-2 hover:text-luxury-gold transition-colors">
                <Globe size={16} /> {lang.toUpperCase()}
              </button>
              <button className="bg-luxury-gold text-luxury-900 px-6 py-2.5 rounded-full font-semibold hover:bg-luxury-ivory transition-all shadow-glow-gold hover:shadow-anti-gravity hover:-translate-y-1">
                {lang === 'nl' ? 'Bestel Nu' : 'Order Now'}
              </button>
            </nav>

          </div>
        </header>

        <Routes>
          <Route path="/" element={<Index lang={lang} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
