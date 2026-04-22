import { motion } from 'framer-motion';
import { Star, Clock, MapPin, ChefHat, UtensilsCrossed } from 'lucide-react';

// Animation Variants for buttery smooth reveals
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Index({ lang }: { lang: 'nl' | 'en' }) {
  const content = {
    nl: {
      hero: "Authentiek Indiaas Dineren in Hilversum",
      sub: "Traditionele recepten, gedurfde kruiden, elegante sfeer. Afhalen, bezorgen & dineren.",
      book: "Tafel Reserveren",
      order: "Online Bestellen",
      signature: "Onze Specialiteiten",
      reviews: "Wat Onze Gasten Zeggen",
    },
    en: {
      hero: "Authentic Indian Dining in Hilversum",
      sub: "Traditional recipes, bold spices, elegant atmosphere. Takeaway, delivery & dine-in.",
      book: "Reserve Table",
      order: "Order Online",
      signature: "Signature Dishes",
      reviews: "What Our Guests Say",
    }
  };

  const t = content[lang];

  return (
    <main className="overflow-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        {/* Background Parallax Image */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full bg-[url('https://delhidarbaar.nl/wp-content/uploads/2023/05/home-slider-1.jpg')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-900 via-luxury-900/60 to-transparent" />
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
        >
          <motion.div variants={fadeUp} className="flex justify-center items-center gap-2 mb-6 text-luxury-gold">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <span className="ml-2 text-sm font-body tracking-widest uppercase">4.8 Google Rated</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1]">
            {t.hero}
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-luxury-muted max-w-2xl mx-auto mb-10 font-light">
            {t.sub}
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-luxury-gold text-luxury-900 font-semibold rounded-full hover:bg-white transition-all shadow-glow-gold hover:shadow-anti-gravity hover:-translate-y-1 duration-300">
              {t.order}
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md font-semibold rounded-full hover:border-luxury-gold hover:text-luxury-gold transition-all hover:-translate-y-1 duration-300">
              {t.book}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ANTI-GRAVITY SIGNATURE DISHES */}
      <section id="menu" className="py-32 relative z-10 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-heading text-4xl md:text-6xl text-luxury-gold mb-4">{t.signature}</h2>
            <div className="w-24 h-1 bg-luxury-gold/50 mx-auto rounded-full" />
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {/* Dish Card 1 - Butter Chicken */}
            <motion.div 
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-glass-gradient border border-white/5 rounded-2xl p-6 shadow-anti-gravity backdrop-blur-xl group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl mb-6 h-64">
                <img src="/dish-butter-chicken.jpg" alt="Butter Chicken" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading text-2xl font-semibold group-hover:text-luxury-gold transition-colors">Butter Chicken</h3>
                <span className="text-luxury-gold font-semibold text-lg">€18.95</span>
              </div>
              <p className="text-luxury-muted text-sm line-clamp-2">Gegrilde kip in een romige, milde tomatensaus met fenegriek en roomboter.</p>
            </motion.div>

            {/* Dish Card 2 - Dal Makhni */}
            <motion.div 
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-glass-gradient border border-white/5 rounded-2xl p-6 shadow-anti-gravity backdrop-blur-xl group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl mb-6 h-64">
                <img src="/dish-dal-makhni.jpg" alt="Dal Makhni" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading text-2xl font-semibold group-hover:text-luxury-gold transition-colors">Dal Makhni</h3>
                <span className="text-luxury-gold font-semibold text-lg">€16.95</span>
              </div>
              <p className="text-luxury-muted text-sm line-clamp-2">Zwarte linzen langzaam gekookt in een romige, boterachtige tomatensaus.</p>
            </motion.div>

            {/* Dish Card 3 - Lamb Biryani */}
            <motion.div 
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-glass-gradient border border-white/5 rounded-2xl p-6 shadow-anti-gravity backdrop-blur-xl group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl mb-6 h-64">
                <img src="/dish-biryani.jpg" alt="Lamb Biryani" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading text-2xl font-semibold group-hover:text-luxury-gold transition-colors">Lamb Biryani</h3>
                <span className="text-luxury-gold font-semibold text-lg">€21.50</span>
              </div>
              <p className="text-luxury-muted text-sm line-clamp-2">Geurig basmatirijst gelaagd met mals lamsvlees, saffraan en verse kruiden.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. REAL GOOGLE REVIEWS (Sliding Cards) */}
      <section id="reviews" className="py-24 bg-luxury-800 relative border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-5xl text-center mb-16">{t.reviews}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Real Review 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-luxury-900 border border-white/5 p-8 rounded-2xl shadow-anti-gravity"
            >
              <div className="flex text-luxury-gold mb-4">
                <Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" />
              </div>
              <p className="text-luxury-ivory font-light italic mb-6">"Best Indian I have ever eaten. Authentic Indian flavors, amazing vegan options. Beautiful ambience and kind staff."</p>
              <span className="text-luxury-muted font-semibold text-sm uppercase tracking-wider">— Google Reviewer</span>
            </motion.div>

            {/* Real Review 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-luxury-900 border border-white/5 p-8 rounded-2xl shadow-anti-gravity"
            >
              <div className="flex text-luxury-gold mb-4">
                <Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" />
              </div>
              <p className="text-luxury-ivory font-light italic mb-6">"Heerlijk authentiek eten, het personeel is super vriendelijk. Absolute aanrader voor Indiaas in Hilversum."</p>
              <span className="text-luxury-muted font-semibold text-sm uppercase tracking-wider">— Local Local Guide</span>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
