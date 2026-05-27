'use client';

// DESIGN DECISIONS:
// Layout Energy: editorial
// Depth Treatment: glassmorphic
// Divider Style: D-QUOTE
// Typography Personality: refined

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Gem, 
  Sparkles, 
  Palette, 
  Users, 
  Award, 
  Clock, 
  Phone, 
  Instagram, 
  MapPin, 
  CheckCheck, 
  Loader2, 
  ArrowRight,
  ImageOff,
  Menu,
  X,
  Mail
} from 'lucide-react';

// --- Types ---
interface Stat { number: string; label: string; icon: any; }
interface Feature { title: string; description: string; icon: any; }
interface Product { name: string; description: string; price: string; image_url: string; }
interface Testimonial { name: string; text: string; role: string; }

// --- Safe Image Component ---
function SafeImage({ src, alt, fill, width, height, className, priority, fallbackClassName }: any) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`flex items-center justify-center bg-zinc-900 border border-white/5 ${fallbackClassName ?? className ?? ''}`}>
        <ImageOff size={28} className="text-white/20" />
      </div>
    );
  }
  return (
    <Image 
      src={src} 
      alt={alt} 
      fill={fill}
      width={!fill ? (width ?? 800) : undefined}
      height={!fill ? (height ?? 600) : undefined}
      className={className} 
      priority={priority}
      onError={() => setError(true)} 
    />
  );
}

// --- Hooks ---
const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
};

// --- Main Page Component ---
export default function AbisolaPlace() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const brand = {
    name: "Abisola’s Place",
    tagline: "The Crown You Never Take Off",
    description: "Exquisite human hair collections curated for the modern woman who demands nothing less than opulent luxury.",
    region: "Ibadan, Nigeria"
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Collection", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const features: Feature[] = [
    { title: "Ethically Sourced", description: "Every strand is sourced from single donors to ensure cuticle alignment.", icon: Gem },
    { title: "HD Lace Technology", description: "Ultra-thin Swiss lace that disappears into any skin tone effortlessly.", icon: Sparkles },
    { title: "Custom Coloring", description: "Professional salon-grade coloring services available for all units.", icon: Palette }
  ];

  const products: Product[] = [
    { name: "Raw Cambodian Silk Straight", description: "Double drawn, 13x6 HD lace frontal unit for a seamless melt.", price: "₦450,000", image_url: "https://images.unsplash.com/photo-1701405200670-a730a2913974" },
    { name: "Luxe Burmese Curly", description: "High-definition steam-processed curls with natural high luster.", price: "₦385,000", image_url: "https://images.unsplash.com/photo-1779380118415-f5430a9d978e" },
    { name: "The Wealth Signature Wave", description: "Exclusive bouncy body wave collection, 300g density for maximum volume.", price: "₦620,000", image_url: "https://images.unsplash.com/photo-1590156351935-500f39544b27" },
    { name: "Imperial Blonde Pixie", description: "Custom colored honey blonde 613 raw hair tailored for elegance.", price: "₦250,000", image_url: "https://images.unsplash.com/photo-1618566909269-a09202832ac6" }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1600634999623-864991678406",
    "https://images.unsplash.com/photo-1590156221350-bbf9f89cd368",
    "https://images.unsplash.com/photo-1590156352123-30ceb8ac96b8",
    "https://images.unsplash.com/photo-1590156424570-698d124ec7dd",
    "https://images.unsplash.com/photo-1610595433626-e45abdb5a88b",
    "https://images.unsplash.com/photo-1610595426075-eed5a3f521ee"
  ];

  const stats: Stat[] = [
    { number: "1k+", label: "Luxury Clients", icon: Users },
    { number: "100%", label: "Raw Virgin Hair", icon: Award },
    { number: "5yr", label: "Craftsmanship", icon: Clock }
  ];

  const testimonials: Testimonial[] = [
    { name: "Mrs. Adeola", text: "The quality is unmatched. I've had my Burmese curls for two years and they still look brand new.", role: "CEO" },
    { name: "Bimpe O.", text: "The HD lace melt is unbelievable. Olayinka really knows her craft.", role: "Fashion Influencer" },
    { name: "Dr. Funmi", text: "Finally, a luxury vendor in Ibadan who actually delivers what they promise. Stunning hair.", role: "Medical Director" }
  ];

  // Reveal assigned per section
  const heroReveal = useScrollReveal();
  const featureReveal = useScrollReveal();
  const productReveal = useScrollReveal();
  const galleryReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const testimonialReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  return (
    <main className="relative min-h-screen">
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <div className="w-10 h-10 border border-secondary flex items-center justify-center bg-black rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-secondary font-heading text-xl font-bold -rotate-45 group-hover:rotate-0 transition-transform">A</span>
            </div>
            <span className="font-heading text-2xl font-bold tracking-tight text-white">ABISOLA’S</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-secondary transition-colors">{link.name}</a>
            ))}
          </div>

          <a href="#contact" className="hidden md:block bg-secondary text-black px-8 py-3 font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all">
            Secure Your Crown
          </a>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Sidebar --- */}
      <div className={`fixed inset-0 z-[100] transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-black border-l border-white/10 p-8 flex flex-col">
          <div className="flex justify-end mb-12">
            <button onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} onClick={() => setMobileMenuOpen(false)} className="font-heading text-4xl font-bold text-white hover:text-secondary transition-colors">{link.name}</a>
            ))}
          </div>
          <div className="mt-auto">
             <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="w-full block bg-secondary text-black text-center py-4 font-bold tracking-widest uppercase">Contact Us</a>
          </div>
        </div>
      </div>

      {/* --- HERO SECTION (Pattern: HR-A) --- */}
      <section id="home" ref={heroReveal.ref} className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-black via-black/95 to-secondary/10 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-secondary/10 rounded-full blur-[120px] pointer-events-none animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 max-w-5xl max-h-[70vh] rounded-[4rem] overflow-hidden rotate-2">
          <SafeImage src="https://images.unsplash.com/photo-1511945863317-d60e146e9016" alt="Luxury Hair" fill className="object-cover" priority />
        </div>

        <div className={`relative z-10 text-center max-w-5xl transition-all duration-1000 ${heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="font-heading text-7xl md:text-[9rem] font-medium text-white leading-[0.85] tracking-tight italic">Define Your Opulence</h1>
          <p className="text-white/60 mt-10 text-xl md:text-2xl max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            Ibadan’s premier destination for high-end human hair and soft glam mastery.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-14">
            <a href="#products" className="bg-secondary text-black px-12 py-5 font-black text-lg uppercase tracking-widest hover:scale-105 transition-all duration-300">
              Shop the Collection
            </a>
            <a href="#about" className="border border-white/20 text-white px-12 py-5 font-medium text-lg tracking-widest uppercase hover:bg-white/5 transition-all duration-300">
              Explore →
            </a>
          </div>
        </div>
      </section>

      {/* --- Divider: D-QUOTE --- */}
      <div className="py-24 px-8 text-center bg-secondary/5 border-y border-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)]" />
        <p className="relative font-heading text-3xl md:text-5xl font-black text-white max-w-3xl mx-auto leading-tight italic">
          &ldquo;{brand.tagline}&rdquo;
        </p>
        <p className="relative text-secondary/40 mt-6 text-xs tracking-[0.5em] uppercase font-bold">Nigeria’s Finest Quality Hair</p>
      </div>

      {/* --- FEATURES SECTION (Variant: F-BENTO) --- */}
      <section ref={featureReveal.ref} className="py-28 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-700 ${featureReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading text-6xl md:text-7xl font-bold text-white mb-6">The Gold Standard</h2>
            <p className="text-white/40 mb-16 text-xl max-w-xl">Why discerning women choose Abisola’s Place for their crowning glory.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured Bento Item */}
            <div className={`md:col-span-2 bg-secondary/5 rounded-3xl p-10 border border-secondary/20 hover:border-secondary transition-all duration-500 flex flex-col justify-between group min-h-[300px] ${featureReveal.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Gem className="text-secondary" size={32} />
              </div>
              <div>
                <h3 className="font-heading text-4xl font-bold text-white">{features[0].title}</h3>
                <p className="text-white/50 mt-4 text-lg max-w-md">{features[0].description}</p>
              </div>
            </div>

            {/* Smaller Bento Items */}
            {features.slice(1).map((f, i) => (
              <div key={i} className={`bg-zinc-900/50 rounded-3xl p-10 border border-white/5 hover:bg-zinc-900 hover:border-white/20 transition-all duration-500 flex flex-col justify-between min-h-[300px] transition-all duration-700 delay-200 ${featureReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center">
                   {i === 0 ? <Sparkles className="text-secondary" size={28} /> : <Palette className="text-secondary" size={28} />}
                </div>
                <div>
                  <h3 className="font-heading text-3xl font-bold text-white">{f.title}</h3>
                  <p className="text-white/40 text-base mt-4">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCTS SECTION (Variant: P-STAGGER) --- */}
      <section id="products" ref={productReveal.ref} className="py-28 px-6 bg-zinc-950 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-heading text-6xl md:text-8xl font-bold text-white leading-none">The Collection</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-8 opacity-50" />
            <p className="text-white/30 mt-8 font-mono tracking-widest uppercase text-sm">Sharp delivery, nationwide across Nigeria.</p>
          </div>

          <div className="space-y-32">
            {products.map((p, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 transition-all duration-1000 ${productReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="w-full md:w-1/2 relative group">
                  <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
                    <SafeImage src={p.image_url} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className={`absolute -inset-4 bg-secondary/10 rounded-[3.5rem] -z-10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                </div>
                
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                  <span className="font-mono text-secondary text-xs font-bold tracking-[0.4em] uppercase mb-6 block">0{i + 1} — Signature</span>
                  <h3 className="font-heading text-5xl md:text-6xl font-medium text-white leading-tight italic">{p.name}</h3>
                  <p className="text-white/50 mt-8 text-xl leading-relaxed font-light">{p.description}</p>
                  <div className={`mt-10 flex flex-col gap-8 ${i % 2 === 0 ? 'items-start' : 'md:items-end'}`}>
                    <span className="text-4xl font-heading font-bold text-secondary">{p.price}</span>
                    <a href="#contact" className="bg-secondary text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-colors duration-300">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION (Bonus) --- */}
      <section ref={galleryReveal.ref} className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="font-heading text-6xl font-bold text-white">The Lookbook</h2>
            <p className="text-white/40 max-w-sm">A glimpse into the luxurious world of Abisola’s Place clients.</p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((src, i) => (
              <div key={i} className={`break-inside-avoid group relative rounded-3xl overflow-hidden transition-all duration-700 ${galleryReveal.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <SafeImage src={src} alt={`Lookbook ${i + 1}`} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION (Variant: V3 Horizontal Split) --- */}
      <section id="about" ref={aboutReveal.ref} className="py-28 px-6 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className={`relative transition-all duration-1000 ${aboutReveal.isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="aspect-[3/4] relative rounded-[4rem] overflow-hidden border border-secondary/20">
              <SafeImage src="https://images.unsplash.com/photo-1511945863317-d60e146e9016" alt="The Visionary" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-secondary p-12 rounded-[2rem] hidden md:block">
              <span className="font-heading text-7xl font-bold text-black leading-none italic">OW</span>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${aboutReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <span className="text-secondary font-mono text-xs font-bold tracking-[0.5em] uppercase mb-4 block">The Visionary</span>
            <h2 className="font-heading text-6xl font-bold text-white mb-8">Olayinka Bisola Wealth</h2>
            <p className="text-white/60 text-xl leading-relaxed font-light mb-12">
              Olayinka Bisola Wealth founded Abisola’s Place with a singular vision: to redefine beauty through uncompromising quality. As a curator of luxury, she blends the art of hair with the essence of soft glam, ensuring every woman feels powerful and opulent from the moment they step into her world.
            </p>
            
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="font-heading text-4xl font-bold text-secondary mb-2">{s.number}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS (Variant: T-MASONRY) --- */}
      <section ref={testimonialReveal.ref} className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-6xl font-bold text-white text-center mb-24">The Reviews</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {testimonials.map((t, i) => (
              <div key={i} className={`break-inside-avoid bg-zinc-900/40 p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-secondary/30 transition-all duration-500 ${testimonialReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${i * 120}ms` }}>
                <p className="text-white/80 text-xl leading-relaxed italic mb-8 relative z-10">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between border-t border-white/5 pt-8 relative z-10">
                  <div>
                    <p className="font-heading font-bold text-white text-xl">{t.name}</p>
                    <p className="text-secondary/60 text-xs uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                  <div className="flex gap-1.5">
                    {[1,2,3].map(n => <div key={n} className="w-2 h-2 rounded-full bg-secondary/40" />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION (Variant: C4 Full-bleed accent) --- */}
      <section id="contact" ref={contactReveal.ref} className="py-32 px-6 bg-secondary relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${contactReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <h2 className="font-heading text-[10vw] md:text-[7vw] font-black text-black leading-none mb-12 italic">
              Secure Your Crown
            </h2>
            <div className="space-y-8 border-l-8 border-black/10 pl-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-secondary" />
                </div>
                <p className="text-black text-2xl font-bold tracking-tight">+234 703 530 4949</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                  <Instagram size={20} className="text-secondary" />
                </div>
                <p className="text-black text-2xl font-bold tracking-tight">@abisola_place07</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-secondary" />
                </div>
                <p className="text-black text-xl font-medium">Ibadan, Nigeria</p>
              </div>
            </div>
          </div>

          <div className={`w-full relative z-10 transition-all duration-1000 delay-300 ${contactReveal.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
             <ContactForm />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-4xl font-bold text-white mb-4">Abisola’s Place</h3>
            <p className="text-white/40 max-w-xs">{brand.description}</p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-secondary mb-2">Explore</span>
              {navLinks.map((link, i) => (
                <a key={i} href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">{link.name}</a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-secondary mb-2">Connect</span>
              <a href="https://wa.me/2347035304949" className="text-sm text-white/50 hover:text-white transition-colors">WhatsApp</a>
              <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
             <p className="text-white/30 text-sm">&copy; {new Date().getFullYear()} Abisola’s Place Luxury Hair.</p>
             <p className="text-white/20 text-xs mt-2 italic">Opulence in every strand.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// --- Universal Contact Form Component ---
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center animate-scaleIn bg-black rounded-[3rem] shadow-2xl relative overflow-hidden border border-black/10">
        <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mb-8 border border-secondary/30">
          <CheckCheck size={40} className="text-secondary" />
        </div>
        <h3 className="font-heading text-4xl font-bold text-white mb-4">Request Received</h3>
        <p className="text-white/60 max-w-sm text-lg">Our concierge team will review your inquiry and contact you shortly regarding your custom unit.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-black p-10 sm:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
      <h3 className="font-heading text-3xl font-bold text-white mb-10">Send an Inquiry</h3>
      <div className="space-y-6">
        {(['name', 'email', 'phone'] as const).map(field => (
          <div key={field} className="relative">
            <input
              type={field === 'email' ? 'email' : 'text'}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={e => setForm(prev => ({ ...prev, [field]: e.target.value }))}
              required={field !== 'phone'}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/30 outline-none transition-all duration-300 focus:bg-white/10 focus:border-secondary"
            />
          </div>
        ))}
        <textarea 
          rows={4} 
          placeholder="Which collection are you interested in?"
          value={form.message}
          onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
          required
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/30 outline-none resize-none transition-all duration-300 focus:bg-white/10 focus:border-secondary"
        />
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="w-full mt-10 bg-secondary text-black py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 disabled:opacity-60 flex justify-center items-center gap-3 group"
      >
        {loading ? (
          <span className="flex items-center gap-2"><Loader2 className="animate-spin" size={20} /> Processing...</span>
        ) : (
          <>Send Inquiry <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></>
        )}
      </button>
    </form>
  );
}