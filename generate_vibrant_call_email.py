import os

html_content = """<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flex Print Zone | Ultra Vibrant Printing & Advertising Bareilly</title>
  <meta name="description" content="Flex Print Zone - #1 Flex Printing & Advertising Services in Bareilly. Banners, hoardings, shop boards, backlit glow signs, vinyl graphics & stage backdrops.">
  <meta name="keywords" content="Flex Printing Bareilly, Advertising Services Bareilly, Flex Banner Printing, Hoarding Printing, Shop Board Printing, Vinyl Printing">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Flex Print Zone - PRINTING | BRANDING | ADVERTISING">
  <meta property="og:description" content="Professional flex banner printing, hoardings, shop boards, & vinyl printing in Bareilly. Quality Printing & Bold Impact.">
  <meta property="og:type" content="website">

  <!-- Google Fonts: Inter & Montserrat -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              neonYellow: '#CCFF00',
              neonYellowHover: '#B3E600',
              blue: '#0066FF',
              blueDark: '#0052CC',
              orange: '#FF5500',
              orangeHover: '#E04B00',
              green: '#10B981',
              red: '#FF3B30',
              purple: '#7C3AED',
              lightBg: '#FFFFFF',
              softBg: '#F5F7FA',
              darkText: '#172033'
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['Montserrat', 'sans-serif']
          }
        }
      }
    }
  </script>

  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <style>
    body {
      background-color: #FFFFFF;
      color: #172033;
      font-family: 'Inter', sans-serif;
    }
    .neon-glow-yellow {
      box-shadow: 0 0 20px rgba(204, 255, 0, 0.7);
    }
    .neon-glow-blue {
      box-shadow: 0 4px 20px rgba(0, 102, 255, 0.6);
    }
    .neon-glow-orange {
      box-shadow: 0 4px 20px rgba(255, 85, 0, 0.6);
    }
    .neon-glow-green {
      box-shadow: 0 4px 20px rgba(16, 185, 129, 0.6);
    }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #F5F7FA; }
    ::-webkit-scrollbar-thumb { background: #0066FF; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #CCFF00; }
  </style>

  <!-- Schema Markup -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Flex Print Zone",
    "image": "https://flexprintzone.com/logo.png",
    "telephone": "+91-8791159718",
    "email": "flexprintzonebly@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "FLEX PRINT ZONE, Opp Khuslok Hospital Stadium Road",
      "addressLocality": "Bareilly",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "243001",
      "addressCountry": "IN"
    },
    "url": "https://flexprintzone.com"
  }
  </script>
</head>
<body class="bg-white text-[#172033] selection:bg-[#CCFF00] selection:text-black">

  <!-- 1. HEADER (Electric Blue Background with Fluorescent Yellow Logo & Accents) -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-[#0066FF] text-white shadow-xl py-3.5 border-b-2 border-[#CCFF00]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      
      <!-- Logo: FLEX ⚡ PRINT ⚡ ZONE -->
      <a href="#hero" class="flex items-center gap-3 group">
        <img src="logo.png" alt="Flex Print Zone Logo" class="h-10 sm:h-12 w-auto object-contain bg-white px-2.5 py-1 rounded-xl shadow-lg border-2 border-[#CCFF00]">
        <div class="hidden sm:flex flex-col">
          <span class="font-black text-xl tracking-tight font-display drop-shadow-sm">
            <span class="text-[#CCFF00]">FLEX</span> <span class="text-white">PRINT</span> <span class="text-[#CCFF00]">ZONE</span>
          </span>
          <span class="text-[10px] font-black text-[#CCFF00] tracking-widest uppercase">Your Vision. Our Print.</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-7">
        <a href="#hero" class="text-xs font-black text-white hover:text-[#CCFF00] uppercase tracking-wider transition-colors">Home</a>
        <a href="#services" class="text-xs font-black text-white hover:text-[#CCFF00] uppercase tracking-wider transition-colors">Services</a>
        <a href="#brilliance" class="text-xs font-black text-white hover:text-[#CCFF00] uppercase tracking-wider transition-colors">Devotion</a>
        <a href="#portfolio" class="text-xs font-black text-white hover:text-[#CCFF00] uppercase tracking-wider transition-colors">Our Work</a>
        <a href="#testimonials" class="text-xs font-black text-white hover:text-[#CCFF00] uppercase tracking-wider transition-colors">Testimonials</a>
        <a href="#about" class="text-xs font-black text-white hover:text-[#CCFF00] uppercase tracking-wider transition-colors">About Us</a>
        <a href="#contact-hello" class="text-xs font-black text-white hover:text-[#CCFF00] uppercase tracking-wider transition-colors">Contact</a>
      </nav>

      <!-- Desktop Header CTAs -->
      <div class="hidden lg:flex items-center gap-3">
        <a href="https://wa.me/918791159718?text=Hello%20Flex%20Print%20Zone%2C%20I%20would%20like%20to%20enquire%20about%20flex%20printing." target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg neon-glow-green">
          <i class="fa-brands fa-whatsapp text-lg"></i> WHATSAPP US
        </a>
        <button onclick="scrollToQuote()" class="px-5 py-2.5 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg neon-glow-orange flex items-center gap-2 border-2 border-[#CCFF00]">
          <i class="fa-solid fa-calculator"></i> GET FREE QUOTE
        </button>
      </div>

      <!-- Mobile Controls -->
      <div class="flex items-center gap-2 lg:hidden">
        <a href="https://wa.me/918791159718" target="_blank" class="p-2.5 rounded-full bg-[#10B981] text-white shadow-md">
          <i class="fa-brands fa-whatsapp text-lg"></i>
        </a>
        <button onclick="toggleMobileMenu()" class="p-2.5 rounded-xl bg-blue-900 text-white">
          <i class="fa-solid fa-bars text-xl"></i>
        </button>
      </div>

    </div>

    <!-- Mobile Drawer -->
    <div id="mobile-menu" class="hidden lg:hidden bg-[#0052CC] text-white px-4 pt-4 pb-6 space-y-3 border-t border-[#CCFF00]/30 mt-2">
      <nav class="flex flex-col divide-y divide-blue-400/20">
        <a href="#hero" onclick="toggleMobileMenu()" class="py-2.5 text-xs font-black uppercase text-white hover:text-[#CCFF00]">Home</a>
        <a href="#services" onclick="toggleMobileMenu()" class="py-2.5 text-xs font-black uppercase text-white hover:text-[#CCFF00]">Services</a>
        <a href="#portfolio" onclick="toggleMobileMenu()" class="py-2.5 text-xs font-black uppercase text-white hover:text-[#CCFF00]">Our Work</a>
        <a href="#testimonials" onclick="toggleMobileMenu()" class="py-2.5 text-xs font-black uppercase text-white hover:text-[#CCFF00]">Testimonials</a>
        <a href="#about" onclick="toggleMobileMenu()" class="py-2.5 text-xs font-black uppercase text-white hover:text-[#CCFF00]">About Us</a>
        <a href="#contact-hello" onclick="toggleMobileMenu()" class="py-2.5 text-xs font-black uppercase text-white hover:text-[#CCFF00]">Say Hello</a>
      </nav>
      <div class="pt-2 flex flex-col gap-2.5">
        <button onclick="toggleMobileMenu(); scrollToQuote()" class="w-full py-3 rounded-full bg-[#FF5500] text-white font-black text-xs uppercase tracking-wider text-center shadow-lg border-2 border-[#CCFF00]">
          GET FREE QUOTE
        </button>
        <a href="tel:+918791159718" class="w-full py-3 rounded-full bg-[#FF5500] text-white font-black text-xs uppercase tracking-wider text-center shadow-lg border-2 border-white">
          CALL +91-8791159718
        </a>
        <a href="mailto:flexprintzonebly@gmail.com" class="w-full py-3 rounded-full bg-[#0066FF] text-white font-black text-xs uppercase tracking-wider text-center shadow-lg border-2 border-[#CCFF00]">
          EMAIL US
        </a>
      </div>
    </div>
  </header>

  <!-- 2. HERO SECTION (White/Soft Grey with High-Visibility Fluorescent Yellow Badges & Electric Accent) -->
  <section id="hero" class="relative pt-36 pb-20 bg-[#F5F7FA] overflow-hidden border-b border-gray-200">
    <!-- Neon Accent Glow Background Element -->
    <div class="absolute top-1/4 left-10 w-96 h-96 bg-[#CCFF00]/25 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-96 h-96 bg-[#0066FF]/20 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        
        <!-- Hero Text -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-[#CCFF00] text-black text-xs font-black uppercase tracking-wider shadow-lg border-2 border-black/20 neon-glow-yellow">
            <i class="fa-solid fa-bolt text-black text-sm"></i> <span>Fluorescent High-Impact Printing • Fast Delivery</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-[#172033] tracking-tight uppercase leading-none font-display">
            Professional Printing & <br>
            <span class="text-[#0066FF]">Advertising Solutions</span>
          </h1>

          <div class="text-xs sm:text-sm font-black tracking-widest text-[#172033] uppercase border-l-4 border-[#CCFF00] pl-3.5 py-2 bg-gradient-to-r from-[#CCFF00]/40 via-blue-50 to-transparent rounded-r-xl">
            ⚡ FLEX BANNERS • HOARDINGS • SHOP BOARDS • VINYL GRAPHICS • STANDEES
          </div>

          <p class="text-base sm:text-lg text-gray-700 font-normal max-w-2xl leading-relaxed">
            Professional flex printing, hoardings, shop front boards, glow signboards, and vinyl branding for shopkeepers, businesses, events, and outdoor advertising in Bareilly.
          </p>

          <!-- Hero Action Buttons: Orange CTA + Electric Blue Work + Green WhatsApp -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button onclick="scrollToQuote()" class="px-8 py-4 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider shadow-xl neon-glow-orange flex items-center justify-center gap-3 transition-transform hover:scale-105 border-2 border-[#CCFF00]">
              <i class="fa-solid fa-calculator text-base"></i> GET FREE QUOTE
            </button>
            <a href="#portfolio" class="px-7 py-4 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg neon-glow-blue transition-transform hover:scale-105 border-2 border-[#CCFF00]/40">
              <i class="fa-solid fa-images"></i> VIEW OUR WORK
            </a>
            <a href="https://wa.me/918791159718?text=Hello%20Flex%20Print%20Zone%2C%20I%20want%20to%20request%20a%20quote." target="_blank" rel="noopener noreferrer" class="px-6 py-4 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg neon-glow-green transition-transform hover:scale-105">
              <i class="fa-brands fa-whatsapp text-lg"></i> WHATSAPP US
            </a>
          </div>

          <!-- Trust Badges System -->
          <div class="pt-4 border-t border-gray-200 flex flex-wrap items-center gap-6 text-xs text-gray-800 font-black uppercase tracking-wider">
            <span class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#10B981] text-sm"></i> Quality Printing</span>
            <span class="flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFF00] text-black border border-black/20"><i class="fa-solid fa-ruler-combined text-black"></i> Custom Sizes</span>
            <span class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#0066FF] text-sm"></i> Fast Response</span>
          </div>
        </div>

        <!-- Hero Photo: Real Printing Workshop with Neon Yellow Border Accent -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-3xl overflow-hidden border-4 border-[#CCFF00] shadow-2xl bg-white neon-glow-yellow">
            <img src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&q=80" alt="Flex Printing Machine Bareilly Workshop" class="w-full h-[420px] object-cover">
            <div class="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl flex items-center justify-between">
              <div>
                <div class="text-[#172033] font-black text-xs uppercase">Large Format Flex Printer</div>
                <div class="text-gray-600 text-[11px] font-bold">1440 DPI Vivid Outdoor Inkjet Output</div>
              </div>
              <span class="px-3.5 py-1.5 rounded-full bg-[#CCFF00] text-black text-[10px] font-black uppercase shadow border border-black/20">Bareilly Workshop</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 3. QUICK BENEFITS (White Background with Fluorescent & Colorful Badges) -->
  <section class="py-12 bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div class="p-6 rounded-2xl bg-[#F5F7FA] border-2 border-transparent hover:border-[#0066FF] transition-all flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-[#0066FF] text-white flex items-center justify-center text-xl shrink-0 shadow-md">
            <i class="fa-solid fa-print"></i>
          </div>
          <div>
            <h4 class="font-black text-[#172033] text-sm uppercase">Quality Printing</h4>
            <p class="text-xs text-gray-600 mt-1 leading-relaxed">Sharp & high-resolution 1440 DPI flex printing for maximum durability.</p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-[#F5F7FA] border-2 border-[#CCFF00] transition-all flex items-start gap-4 shadow-sm">
          <div class="w-12 h-12 rounded-xl bg-[#CCFF00] text-black flex items-center justify-center text-xl shrink-0 shadow-md">
            <i class="fa-solid fa-ruler-combined text-black font-black"></i>
          </div>
          <div>
            <h4 class="font-black text-[#172033] text-sm uppercase">Custom Sizes</h4>
            <p class="text-xs text-gray-600 mt-1 leading-relaxed">Printing according to your exact shop board or hoarding dimensions.</p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-[#F5F7FA] border-2 border-transparent hover:border-[#10B981] transition-all flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-[#10B981] text-white flex items-center justify-center text-xl shrink-0 shadow-md">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <div>
            <h4 class="font-black text-[#172033] text-sm uppercase">Fast Response</h4>
            <p class="text-xs text-gray-600 mt-1 leading-relaxed">Quick quotation and rapid turn-around for urgent print jobs.</p>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-[#F5F7FA] border-2 border-transparent hover:border-[#7C3AED] transition-all flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center text-xl shrink-0 shadow-md">
            <i class="fa-solid fa-cubes"></i>
          </div>
          <div>
            <h4 class="font-black text-[#172033] text-sm uppercase">Complete Solutions</h4>
            <p class="text-xs text-gray-600 mt-1 leading-relaxed">Printing, finishing, eyelets, frame mounting & installation guidance.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 4. SERVICES SECTION (Clean White Background with Fluorescent & Colorful Badges) -->
  <section id="services" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-3xl mx-auto mb-14">
        <span class="text-xs font-black uppercase tracking-widest text-black bg-[#CCFF00] px-4 py-2 rounded-full border border-black/20 neon-glow-yellow">⚡ Vibrant Printing Range</span>
        <h2 class="text-4xl sm:text-5xl font-black text-[#172033] uppercase mt-4 font-display">Our Printing Services</h2>
        <p class="text-gray-600 text-base mt-2 font-normal">Complete printing and outdoor advertising solutions for shops, businesses, events and campaigns.</p>
      </div>

      <!-- Service Cards Grid (White Cards with Vibrant Badges & Hover Neon Borders) -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        
        <!-- 1. Sunpack Printing (Fluorescent Yellow Badge) -->
        <div class="rounded-2xl bg-white border-2 border-gray-200 hover:border-[#CCFF00] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl group">
          <div>
            <div class="relative h-48 w-full overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80" alt="Sunpack Printing" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-wider shadow">⚡ Promotional</span>
            </div>
            <div class="p-5 space-y-3">
              <h3 class="text-lg font-black text-[#172033] uppercase group-hover:text-[#0066FF] transition-colors">Sunpack Printing</h3>
              <p class="text-xs text-gray-600 leading-relaxed line-clamp-3">Lightweight corrugated plastic PP sheets ideal for temporary signage, event gates, election boards, and outdoor pole ads.</p>
              <div class="pt-2 border-t border-gray-100">
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#0066FF] block mb-0.5">Ideal For:</span>
                <p class="text-[11px] text-gray-500 italic line-clamp-1">Temporary signage, Event gates, Pole boards</p>
              </div>
            </div>
          </div>
          <div class="p-5 pt-0 space-y-2">
            <button onclick="selectServiceAndScroll('Sunpack Printing')" class="w-full py-3 px-4 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md border-2 border-[#CCFF00]">
              GET BEST QUOTE
            </button>
            <div class="text-right">
              <button onclick="selectServiceAndScroll('Sunpack Printing')" class="text-[11px] font-bold text-[#0066FF] hover:underline inline-flex items-center gap-1">
                Details <i class="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- 2. Sunboard Printing (🟢 Green Badge) -->
        <div class="rounded-2xl bg-white border-2 border-gray-200 hover:border-[#0066FF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl group">
          <div>
            <div class="relative h-48 w-full overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1542744094-3a3121699494?auto=format&fit=crop&w=800&q=80" alt="Sunboard Printing" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#10B981] text-white text-[10px] font-black uppercase tracking-wider shadow">🟢 Sign Boards</span>
            </div>
            <div class="p-5 space-y-3">
              <h3 class="text-lg font-black text-[#172033] uppercase group-hover:text-[#0066FF] transition-colors">Sunboard Printing</h3>
              <p class="text-xs text-gray-600 leading-relaxed line-clamp-3">Rigid PVC foam boards with smooth matte finish, perfect for indoor displays, exhibition panels, and retail signages.</p>
              <div class="pt-2 border-t border-gray-100">
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#0066FF] block mb-0.5">Ideal For:</span>
                <p class="text-[11px] text-gray-500 italic line-clamp-1">Indoor displays, Exhibition panels, Store Cutouts</p>
              </div>
            </div>
          </div>
          <div class="p-5 pt-0 space-y-2">
            <button onclick="selectServiceAndScroll('Sunboard Printing')" class="w-full py-3 px-4 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md">
              GET BEST QUOTE
            </button>
            <div class="text-right">
              <button onclick="selectServiceAndScroll('Sunboard Printing')" class="text-[11px] font-bold text-[#0066FF] hover:underline inline-flex items-center gap-1">
                Details <i class="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- 3. Flex Banner Printing (Fluorescent Yellow Badge) -->
        <div class="rounded-2xl bg-white border-2 border-gray-200 hover:border-[#CCFF00] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl group">
          <div>
            <div class="relative h-48 w-full overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80" alt="Flex Printing" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-wider shadow">⚡ Flex Banner</span>
            </div>
            <div class="p-5 space-y-3">
              <h3 class="text-lg font-black text-[#172033] uppercase group-hover:text-[#0066FF] transition-colors">Flex Banner Printing</h3>
              <p class="text-xs text-gray-600 leading-relaxed line-clamp-3">Large-format flex banner printing for shop banners, outdoor hoardings, event backdrops, and sales promotions.</p>
              <div class="pt-2 border-t border-gray-100">
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#0066FF] block mb-0.5">Ideal For:</span>
                <p class="text-[11px] text-gray-500 italic line-clamp-1">Shop banners, Sales Banners, Event Gates</p>
              </div>
            </div>
          </div>
          <div class="p-5 pt-0 space-y-2">
            <button onclick="selectServiceAndScroll('Flex Banner Printing')" class="w-full py-3 px-4 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md border-2 border-[#CCFF00]">
              GET BEST QUOTE
            </button>
            <div class="text-right">
              <button onclick="selectServiceAndScroll('Flex Banner Printing')" class="text-[11px] font-bold text-[#0066FF] hover:underline inline-flex items-center gap-1">
                Details <i class="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- 4. Vinyl Printing (🔵 Blue Badge) -->
        <div class="rounded-2xl bg-white border-2 border-gray-200 hover:border-[#0066FF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl group">
          <div>
            <div class="relative h-48 w-full overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" alt="Vinyl Printing" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#0066FF] text-white text-[10px] font-black uppercase tracking-wider shadow">🔵 Vinyl Graphics</span>
            </div>
            <div class="p-5 space-y-3">
              <h3 class="text-lg font-black text-[#172033] uppercase group-hover:text-[#0066FF] transition-colors">Vinyl Graphics & Wrapping</h3>
              <p class="text-xs text-gray-600 leading-relaxed line-clamp-3">Self-adhesive high resolution vinyl graphics, wall murals, window glass branding, and vehicle wrapping.</p>
              <div class="pt-2 border-t border-gray-100">
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#0066FF] block mb-0.5">Ideal For:</span>
                <p class="text-[11px] text-gray-500 italic line-clamp-1">Storefront Glass, Wall Murals, Vehicle Branding</p>
              </div>
            </div>
          </div>
          <div class="p-5 pt-0 space-y-2">
            <button onclick="selectServiceAndScroll('Vinyl Printing')" class="w-full py-3 px-4 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md">
              GET BEST QUOTE
            </button>
            <div class="text-right">
              <button onclick="selectServiceAndScroll('Vinyl Printing')" class="text-[11px] font-bold text-[#0066FF] hover:underline inline-flex items-center gap-1">
                Details <i class="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- 5. Outdoor Hoarding Printing (🟠 Orange Badge) -->
        <div class="rounded-2xl bg-white border-2 border-gray-200 hover:border-[#0066FF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl group">
          <div>
            <div class="relative h-48 w-full overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80" alt="Hoarding Printing" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#FF5500] text-white text-[10px] font-black uppercase tracking-wider shadow">🟠 Hoardings</span>
            </div>
            <div class="p-5 space-y-3">
              <h3 class="text-lg font-black text-[#172033] uppercase group-hover:text-[#0066FF] transition-colors">Outdoor Hoarding Printing</h3>
              <p class="text-xs text-gray-600 leading-relaxed line-clamp-3">Massive outdoor billboard flex prints engineered with UV-resistant inks for seamless highway branding.</p>
              <div class="pt-2 border-t border-gray-100">
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#0066FF] block mb-0.5">Ideal For:</span>
                <p class="text-[11px] text-gray-500 italic line-clamp-1">Highway Billboards, Real Estate Ads, Large Displays</p>
              </div>
            </div>
          </div>
          <div class="p-5 pt-0 space-y-2">
            <button onclick="selectServiceAndScroll('Hoarding Printing')" class="w-full py-3 px-4 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md">
              GET BEST QUOTE
            </button>
            <div class="text-right">
              <button onclick="selectServiceAndScroll('Hoarding Printing')" class="text-[11px] font-bold text-[#0066FF] hover:underline inline-flex items-center gap-1">
                Details <i class="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- 6. Roll Up Standees (🔴 Red Badge) -->
        <div class="rounded-2xl bg-white border-2 border-gray-200 hover:border-[#0066FF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl group">
          <div>
            <div class="relative h-48 w-full overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80" alt="Roll Up Standees" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#FF3B30] text-white text-[10px] font-black uppercase tracking-wider shadow">🔴 Promotional</span>
            </div>
            <div class="p-5 space-y-3">
              <h3 class="text-lg font-black text-[#172033] uppercase group-hover:text-[#0066FF] transition-colors">Roll Up Standees</h3>
              <p class="text-xs text-gray-600 leading-relaxed line-clamp-3">Portable aluminum roll-up standees, easel stands, and exhibition display banners for entrance promotion.</p>
              <div class="pt-2 border-t border-gray-100">
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#0066FF] block mb-0.5">Ideal For:</span>
                <p class="text-[11px] text-gray-500 italic line-clamp-1">Store Entrance, Exhibitions, Events & Trade Shows</p>
              </div>
            </div>
          </div>
          <div class="p-5 pt-0 space-y-2">
            <button onclick="selectServiceAndScroll('Roll Up Standees')" class="w-full py-3 px-4 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md">
              GET BEST QUOTE
            </button>
            <div class="text-right">
              <button onclick="selectServiceAndScroll('Roll Up Standees')" class="text-[11px] font-bold text-[#0066FF] hover:underline inline-flex items-center gap-1">
                Details <i class="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- 7. Fabric & UV Printing (🟣 Purple Badge) -->
        <div class="rounded-2xl bg-white border-2 border-gray-200 hover:border-[#0066FF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl group">
          <div>
            <div class="relative h-48 w-full overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80" alt="Fabric Printing" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#7C3AED] text-white text-[10px] font-black uppercase tracking-wider shadow">🟣 Premium UV</span>
            </div>
            <div class="p-5 space-y-3">
              <h3 class="text-lg font-black text-[#172033] uppercase group-hover:text-[#0066FF] transition-colors">Fabric & Sublimation Printing</h3>
              <p class="text-xs text-gray-600 leading-relaxed line-clamp-3">Premium dye sublimation fabric printing for stage backdrops, flags, table covers, and soft signage.</p>
              <div class="pt-2 border-t border-gray-100">
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#0066FF] block mb-0.5">Ideal For:</span>
                <p class="text-[11px] text-gray-500 italic line-clamp-1">Stage backdrops, Promo Flags, Table Covers</p>
              </div>
            </div>
          </div>
          <div class="p-5 pt-0 space-y-2">
            <button onclick="selectServiceAndScroll('Fabric Printing')" class="w-full py-3 px-4 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md">
              GET BEST QUOTE
            </button>
            <div class="text-right">
              <button onclick="selectServiceAndScroll('Fabric Printing')" class="text-[11px] font-bold text-[#0066FF] hover:underline inline-flex items-center gap-1">
                Details <i class="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- 8. Backlit Glow Sign Flex (🔵 Blue Badge) -->
        <div class="rounded-2xl bg-white border-2 border-gray-200 hover:border-[#0066FF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl group">
          <div>
            <div class="relative h-48 w-full overflow-hidden bg-gray-100">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Backlit Glow Sign" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#0066FF] text-white text-[10px] font-black uppercase tracking-wider shadow">🔵 Glow Signs</span>
            </div>
            <div class="p-5 space-y-3">
              <h3 class="text-lg font-black text-[#172033] uppercase group-hover:text-[#0066FF] transition-colors">Backlit Glow Sign Flex</h3>
              <p class="text-xs text-gray-600 leading-relaxed line-clamp-3">Translucent flex media engineered for back illumination in LED glow boxes and night store signs.</p>
              <div class="pt-2 border-t border-gray-100">
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#0066FF] block mb-0.5">Ideal For:</span>
                <p class="text-[11px] text-gray-500 italic line-clamp-1">Lightboxes, Night Storefronts, Illuminated Signs</p>
              </div>
            </div>
          </div>
          <div class="p-5 pt-0 space-y-2">
            <button onclick="selectServiceAndScroll('Backlit Flex')" class="w-full py-3 px-4 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md">
              GET BEST QUOTE
            </button>
            <div class="text-right">
              <button onclick="selectServiceAndScroll('Backlit Flex')" class="text-[11px] font-bold text-[#0066FF] hover:underline inline-flex items-center gap-1">
                Details <i class="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- 5. ULTRA VIBRANT PROMOTIONAL STRIP (Fluorescent Yellow Background + Black & Orange CTAs) -->
  <section class="py-14 bg-[#CCFF00] text-black shadow-inner border-y-2 border-black/10 neon-glow-yellow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      
      <div class="space-y-1 text-center md:text-left">
        <span class="px-3.5 py-1.5 rounded-full bg-[#FF3B30] text-white font-black text-xs uppercase tracking-wider shadow">🔴 LIMITED TIME PROMO</span>
        <h3 class="text-2xl sm:text-4xl font-black uppercase font-display text-black mt-2 tracking-tight">
          Get Your Printing Work Done at Competitive Prices!
        </h3>
        <p class="text-sm font-bold text-gray-900">Fast 1440 DPI production turnaround & bulk print discounts available for businesses in Bareilly.</p>
      </div>

      <button onclick="scrollToQuote()" class="px-9 py-4 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-sm uppercase tracking-wider transition-all shadow-xl shrink-0 flex items-center gap-2 border-2 border-black neon-glow-orange">
        <i class="fa-solid fa-paper-plane"></i> ENQUIRE NOW
      </button>

    </div>
  </section>

  <!-- 6. PERFECTION ON FLEX (Devotion Section with Light Background & Neon Yellow Glowing Badges) -->
  <section id="brilliance" class="py-20 bg-[#F5F7FA] border-y border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#7C3AED] tracking-tight font-display">
          Perfection on Flex & Print. We are devoted to brilliance.
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        
        <!-- Column 1 -->
        <div class="bg-white p-7 rounded-3xl border-2 border-purple-200 shadow-md space-y-4 hover:border-[#CCFF00] transition-all">
          <div class="w-12 h-12 rounded-xl bg-[#CCFF00] text-black flex items-center justify-center text-xl font-black shadow-md">
            <i class="fa-solid fa-bullseye text-black"></i>
          </div>
          <h3 class="text-xl font-bold text-[#7C3AED]">
            Exceptional print quality
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            Be it professional flex banners, shop frontlit boards, or custom vinyl graphics, we produce the highest quality print possible. To keep our promise, we continually invest in state-of-the-art print techniques.
          </p>
        </div>

        <!-- Column 2 -->
        <div class="bg-white p-7 rounded-3xl border-2 border-blue-200 shadow-md space-y-4 hover:border-[#0066FF] transition-all">
          <div class="w-12 h-12 rounded-xl bg-[#0066FF] text-white flex items-center justify-center text-xl font-bold">
            <i class="fa-solid fa-users"></i>
          </div>
          <h3 class="text-xl font-bold text-[#0066FF]">
            Work with the experts
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            At Flex Print Zone, all new orders are instantly given a personal point of contact, and each order is reviewed by our production team. Dedicated print experts are ready to bring your vision to life.
          </p>
        </div>

        <!-- Column 3 -->
        <div class="bg-white p-7 rounded-3xl border-2 border-amber-200 shadow-md space-y-4 hover:border-[#FF5500] transition-all">
          <div class="w-12 h-12 rounded-xl bg-[#FF5500] text-white flex items-center justify-center text-xl font-bold">
            <i class="fa-solid fa-star"></i>
          </div>
          <h3 class="text-xl font-bold text-[#172033]">
            Make a statement
          </h3>
          <p class="text-sm text-gray-600 leading-relaxed">
            We offer Frontlit, Backlit, Star Flex, Mesh, and Vinyl stocks with special eyelets and framing options. We help your business create a remarkable and lasting impression.
          </p>
        </div>

      </div>

    </div>
  </section>

  <!-- 7. PORTFOLIO / OUR WORK (Colorful Real Work Photos) -->
  <section id="portfolio" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs font-black uppercase tracking-widest text-black bg-[#CCFF00] px-4 py-2 rounded-full border border-black/10 shadow">⚡ Real Client Work</span>
        <h2 class="text-4xl sm:text-5xl font-black text-[#172033] uppercase mt-3 font-display">Our Recent Work</h2>
        <p class="text-gray-600 text-base mt-2">Real client flex printing, shop front boards, hoardings, and outdoor advertising projects in Bareilly.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div onclick="openLightbox('https://images.unsplash.com/photo-1542744094-3a3121699494?auto=format&fit=crop&w=1200&q=80', 'Grand Shop Frontlit Board', 'Stadium Road, Bareilly')" class="group cursor-pointer rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-2xl hover:border-[#CCFF00] transition-all">
          <img src="https://images.unsplash.com/photo-1542744094-3a3121699494?auto=format&fit=crop&w=800&q=80" alt="Shop Frontlit Board" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="p-5">
            <span class="text-[10px] font-black uppercase text-black bg-[#CCFF00] px-3 py-1 rounded-md shadow-sm">Shop Boards</span>
            <h3 class="text-lg font-extrabold text-[#172033] uppercase mt-2">Grand Shop Frontlit Board</h3>
            <p class="text-xs text-gray-500 mt-1">Stadium Road, Bareilly</p>
          </div>
        </div>

        <div onclick="openLightbox('https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80', 'Highway Advertising Hoarding', 'Pilibhit Bypass, Bareilly')" class="group cursor-pointer rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-2xl hover:border-[#FF5500] transition-all">
          <img src="https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80" alt="Highway Hoarding" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="p-5">
            <span class="text-[10px] font-black uppercase text-white bg-[#FF5500] px-3 py-1 rounded-md shadow-sm">Hoardings</span>
            <h3 class="text-lg font-extrabold text-[#172033] uppercase mt-2">Highway Advertising Hoarding</h3>
            <p class="text-xs text-gray-500 mt-1">Pilibhit Bypass, Bareilly</p>
          </div>
        </div>

        <div onclick="openLightbox('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80', 'Illuminated Backlit Glow Sign', 'Civil Lines, Bareilly')" class="group cursor-pointer rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-2xl hover:border-[#0066FF] transition-all">
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Backlit Glow Sign" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="p-5">
            <span class="text-[10px] font-black uppercase text-white bg-[#0066FF] px-3 py-1 rounded-md shadow-sm">Backlit Flex</span>
            <h3 class="text-lg font-extrabold text-[#172033] uppercase mt-2">Illuminated Backlit Glow Sign</h3>
            <p class="text-xs text-gray-500 mt-1">Civil Lines, Bareilly</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 8. SOCIAL BANNER (Purple Creative Showcase with Neon Yellow Badges) -->
  <section class="py-16 bg-[#7C3AED] text-white text-center border-y-2 border-[#CCFF00]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
      <h2 class="text-4xl sm:text-5xl font-black font-display tracking-tight">
        Print that inspires.
      </h2>
      <p class="text-base sm:text-lg text-purple-100 font-normal">
        Here's a glimpse of some beautiful ideas we have brought to life in print.
      </p>
      
      <div class="flex items-center justify-center gap-8 pt-4">
        <a href="https://www.instagram.com/flexprint__bly_?stkn=MTFzbjVvYWpveG1teQ%3D%3D" target="_blank" class="flex items-center gap-2 text-black font-black text-sm hover:underline bg-[#CCFF00] px-6 py-3.5 rounded-full shadow-lg neon-glow-yellow border border-black/20">
          <i class="fa-brands fa-instagram text-xl"></i> @flexprint__bly_
        </a>
        <a href="https://www.facebook.com/share/19MQcj6XZ3/?mibextid=wwXIfr" target="_blank" class="flex items-center gap-2 text-white font-black text-sm hover:underline bg-white/10 px-6 py-3.5 rounded-full border border-white/20">
          <i class="fa-brands fa-facebook text-xl"></i> Flex Print Zone
        </a>
      </div>
    </div>
  </section>

  <!-- 9. TESTIMONIALS SECTION (Electric Blue Background with White Quote Card & Neon Yellow Accents) -->
  <section id="testimonials" class="py-20 bg-[#0066FF] text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
      
      <div>
        <h2 class="text-4xl font-extrabold tracking-tight font-display">
          Our Testimonials
        </h2>
        <p class="text-blue-100 text-base mt-2">
          There is a reason why we are loved by local shop owners and businesses in Bareilly!
        </p>
      </div>

      <!-- Testimonial White Card -->
      <div class="rounded-3xl bg-white text-[#172033] p-8 sm:p-12 shadow-2xl relative text-left space-y-4 border-4 border-[#CCFF00]">
        <div class="text-[#FF5500] text-5xl font-black font-serif leading-none">“</div>
        <p class="text-lg sm:text-xl text-[#172033] font-semibold leading-relaxed">
          Flex Print Zone has given a whole new identity to my business storefront board; they judged what I wanted and used their expertise to make it look exceptional!
        </p>
        <div class="text-right text-[#FF5500] text-5xl font-black font-serif leading-none">”</div>
        
        <div class="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span class="font-black text-[#0066FF] text-sm uppercase">Sharma Medical, Bareilly</span>
          <span class="px-3.5 py-1 rounded-full bg-[#CCFF00] text-black font-black border border-black/20">Verified Client</span>
        </div>
      </div>

    </div>
  </section>

  <!-- 10. ESTEEMED CLIENTS (Clean White Background) -->
  <section id="about" class="py-24 bg-white border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-xs font-black uppercase tracking-widest text-black bg-[#CCFF00] px-4 py-2 rounded-full border border-black/10">Established Trust</span>
        <h2 class="text-4xl font-black text-[#172033] uppercase mt-3 font-display">Our Esteemed Clients</h2>
        <p class="text-gray-600 text-sm mt-2">Trusted by leading local businesses across Bareilly.</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">1. ERA RADIO, BAREILLY</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">2. Abhi Fast Food, Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">3. Sharma Medical Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">4. Rose Unisex Saloon Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">5. SR Enterprises Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">6. Tech Bothers Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">7. Ram Avtar jewellers Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">8. Bird Cafeteria Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">9. Ashu Battery Service Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">10. Malik Enterprises Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">11. Guru Kripa Communication Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">12. Vanshi Brand hub Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">13. Ali world tourism Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">14. Phoenix Bareilly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">15. Makeup Zone Bly</div>
        <div class="p-4 rounded-xl bg-[#F5F7FA] border border-gray-200 text-center font-extrabold text-xs text-[#172033] hover:border-[#CCFF00] transition-all">16. Skylark Group Bly</div>
      </div>
    </div>
  </section>

  <!-- 11. ENQUIRY / CONTACT FORM ("SAY HELLO" - High Vibrancy Call & Email Section) -->
  <section id="contact-hello" class="py-24 bg-[#F5F7FA]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left Info with Ultra-Vibrant Call and Email Buttons -->
        <div class="lg:col-span-5 space-y-6">
          <span class="px-4 py-2 rounded-full bg-[#CCFF00] text-black text-xs font-black uppercase tracking-wider shadow">⚡ Fast Quotations</span>
          <h2 class="text-4xl sm:text-5xl font-black text-[#172033] tracking-tight font-display uppercase">
            Say hello. <br>
            <span class="text-[#0066FF]">Get a Free Quote</span>
          </h2>

          <p class="text-sm leading-relaxed text-gray-600 font-normal">
            Please fill out this form if you need assistance with custom size flex quotes, artwork preparation, metal framing, or bulk orders. Our print team will respond immediately.
          </p>

          <!-- Ultra Vibrant Direct Call & Email Contact Buttons matching reference image style -->
          <div class="pt-4 space-y-3">
            <p class="text-gray-500 font-black uppercase text-xs tracking-wider">Instant Communication:</p>

            <!-- Vibrant Call Button -->
            <a href="tel:+918791159718" class="px-6 py-3.5 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-sm uppercase tracking-wider shadow-lg neon-glow-orange flex items-center justify-between transition-transform hover:scale-105 border-2 border-[#CCFF00]">
              <span class="flex items-center gap-3">
                <i class="fa-solid fa-phone text-lg text-white"></i>
                <span>CALL NOW: +91-8791159718</span>
              </span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>

            <!-- Vibrant Email Button -->
            <a href="mailto:flexprintzonebly@gmail.com" class="px-6 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-black text-sm uppercase tracking-wider shadow-lg neon-glow-blue flex items-center justify-between transition-transform hover:scale-105 border-2 border-[#CCFF00]">
              <span class="flex items-center gap-3">
                <i class="fa-solid fa-envelope text-lg text-white"></i>
                <span>EMAIL: flexprintzonebly@gmail.com</span>
              </span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>

            <div class="p-3.5 rounded-2xl bg-white border border-gray-200 text-xs text-gray-600 flex items-center gap-2.5 shadow-sm">
              <i class="fa-solid fa-location-dot text-red-500 text-base shrink-0"></i>
              <span>Opp Khuslok Hospital Stadium Road Bareilly - 243001</span>
            </div>
          </div>
        </div>

        <!-- Right Form: Clean White Form with Blue Fields & Orange/Green Submit Buttons -->
        <div class="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border-2 border-[#CCFF00] shadow-2xl neon-glow-yellow">
          <form id="sayHelloForm" onsubmit="handleQuoteSubmit(event)" class="space-y-5">
            
            <div>
              <label class="block text-xs font-black uppercase tracking-wider text-[#0066FF] mb-1.5">Full Name *</label>
              <input type="text" id="fullName" required placeholder="Enter your full name" class="w-full px-4 py-3.5 bg-[#F5F7FA] border border-gray-200 text-[#172033] text-sm font-medium focus:bg-white focus:border-[#0066FF] focus:outline-none rounded-xl transition-all">
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-black uppercase tracking-wider text-[#0066FF] mb-1.5">Mobile Number *</label>
                <input type="tel" id="mobileNumber" required placeholder="Enter mobile number" class="w-full px-4 py-3.5 bg-[#F5F7FA] border border-gray-200 text-[#172033] text-sm font-medium focus:bg-white focus:border-[#0066FF] focus:outline-none rounded-xl transition-all">
              </div>
              <div>
                <label class="block text-xs font-black uppercase tracking-wider text-[#0066FF] mb-1.5">Email Address</label>
                <input type="email" id="emailAddr" placeholder="Enter your email" class="w-full px-4 py-3.5 bg-[#F5F7FA] border border-gray-200 text-[#172033] text-sm font-medium focus:bg-white focus:border-[#0066FF] focus:outline-none rounded-xl transition-all">
              </div>
            </div>

            <div>
              <label class="block text-xs font-black uppercase tracking-wider text-[#0066FF] mb-1.5">What do you want to print? *</label>
              <select id="printingRequirement" class="w-full px-4 py-3.5 bg-[#F5F7FA] border border-gray-200 text-[#172033] text-sm font-bold focus:bg-white focus:border-[#0066FF] focus:outline-none rounded-xl transition-all">
                <option value="Flex Banner">Flex Banner Printing</option>
                <option value="Sunpack Printing">Sunpack Printing</option>
                <option value="Sunboard Printing">Sunboard Printing</option>
                <option value="Flex Board">Flex Board & Signage</option>
                <option value="Hoarding">Outdoor Hoarding</option>
                <option value="Backlit Flex">Backlit Glow Sign</option>
                <option value="Vinyl Printing">Vinyl Graphics & Wrapping</option>
                <option value="Roll Up Standees">Roll Up Standees</option>
                <option value="Fabric Printing">Fabric Printing</option>
                <option value="Event Backdrop">Event Backdrop</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-black uppercase tracking-wider text-[#0066FF] mb-1.5">Project Details / Size Requirement</label>
              <textarea id="projectDetails" rows="3" placeholder="Tell us your width x height size, quantity or special instructions..." class="w-full px-4 py-3.5 bg-[#F5F7FA] border border-gray-200 text-[#172033] text-sm font-medium focus:bg-white focus:border-[#0066FF] focus:outline-none rounded-xl transition-all"></textarea>
            </div>

            <!-- Action Buttons: Orange Send Enquiry + Green WhatsApp -->
            <div class="grid sm:grid-cols-2 gap-4 pt-2">
              <button type="submit" class="py-4 px-6 bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider rounded-full transition-all shadow-lg neon-glow-orange flex items-center justify-center gap-2 border-2 border-[#CCFF00]">
                <i class="fa-solid fa-paper-plane"></i> SEND ENQUIRY
              </button>
              <button type="button" onclick="handleWhatsAppDirect()" class="py-4 px-6 bg-[#10B981] hover:bg-[#059669] text-white font-black text-xs uppercase tracking-wider rounded-full transition-all shadow-lg neon-glow-green flex items-center justify-center gap-2">
                <i class="fa-brands fa-whatsapp text-lg"></i> SEND ON WHATSAPP
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  </section>

  <!-- 12. FOOTER (Electric Blue Background with White Text & Fluorescent Yellow Accents) -->
  <footer class="bg-[#0066FF] text-white py-12 border-t-2 border-[#CCFF00]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
      
      <div class="flex items-center gap-3">
        <img src="logo.png" alt="Flex Print Zone" class="h-10 w-auto bg-white px-2.5 py-1 rounded-xl shadow border-2 border-[#CCFF00]">
        <div class="text-left">
          <div class="font-black text-white text-sm uppercase font-display">
            FLEX <span class="text-[#CCFF00]">PRINT</span> ZONE
          </div>
          <div class="text-[10px] font-black text-[#CCFF00] uppercase tracking-widest">Your Vision. Our Print.</div>
        </div>
      </div>

      <div class="text-xs text-blue-100 font-medium">
        © 2026 Flex Print Zone. Stadium Road, Bareilly. All Rights Reserved.
      </div>

      <div class="flex items-center gap-4 text-xs font-extrabold">
        <a href="https://www.instagram.com/flexprint__bly_?stkn=MTFzbjVvYWpveG1teQ%3D%3D" target="_blank" class="text-white hover:text-[#CCFF00]">Instagram</a>
        <a href="https://www.facebook.com/share/19MQcj6XZ3/?mibextid=wwXIfr" target="_blank" class="text-white hover:text-[#CCFF00]">Facebook</a>
        <a href="#hero" class="text-[#CCFF00] hover:underline">Back to Top ↑</a>
      </div>

    </div>
  </footer>

  <!-- 13. FLOATING 3-CONNECTING ACTION WIDGET (Matching uploaded image media_1791210141913.png format perfectly!) -->
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
    
    <!-- 1. WHATSAPP (Vibrant Green Pill #10B981 with Neon Glow) -->
    <a href="https://wa.me/918791159718?text=Hello%20Flex%20Print%20Zone%2C%20I%20would%20like%20to%20enquire." target="_blank" rel="noopener noreferrer" class="px-6 py-3 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-black text-sm shadow-2xl neon-glow-green flex items-center gap-2.5 transition-transform hover:scale-105 uppercase tracking-wider border-2 border-white">
      <i class="fa-brands fa-whatsapp text-xl"></i>
      <span>WHATSAPP</span>
    </a>

    <!-- 2. CALL (Vibrant Orange Pill #FF5500 with Neon Glow & White Icon) -->
    <a href="tel:+918791159718" class="px-6 py-3 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-sm shadow-2xl neon-glow-orange flex items-center gap-2.5 transition-transform hover:scale-105 uppercase tracking-wider border-2 border-[#CCFF00]">
      <i class="fa-solid fa-phone text-lg"></i>
      <span>CALL</span>
    </a>

    <!-- 3. EMAIL (Vibrant Electric Blue Pill #0066FF with Neon Yellow Border & Glow) -->
    <a href="mailto:flexprintzonebly@gmail.com" class="px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-black text-sm shadow-2xl neon-glow-blue flex items-center gap-2.5 transition-transform hover:scale-105 uppercase tracking-wider border-2 border-[#CCFF00]">
      <i class="fa-solid fa-envelope text-lg"></i>
      <span>EMAIL</span>
    </a>

  </div>

  <!-- Mobile Bottom Sticky Bar -->
  <div class="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-2 lg:hidden grid grid-cols-3 gap-2 shadow-2xl">
    <a href="tel:+918791159718" class="py-2.5 rounded-full bg-[#FF5500] text-white font-black text-[11px] uppercase text-center flex items-center justify-center gap-1 shadow-md">
      <i class="fa-solid fa-phone"></i> CALL
    </a>
    <a href="https://wa.me/918791159718" target="_blank" class="py-2.5 rounded-full bg-[#10B981] text-white font-black text-[11px] uppercase text-center flex items-center justify-center gap-1 shadow-md">
      <i class="fa-brands fa-whatsapp"></i> WHATSAPP
    </a>
    <a href="mailto:flexprintzonebly@gmail.com" class="py-2.5 rounded-full bg-[#0066FF] text-white font-black text-[11px] uppercase text-center flex items-center justify-center gap-1 shadow-md border border-[#CCFF00]">
      <i class="fa-solid fa-envelope"></i> EMAIL
    </a>
  </div>

  <!-- JavaScript Functions -->
  <script>
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }

    function scrollToQuote() {
      document.getElementById('contact-hello').scrollIntoView({ behavior: 'smooth' });
    }

    function selectServiceAndScroll(serviceName) {
      const select = document.getElementById('printingRequirement');
      if (select) {
        select.value = serviceName;
      }
      document.getElementById('contact-hello').scrollIntoView({ behavior: 'smooth' });
    }

    function handleQuoteSubmit(e) {
      e.preventDefault();
      const name = document.getElementById('fullName').value;
      const mobile = document.getElementById('mobileNumber').value;
      const req = document.getElementById('printingRequirement').value;
      const details = document.getElementById('projectDetails').value;

      const text = `Hello Flex Print Zone,\\nI would like to request a quotation.\\nName: ${name}\\nMobile: ${mobile}\\nRequirement: ${req}\\nDetails: ${details}`;

      window.open(`https://wa.me/918791159718?text=${encodeURIComponent(text)}`, '_blank');
    }

    function handleWhatsAppDirect() {
      const name = document.getElementById('fullName').value || 'Customer';
      const mobile = document.getElementById('mobileNumber').value || '';
      const req = document.getElementById('printingRequirement').value;
      const details = document.getElementById('projectDetails').value || '';

      const text = `Hello Flex Print Zone,\\nI am submitting a quote enquiry from your website:\\nName: ${name}\\nMobile: ${mobile}\\nRequirement: ${req}\\nDetails: ${details}`;

      window.open(`https://wa.me/918791159718?text=${encodeURIComponent(text)}`, '_blank');
    }

    function openLightbox(imgUrl, title, location) {
      alert(`${title}\\nLocation: ${location}`);
    }
  </script>
</body>
</html>
"""

files_to_update = [
    r"d:\antigravity\flex-print-zone\index.html",
    r"d:\antigravity\FLEX_PRINT_ZONE\index.html"
]

for file_path in files_to_update:
    try:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(html_content)
        print(f"Successfully generated ultra-vibrant call/email HTML file at {file_path}")
    except Exception as e:
        print(f"Error writing file {file_path}: {e}")
