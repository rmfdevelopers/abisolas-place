'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  Crown, 
  Gem, 
  Sparkles, 
  CheckCheck, 
  ArrowRight, 
  Loader2, 
  Mail, 
  MapPin, 
  Phone, 
  Instagram, 
  ImageOff, 
  Menu, 
  X,
  Users,
  CheckCircle,
  ShoppingBag
} from 'lucide-react';

// DESIGN DECISIONS:
// Layout Energy: editorial
// Depth Treatment: layered
// Divider Style: D-RULE
// Typography Personality: mono-accent

const brief = {
  brand: {
    name: "Abisola’s Place",
    tagline: "The Crown of Olayinka Bisola Wealth",
    description: "Exquisite human hair collections curated for the woman who speaks in luxury and walks in power.",
    industry: "fashion",
    region: "nigeria",
    currency: "₦"
  },
  heroImage: {
    url: "https://images.unsplash.com/photo-1728362067765-296a274cae76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjB3ZWFyaW5nJTIwbG9uZyUyMGJsYWNrJTIwbHV4dXJ5JTIwaGFpciUyMGdvbGQlMjBqZXdlbHJ5fGVufDF8MHx8fDE3Nzk4Njk4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  products: [
    { name: "Raw Cambodian Silk Straight", description: "Unprocessed luxury strands with natural sheen and unparalleled thickness.", price: "₦450,000", url: "https://images.unsplash.com/photo-1707493041892-4ff4ef587993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByYXclMjBjYW1ib2RpYW4lMjBoYWlyJTIwYnVuZGxlcyUyMGJsYWNrJTIwYmFja2dyb3VuZHxlbnwxfDB8fHwxNzc5ODY5ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Burmese Bouncy Curls", description: "Rich, high-definition curls that retain shape and volume through every wear.", price: "₦620,000", url: "https://images.unsplash.com/photo-1637463675679-d86b8f934b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYnVybWVzZSUyMGN1cmx5JTIwaHVtYW4lMjBoYWlyJTIwYnVuZGxlJTIwc3R1ZGlvfGVufDF8MHx8fDE3Nzk4Njk4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Vietnamese Bone Straight", description: "Ultra-sleek, double-drawn hair that flows like liquid obsidian.", price: "₦380,000", url: "https://images.unsplash.com/photo-1769981271695-bb3d766ee419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHw0fHxwcmVtaXVtJTIwZmFzaGlvbnxlbnwwfDB8fHwxNzc5ODY5ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Signature Gold Frontal Unit", description: "Hand-tied HD lace with custom pre-plucked hairline for a seamless melt.", price: "₦1,000,000", url: "https://images.unsplash.com/photo-1663582815337-52558dc2f9fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBIRCUyMGxhY2UlMjBmcm9udGFsJTIwd2lnJTIwb24lMjBtYW5uZXF1aW58ZW58MXwwfHx8MTc3OTg2OTg5N3ww&ixlib=rb-4.1.0&q=80&w=1080" }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1603798125914-7b5d27789248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZmFzaGlvbnxlbnwwfDB8fHwxNzc5ODY5ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1633655442432-620aa55d7ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwZmFzaGlvbnxlbnwwfDB8fHwxNzc5ODY5ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1717944105945-669b3dd77bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHwzfHxwcmVtaXVtJTIwZmFzaGlvbnxlbnwwfDB8fHwxNzc5ODY5ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1769981271695-bb3d766ee419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHw0fHxwcmVtaXVtJTIwZmFzaGlvbnxlbnwwfDB8fHwxNzc5ODY5ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1769981653696-5ce5a59263bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY1NzJ8MHwxfHNlYXJjaHw1fHxwcmVtaXVtJTIwZmFzaGlvbnxlbnwwfDB8fHwxNzc5ODY5ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ]
};

function useScrollReveal(threshold = 0.15) {
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
}

function SafeImage({ src, alt, fill, width, height, className, priority, fallbackClassName }: {
  src: string; alt: string; fill?: boolean; width?: number; height?: number;
  className?: string; priority?: boolean; fallbackClassName?: string;
}) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br
        from-black via-zinc-900 to-black ${fallbackClassName ?? className ?? ''}`}>
        <ImageOff size={28} className="text-secondary/20" />
      </div>
    );
  }
  return (
    <Image src={src} alt={alt} fill={fill}
      width={!fill ? (width ?? 800) : undefined}
      height={!fill ? (height ?? 600) : undefined}
      className={className} priority={priority}
      onError={() => setError(true)} />
  );
}

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 ${
      scrolled ? 'bg-primary/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-lg text-black font-heading font-black text-xl">A</div>
          <span className="font-heading font-black text-xl tracking-tighter uppercase text-white">Abisola’s</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['The Vault', 'Our Founder', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
               className="text-white/60 hover:text-secondary text-sm font-medium tracking-widest uppercase transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-secondary text-black px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all">
            Secure Your Crown
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-primary z-[110] transition-transform duration-500 transform ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary flex items-center justify-center rounded text-black font-black">A</div>
              <span className="font-heading font-black text-xl">Abisola’s</span>
            </div>
            <button onClick={() => setMobileOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col gap-8">
            {['The Vault', 'Our Founder', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} 
                 onClick={() => setMobileOpen(false)}
                 className="text-3xl font-heading font-black text-white hover:text-secondary transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="mt-auto pt-8 border-t border-white/10">
            <p className="text-secondary font-mono text-xs tracking-widest uppercase mb-4">Follow the Wealth</p>
            <div className="flex gap-6">
              <Instagram className="text-white/60" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const SectionDivider = ({ text }: { text: string }) => (
  <div className="py-16 flex items-center gap-8 px-8 max-w-6xl mx-auto">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
    <span className="text-secondary font-mono text-xs tracking-[0.4em] uppercase whitespace-nowrap opacity-70">
      {text}
    </span>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
  </div>
);

const Hero = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="home" ref={ref} className="min-h-screen relative flex items-center justify-center
      bg-gradient-to-br from-black via-black/90 to-secondary/20 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-secondary/8 rounded-full blur-[120px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 max-w-4xl max-h-[60vh] rounded-[4rem] overflow-hidden rotate-3 transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-110'}`}>
        <SafeImage src={brief.heroImage.url} alt={brief.brand.name} fill className="object-cover" />
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 skew-y-0 translate-y-0' : 'opacity-0 skew-y-2 translate-y-8'}`}>
          <h1 className="font-heading text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter">
            THE CROWN <br/> <span className="text-secondary">OF WEALTH</span>
          </h1>
          <p className="text-accent/50 mt-8 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            {brief.brand.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="#the-vault" className="bg-secondary text-black px-10 py-5 font-black text-lg
              hover:brightness-110 hover:scale-105 transition-all duration-300 rounded-full">
              Shop The Collection
            </a>
            <a href="#our-founder" className="border border-white/20 text-white px-10 py-5 font-medium text-lg
              hover:bg-white/10 transition-all duration-300 rounded-full">
              The Legacy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const { ref, isVisible } = useScrollReveal();
  const features = [
    { title: "Raw Authenticity", description: "Each bundle is ethically sourced and 100% unprocessed human hair.", icon: <Crown size={32} /> },
    { title: "Artisanal Selection", description: "Curated personally by Olayinka Bisola Wealth to ensure peak quality.", icon: <Gem size={32} /> },
    { title: "Seamless Melt", description: "HD lace technology that disappears into every skin tone effortlessly.", icon: <Sparkles size={32} /> }
  ];

  return (
    <section ref={ref} className="py-28 px-6 bg-zinc-900/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-5xl font-black text-white mb-4">The Wealth Standard</h2>
        <p className="text-white/40 mb-14 text-lg">The hallmark of premium hair artistry.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`md:col-span-2 bg-secondary/10 rounded-2xl p-12 border border-secondary/20
            hover:border-secondary/40 transition-all duration-500 flex flex-col justify-between group min-h-[300px]
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary
              group-hover:scale-110 transition-transform duration-300">
              <Crown size={40} />
            </div>
            <div>
              <h3 className="font-heading text-4xl font-black text-white">Artisanal Selection</h3>
              <p className="text-white/50 mt-4 text-lg">Personally handpicked by our founder to ensure only the most opulent strands reach your collection.</p>
            </div>
          </div>
          {features.slice(1).map((f, i) => (
            <div key={i} className={`bg-white/5 rounded-2xl p-8 border border-white/8
              hover:bg-white/8 hover:border-white/15 transition-all duration-300 flex flex-col justify-between min-h-[300px]
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(i+1) * 150}ms` }}>
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-secondary">{f.icon}</div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">{f.title}</h3>
                <p className="text-white/45 text-sm mt-3 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductVault = () => {
  const { ref, isVisible } = useScrollReveal();
  const products = brief.products;

  return (
    <section id="the-vault" ref={ref} className="py-28 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-14">
          <h2 className="font-heading text-6xl font-black text-white max-w-sm leading-tight">The Vault</h2>
          <p className="text-white/40 max-w-xs text-right hidden md:block">Limited editions of our most coveted textures.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className={`md:col-span-7 group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="relative h-[500px]">
              <SafeImage src={products[0].url} alt={products[0].name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-10">
                <h3 className="font-heading text-4xl font-black text-white">{products[0].name}</h3>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-white/60 text-base line-clamp-2 max-w-xs">{products[0].description}</p>
                  <span className="text-secondary font-black text-2xl ml-4 shrink-0">{products[0].price}</span>
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 mt-6 bg-secondary text-black px-8 py-3.5
                  rounded-full font-black text-sm hover:brightness-110 transition">
                  Invest In Luxury <ShoppingBag size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            {products.slice(1, 3).map((p, i) => (
              <div key={i} className={`group relative rounded-3xl overflow-hidden transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                style={{ transitionDelay: `${(i+1) * 200}ms` }}>
                <div className="relative h-[240px]">
                  <SafeImage src={p.url} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-0 p-6 w-full">
                    <h3 className="font-heading text-xl font-bold text-white">{p.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-secondary font-black text-lg">{p.price}</span>
                      <a href="#contact" className="text-xs text-white/60 hover:text-white transition uppercase tracking-widest font-bold">Order Now →</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { number: '1k+', label: 'Loyal Clients' },
    { number: '100%', label: 'Raw Virgin Hair' },
    { number: 'Ibadan', label: 'HQ Location' }
  ];

  return (
    <section id="our-founder" ref={ref} className="min-h-screen grid md:grid-cols-2 items-center bg-primary overflow-hidden">
      <div className="relative h-[60vh] md:h-full order-2 md:order-1">
        <SafeImage src={brief.gallery[2]} alt="Our Founder" fill className={`object-cover transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent" />
      </div>
      <div className={`flex flex-col justify-center px-8 md:px-20 py-24 order-1 md:order-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
        <p className="text-secondary font-mono text-xs tracking-[0.4em] uppercase mb-6 opacity-70">The Wealth Legacy</p>
        <h2 className="font-heading text-5xl md:text-7xl font-black text-white leading-[0.95] mb-8">
          Crafting <br/> <span className="text-secondary">Excellence</span>
        </h2>
        <p className="text-white/45 text-lg leading-relaxed max-w-md">
          Founded by Olayinka Bisola Wealth, Abisola’s Place is more than a hair brand; it is an editorial statement. Bisola’s vision was to bridge the gap between high-end craftsmanship and the modern woman’s desire for effortless glam. 
        </p>
        <p className="text-white/45 text-lg leading-relaxed max-w-md mt-6">
          Every strand is a testament to her commitment to quality and the opulence of the African woman.
        </p>
        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="font-heading text-3xl font-black text-white">{s.number}</p>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-28 px-6 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-5xl font-black text-white mb-14 text-center">The Glam Room</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {brief.gallery.map((src, i) => (
            <div key={i} className={`break-inside-avoid group relative rounded-3xl overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-sm'}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <SafeImage src={src} alt={`Glam Story ${i + 1}`} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const { ref, isVisible } = useScrollReveal();
  const items = [
    { name: "Adewunmi K.", text: "The bone straight is literally like liquid. Best hair investment I have made in years.", role: "Lagos Socialite" },
    { name: "Titilayo O.", text: "Abisola's Place is the only brand I trust for my bridal hair. The quality is unmatched.", role: "Creative Director" },
    { name: "Folashade A.", text: "Bisola knows hair. The curls I bought 2 years ago still look brand new.", role: "Business Executive" }
  ];

  return (
    <section ref={ref} className="py-28 bg-black overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="font-heading text-5xl font-black text-white">The Voices of Wealth</h2>
      </div>
      <div className="w-full overflow-hidden">
        <div className="flex w-[200%] gap-8 animate-slide-left hover:[animation-play-state:paused]">
          {[...items, ...items].map((t, i) => (
            <div key={i} className={`w-80 md:w-[420px] shrink-0 bg-white/5 border border-white/8 rounded-[2rem] p-10 transition-all duration-700 ${isVisible ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-6 scale-75'}`}>
              <div className="flex gap-2 mb-8">
                {[1,2,3,4,5].map(n => <div key={n} className="w-2 h-2 rounded-full bg-secondary" />)}
              </div>
              <p className="text-white/80 text-xl leading-relaxed italic mb-10 font-light">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-black text-lg border border-secondary/25">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-lg">{t.name}</p>
                  <p className="text-secondary/60 text-xs font-mono tracking-widest uppercase">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="py-28 px-6 bg-primary overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-secondary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-20 items-start relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="font-heading text-6xl md:text-7xl font-black text-white mb-8">Secure Your <span className="text-secondary">Crown</span></h2>
          <p className="text-white/45 text-xl leading-relaxed max-w-sm mb-12">Luxury is a phone call away. Start your wealth journey today.</p>
          
          <div className="space-y-6">
            <a href="https://wa.me/c/2347035304949" className="flex items-center gap-4 text-white/50 hover:text-secondary transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-all">
                <Phone size={20} className="group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-lg font-medium">+234 703 530 4949</span>
            </a>
            <div className="flex items-center gap-4 text-white/50 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <span className="text-lg font-medium">Ibadan, Nigeria</span>
            </div>
            <a href="#" className="flex items-center gap-4 text-white/50 hover:text-secondary transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-all">
                <Instagram size={20} />
              </div>
              <span className="text-lg font-medium">@abisola_place07</span>
            </a>
          </div>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {sent ? (
            <div className="flex flex-col items-center justify-center p-16 text-center animate-scaleIn bg-zinc-900 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden h-[500px]">
              <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mb-8 border border-secondary/40">
                <CheckCheck size={40} className="text-secondary" />
              </div>
              <h3 className="font-heading text-4xl font-black text-white mb-4">Request Received</h3>
              <p className="text-white/60 max-w-sm text-lg leading-relaxed">Our concierge will contact you shortly to finalize your crown selection.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/50 backdrop-blur-3xl p-10 sm:p-14 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-heading text-3xl font-bold text-white mb-10">Vault Inquiry</h3>
                <div className="space-y-4">
                  {['name', 'email', 'phone'].map(field => (
                    <input
                      key={field}
                      type={field === 'email' ? 'email' : 'text'}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={(form as any)[field]}
                      onChange={e => setForm(prev => ({ ...prev, [field]: e.target.value }))}
                      required={field !== 'phone'}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/30 text-lg outline-none transition-all focus:bg-white/10 focus:border-secondary"
                    />
                  ))}
                  <textarea rows={4} placeholder="Your Texture Preferences"
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder-white/30 text-lg outline-none resize-none transition-all focus:bg-white/10 focus:border-secondary"
                  />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full mt-10 bg-secondary text-black py-6 rounded-2xl font-black text-xl hover:brightness-110 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all flex justify-center items-center gap-3 group">
                  {loading ? <Loader2 className="animate-spin" /> : <>Send Inquiry <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" /></>}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 bg-black border-t border-white/10">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-xl text-black font-heading font-black text-2xl">A</div>
        <span className="font-heading font-black text-3xl tracking-tighter uppercase text-white">Abisola’s</span>
      </div>
      <p className="text-white/40 text-center max-w-md mb-12 text-lg">
        The ultimate destination for the woman who settles for nothing less than absolute opulence. 
        <br/> <span className="text-secondary/50 font-mono text-sm tracking-widest mt-4 block">Sharp delivery, nationwide.</span>
      </p>
      <div className="flex gap-10 mb-16">
        <Instagram className="text-white/30 hover:text-secondary cursor-pointer transition-colors" />
      </div>
      <div className="w-full pt-10 border-t border-white/5 text-center">
        <p className="text-white/20 text-xs font-mono uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Abisola’s Place. All Strands Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <SectionDivider text="Wealth in every detail" />
      <Features />
      <ProductVault />
      <About />
      <SectionDivider text="Visual Opulence" />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}