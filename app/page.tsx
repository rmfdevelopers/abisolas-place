'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Gem, 
  Scissors, 
  Globe, 
  Users, 
  Package, 
  Award, 
  Phone, 
  Instagram, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCheck, 
  Loader2, 
  Menu, 
  X, 
  ImageOff,
  ChevronRight
} from 'lucide-react';

// DESIGN DECISIONS:
// Layout Energy: editorial
// Depth Treatment: layered
// Divider Style: D-STAT
// Typography Personality: refined

// --- UI Components ---

const SafeImage = ({ src, alt, fill, width, height, className, priority }: any) => {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`flex items-center justify-center bg-zinc-900 border border-white/5 ${className}`}>
        <ImageOff size={24} className="text-white/10" />
      </div>
    );
  }
  return (
    <Image 
      src={src} 
      alt={alt} 
      fill={fill} 
      width={!fill ? width : undefined} 
      height={!fill ? height : undefined} 
      className={className} 
      priority={priority}
      onError={() => setError(true)}
    />
  );
};

const useScrollReveal = (threshold = 0.1) => {
  const ref = useRef<any>(null);
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

// --- DATA ---

const brand = {
  name: "Abisola’s Place",
  tagline: "The Ultimate Haven for Premium Human Hair",
  description: "Exquisite SDD hair, bone straight, and bouncy curls curated for the woman of opulence.",
  industry: "Beauty",
  region: "Nigeria"
};

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1707224815267-3c85452e154c?q=80&w=1080",
  founder: "https://images.unsplash.com/photo-1628852527234-8e608956df03?q=80&w=1080",
  gallery: [
    "https://images.unsplash.com/photo-1633681121751-e4a0392602b8?q=80&w=1080",
    "https://images.unsplash.com/photo-1628852526804-9c01d8fe80df?q=80&w=1080",
    "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=1080",
    "https://images.unsplash.com/photo-1577378187001-ed44409a0d44?q=80&w=1080",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1080",
    "https://images.unsplash.com/photo-1714645855525-10e27e6e8ec7?q=80&w=1080"
  ]
};

const products = [
  {
    name: "Super Double Drawn Bone Straight",
    description: "Ultra-sleek, 12A grade donor hair with a mirror-like shine.",
    price: "₦450,000",
    image: "https://images.unsplash.com/photo-1663582815337-52558dc2f9fd?q=80&w=1080"
  },
  {
    name: "Signature Bouncy Curls",
    description: "Voluminous, soft-glam curls that maintain their bounce for years.",
    price: "₦320,000",
    image: "https://images.unsplash.com/photo-1565357419076-6acd4a10094e?q=80&w=1080"
  },
  {
    name: "Luxe SDD Pixie Curl",
    description: "Sophisticated short curls for the bold and elegant woman.",
    price: "₦185,000",
    image: "https://images.unsplash.com/photo-1628852527234-8e608956df03?q=80&w=1080"
  },
  {
    name: "Raw Donor Bouncy Waves",
    description: "Unprocessed, premium raw hair for natural movement and longevity.",
    price: "₦850,000",
    image: "https://images.unsplash.com/photo-1637463675679-d86b8f934b59?q=80&w=1080"
  }
];

const features = [
  { title: "100% Raw Donor Hair", description: "Single-sourced bundles ensuring consistent texture and unmatched quality.", icon: Gem },
  { title: "Sleek Customization", description: "Expertly plucked and styled units tailored to your head measurements.", icon: Scissors },
  { title: "Global Shipping", description: "From our doors in Ibadan to your doorstep anywhere in the world.", icon: Globe }
];

const testimonials = [
  { name: "Adesua O.", role: "Corporate Professional", text: "The bone straight is actually reflective! I've had mine for 2 years and it still looks brand new." },
  { name: "Teniola B.", role: "Content Creator", text: "Bisola knows hair. The SDD curls I bought are the softest I've ever felt. Ibadan's best kept secret." },
  { name: "Folake W.", role: "Entrepreneur", text: "The packaging, the quality, and the service. Everything about Abisola’s Place is five-star luxury." }
];

export default function Site() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/95 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-secondary flex items-center justify-center text-secondary font-black text-xl group-hover:bg-secondary group-hover:text-black transition-all">A</div>
            <span className="font-heading text-xl font-bold tracking-tighter text-white uppercase">{brand.name}</span>
          </a>
          
          <div className="hidden md:flex gap-10 items-center">
            {['Home', 'Shop', 'Foundress', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-xs uppercase tracking-[0.3em] font-medium text-white/70 hover:text-secondary transition-colors">{link}</a>
            ))}
            <a href="#contact" className="bg-secondary text-black px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-secondary/20">
              Shop Now
            </a>
          </div>

          <button onClick={() => setNavOpen(true)} className="md:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`fixed inset-0 z-[60] bg-primary transition-transform duration-700 ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-16">
            <span className="font-heading text-2xl font-black text-secondary">A.P</span>
            <button onClick={() => setNavOpen(false)} className="text-white"><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-8">
            {['Home', 'Shop', 'Foundress', 'Contact'].map((link, i) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={() => setNavOpen(false)}
                className="text-4xl font-heading font-black text-white hover:text-secondary transition-colors"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link}
              </a>
            ))}
          </div>
          <div className="mt-auto pt-10 border-t border-white/10">
            <p className="text-secondary font-mono text-xs uppercase tracking-[0.3em] mb-4">Inquiry</p>
            <p className="text-white/60">wa.me/2347035304949</p>
          </div>
        </div>
      </div>

      {/* Hero Section - HR-A */}
      <section id="hero" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-black via-black to-secondary/20 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-secondary/10 rounded-full blur-[140px] pointer-events-none animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 max-w-6xl max-h-[80vh] rounded-[5rem] overflow-hidden rotate-2">
          <SafeImage src={IMAGES.hero} alt={brand.name} fill className="object-cover" priority />
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <h1 className="font-heading text-6xl md:text-[7.5rem] font-black text-white leading-[0.9] tracking-tighter animate-fadeIn">
            Crown Yourself <br/><span className="italic text-secondary">in Opulence.</span>
          </h1>
          <p className="text-white/50 mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-slideUp">
            Luxury isn't a choice; it's an identity. Discover the finest SDD and bone straight hair collection in Ibadan.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12 animate-slideUp" style={{ animationDelay: '400ms' }}>
            <a href="#products" className="bg-secondary text-black px-12 py-5 font-bold text-sm uppercase tracking-widest
              hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 rounded-full">
              Shop the Collection
            </a>
            <a href="#foundress" className="border border-white/20 text-white px-12 py-5 font-medium text-sm uppercase tracking-widest
              hover:bg-white/5 transition-all duration-300 rounded-full">
              Meet Founder
            </a>
          </div>
        </div>
      </section>

      {/* Features - F-BENTO */}
      <section id="features" className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <p className="text-secondary font-mono text-xs tracking-[0.5em] uppercase mb-4">Our Essence</p>
              <h2 className="font-heading text-5xl md:text-7xl font-black text-white leading-none">The Abisola <br/>Standard</h2>
            </div>
            <p className="text-white/40 max-w-xs text-lg">Why the elite choose our tresses for their most defining moments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-secondary/5 rounded-[3rem] p-10 md:p-16 border border-secondary/10
              hover:border-secondary/30 transition-all duration-500 group flex flex-col justify-between min-h-[400px] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700">
                <Gem size={200} />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-8">
                <Gem size={32} />
              </div>
              <div>
                <h3 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">100% Raw Donor Hair</h3>
                <p className="text-white/50 text-xl leading-relaxed max-w-md">Single-sourced bundles ensuring consistent texture and unmatched quality for life.</p>
              </div>
            </div>

            <div className="space-y-6">
              {features.slice(1).map((f, i) => {
                const Icon = f.icon === 'Scissors' ? Scissors : Globe;
                return (
                  <div key={i} className="bg-zinc-900/50 rounded-[3rem] p-10 border border-white/5 hover:border-secondary/20 transition-all duration-500 h-[calc(50%-12px)] flex flex-col justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white mb-2">{f.title}</h3>
                      <p className="text-white/40 leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divider - D-STAT */}
      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 text-center">
          {[
            { number: '1k+', label: 'Loyal Followers' },
            { number: '500+', label: 'Luxury Units Delivered' },
            { number: '100%', label: 'Authenticity Rate' }
          ].map((s, i) => (
            <div key={i} className="px-8 py-8 md:py-4">
              <p className="text-6xl font-heading font-black text-black tracking-tight">{s.number}</p>
              <p className="text-black/60 text-xs mt-2 font-bold uppercase tracking-[0.3em]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products - P-STAGGER */}
      <section id="shop" className="py-32 px-6 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="font-heading text-6xl md:text-8xl font-black text-white">The Editorial Edit</h2>
            <p className="text-white/30 text-xl mt-6 uppercase tracking-[0.2em]">Authentic Curations</p>
          </div>

          <div className="space-y-40">
            {products.map((p, i) => {
              const { ref, isVisible } = useScrollReveal();
              return (
                <div key={i} ref={ref} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}>
                  <div className={`w-full md:w-1/2 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-2xl group">
                      <SafeImage src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    </div>
                    <div className={`absolute -bottom-10 ${i % 2 === 0 ? '-right-10' : '-left-10'} w-2/3 h-2/3 bg-secondary/5 rounded-full blur-3xl -z-10`} />
                  </div>
                  <div className={`w-full md:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (i % 2 === 0 ? 'translate-x-20' : '-translate-x-20')}`}>
                    <span className="font-mono text-secondary text-sm font-bold tracking-[0.4em] uppercase mb-6 block">0{i + 1} — Signature</span>
                    <h3 className="font-heading text-5xl md:text-6xl font-black text-white leading-none mb-8">{p.name}</h3>
                    <p className="text-white/50 text-xl leading-relaxed mb-10">{p.description}</p>
                    <div className="flex items-end gap-10">
                      <div>
                        <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Pricing From</p>
                        <p className="text-4xl font-heading font-black text-secondary">{p.price}</p>
                      </div>
                      <a href="#contact" className="group flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest pb-2 border-b border-white/20 hover:border-secondary hover:text-secondary transition-all">
                        Inquire Now <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About - Founders Section - V3 Split */}
      <section id="foundress" className="min-h-screen grid md:grid-cols-2 bg-zinc-900 overflow-hidden">
        <div className="relative min-h-[60vh] md:min-h-full">
          <SafeImage src={IMAGES.founder} alt="Olayinka Bisola Wealth" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay" />
          <div className="absolute bottom-12 left-12">
            <p className="text-white font-heading text-4xl font-black">Olayinka Bisola Wealth</p>
            <p className="text-secondary uppercase tracking-[0.4em] text-xs font-bold mt-2">Visionary & Founder</p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-8 md:px-20 py-24 bg-primary border-l border-white/10 relative">
          <div className="absolute top-0 right-0 p-20 opacity-[0.02] font-heading text-[20vw] font-black select-none pointer-events-none">ABISOLA</div>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-white mb-10 leading-none">Meet the <br/>Visionary</h2>
          <div className="space-y-8 text-white/50 text-lg leading-relaxed max-w-xl">
            <p>Founded by Olayinka Bisola Wealth, Abisola’s Place was born from a passion for true luxury. Olayinka believes every woman deserves to feel like royalty.</p>
            <p>Through meticulous sourcing and a soft-glam aesthetic, she has transformed Abisola’s Place into Nigeria’s premier destination for authentic human hair.</p>
          </div>
          <div className="mt-16 flex flex-wrap gap-8">
            <div className="px-8 py-6 border border-white/10 rounded-2xl bg-white/5">
              <p className="text-3xl font-heading font-black text-secondary">Nigeria</p>
              <p className="text-white/30 text-xs uppercase tracking-widest mt-1">Based in Ibadan</p>
            </div>
            <div className="px-8 py-6 border border-white/10 rounded-2xl bg-white/5">
              <p className="text-3xl font-heading font-black text-secondary">Global</p>
              <p className="text-white/30 text-xs uppercase tracking-widest mt-1">Shipping Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Lookbook */}
      <section className="py-32 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl md:text-7xl font-black text-white">The Lookbook</h2>
            <p className="text-secondary font-mono tracking-[0.4em] mt-4 uppercase">Real Women, Real Luxury</p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {IMAGES.gallery.map((src, i) => (
              <div key={i} className="break-inside-avoid relative group rounded-[2rem] overflow-hidden">
                <SafeImage src={src} alt={`Look ${i}`} width={600} height={800} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-heading italic text-xl">@abisola_place07</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - T-MASONRY */}
      <section className="py-32 px-6 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-5xl md:text-7xl font-black text-white text-center mb-24">The Diamond <br/>Reviews</h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <div key={i} className="break-inside-avoid bg-black p-10 rounded-[2.5rem] border border-white/5 hover:border-secondary/30 transition-all duration-500 group relative">
                <div className="absolute top-8 right-10 text-secondary/10 group-hover:text-secondary/20 transition-colors">
                  <Gem size={40} />
                </div>
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(n => <div key={n} className="w-1.5 h-1.5 rounded-full bg-secondary" />)}
                </div>
                <p className="text-white/70 text-xl leading-relaxed italic mb-8">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-black text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-lg">{t.name}</p>
                    <p className="text-white/30 text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - C1 */}
      <section id="contact" className="py-32 px-6 bg-primary relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-20 items-center">
          <div>
            <h2 className="font-heading text-6xl md:text-8xl font-black text-white mb-10 leading-tight">Step Into <br/>Our World</h2>
            <p className="text-white/40 text-xl leading-relaxed mb-12">Visit our Ibadan studio or reach out globally for personalized consultations.</p>
            
            <div className="space-y-6">
              <a href="https://wa.me/c/2347035304949" target="_blank" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">WhatsApp Concierge</p>
                  <p className="text-white text-lg font-bold">+234 703 530 4949</p>
                </div>
              </a>
              <a href="https://instagram.com/abisola_place07" target="_blank" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-black transition-all">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Instagram</p>
                  <p className="text-white text-lg font-bold">@abisola_place07</p>
                </div>
              </a>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Physical Studio</p>
                  <p className="text-white text-lg font-bold">Ibadan, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="w-10 h-10 border border-secondary flex items-center justify-center text-secondary font-black text-lg">A</div>
              <span className="font-heading text-2xl font-bold tracking-tighter text-white uppercase">{brand.name}</span>
            </div>
            <p className="text-white/30 text-sm tracking-widest uppercase">The Ultimate Haven for Premium Human Hair</p>
            <p className="text-secondary/50 text-xs mt-4 font-mono">Sharp delivery, nationwide.</p>
          </div>

          <div className="flex gap-12 text-center md:text-left">
            <div>
              <p className="text-white font-bold mb-4">Explore</p>
              <div className="flex flex-col gap-2">
                {['Home', 'Shop', 'Testimonials', 'Gallery'].map(l => (
                  <a key={l} href="#" className="text-white/40 hover:text-secondary text-sm transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white font-bold mb-4">Support</p>
              <div className="flex flex-col gap-2">
                {['Shipping', 'Wholesale', 'Hair Care', 'Privacy'].map(l => (
                  <a key={l} href="#" className="text-white/40 hover:text-secondary text-sm transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4 font-mono">© {new Date().getFullYear()} Abisola’s Place</p>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-secondary hover:text-secondary transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-secondary hover:text-secondary transition-all">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 2000);
  };

  if (sent) {
    return (
      <div className="bg-secondary/10 p-16 rounded-[3rem] border border-secondary/20 text-center animate-scaleIn">
        <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-8 border border-secondary/40">
          <CheckCheck size={40} className="text-secondary" />
        </div>
        <h3 className="font-heading text-4xl font-black text-white mb-4">Request Received</h3>
        <p className="text-white/50 text-xl">Thank you. Our luxury concierge will contact you shortly to finalize your order.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-900/50 p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-secondary/10 transition-colors duration-700" />
      <h3 className="font-heading text-3xl font-black text-white mb-10">Luxury Inquiry</h3>
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input 
            type="text" placeholder="Full Name" required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 outline-none focus:border-secondary transition-all"
            onChange={e => setForm({...form, name: e.target.value})}
          />
          <input 
            type="tel" placeholder="WhatsApp Number" required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 outline-none focus:border-secondary transition-all"
            onChange={e => setForm({...form, phone: e.target.value})}
          />
        </div>
        <input 
          type="email" placeholder="Email Address" required
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 outline-none focus:border-secondary transition-all"
          onChange={e => setForm({...form, email: e.target.value})}
        />
        <textarea 
          rows={4} placeholder="I am interested in..." required
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 outline-none focus:border-secondary transition-all resize-none"
          onChange={e => setForm({...form, message: e.target.value})}
        />
      </div>
      <button 
        type="submit" disabled={loading}
        className="w-full mt-10 bg-secondary text-black py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 flex justify-center items-center gap-4"
      >
        {loading ? <Loader2 className="animate-spin" /> : <>Send Inquiry <ArrowRight size={18} /></>}
      </button>
    </form>
  );
}