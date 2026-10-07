import json

services = [
    {
        "id": "sunpack-printing",
        "title": "Sunpack Printing",
        "shortDesc": "Lightweight corrugated plastic PP sheets ideal for temporary signage, event gates, election boards, and outdoor advertising.",
        "forText": "Temporary signage, Event gates, Election campaigns, Pole boards",
        "category": "Promotional",
        "image": "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "sunboard-printing",
        "title": "Sunboard Printing",
        "shortDesc": "Rigid PVC foam boards with smooth matte finish, perfect for indoor displays, exhibition panels, and retail signages.",
        "forText": "Indoor displays, Exhibition panels, Retail signages, Cutouts",
        "category": "Boards",
        "image": "https://images.unsplash.com/photo-1542744094-3a3121699494?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "flex-printing",
        "title": "Flex Printing",
        "shortDesc": "Large-format flex banner printing for outdoor hoardings, shop boards, event backdrops, and advertising campaigns.",
        "forText": "Shop banners, Hoardings, Event gates, Promotional campaigns",
        "category": "Flex",
        "image": "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "fabric-printing",
        "title": "Fabric Printing",
        "shortDesc": "High quality dye sublimation printing on fabric for backdrops, flags, table covers, and premium soft signages.",
        "forText": "Stage backdrops, Promotional flags, Table covers, Soft signage",
        "category": "Fabric",
        "image": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "flyers-pamphlet-printing",
        "title": "Flyers / Pamphlet Printing",
        "shortDesc": "Bulk flyer and pamphlet printing in A5, A4, and A2 sizes for business promotions, hand-outs, and marketing campaigns.",
        "forText": "A5, A4 & A2 Flyers, Pamphlets, Promotional handouts, Leaflets",
        "category": "Paper",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "standees",
        "title": "Roll Up Standees",
        "shortDesc": "Portable display standees in roll-up aluminum, wooden easel, iron frame, cutout, and promotional stands.",
        "forText": "Roll-up standees, Exhibition displays, Store entrance stands",
        "category": "Displays",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "vinyl-printing",
        "title": "Vinyl Printing",
        "shortDesc": "Self-adhesive vinyl printing for stickers, vehicle wraps, wall graphics, window branding, and board mounting.",
        "forText": "Vehicle wraps, Wall murals, Window graphics, Stickers",
        "category": "Vinyl",
        "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "brochure-catalogue-printing",
        "title": "Brochure / Catalogue Printing",
        "shortDesc": "Professional multi-page brochure and product catalogue printing with premium glossy, matte, and UV finishes.",
        "forText": "Company brochures, Product catalogues, Magazines, Folders",
        "category": "Paper",
        "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "danglers",
        "title": "Danglers Printing",
        "shortDesc": "Eye-catching hanging danglers for retail POP displays, ceiling promotional campaigns, and store marketing.",
        "forText": "Retail POP displays, Ceiling hangers, Store promotions",
        "category": "Promotional",
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "wobblers",
        "title": "Wobblers Printing",
        "shortDesc": "Attention-grabbing wobbler displays with spring action movement for retail shelf identification and offers.",
        "forText": "Retail shelf wobblers, Supermarket offers, Product POPs",
        "category": "Promotional",
        "image": "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "umbrella-printing",
        "title": "Umbrella Printing",
        "shortDesc": "Custom branded umbrella printing for corporate gifts, outdoor promotional stalls, and sunshades.",
        "forText": "Promotional umbrellas, Garden umbrellas, Corporate gifts",
        "category": "Promotional",
        "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "promotional-flag",
        "title": "Promotional Flag",
        "shortDesc": "Custom printed promotional flags including feather flags, teardrop flags, L-banner flags, and pole flags.",
        "forText": "Feather flags, Teardrop flags, Event flags, Outdoor pole flags",
        "category": "Displays",
        "image": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "inshop-branding",
        "title": "Inshop Branding",
        "shortDesc": "Complete retail interior branding with wall graphics, ceiling displays, counter wraps, and floor stickers.",
        "forText": "Retail store branding, Counter wraps, Wall graphics, Showrooms",
        "category": "Branding",
        "image": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "lollipop-signboard",
        "title": "Lollipop Signboard",
        "shortDesc": "Double-sided illuminated and non-illuminated lollipop signboards on poles for shop identification and street signs.",
        "forText": "Shop pole boards, Double-sided signboards, Street signs",
        "category": "Signage",
        "image": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "canopy-tent-printing",
        "title": "Canopy Tent Printing",
        "shortDesc": "Custom printed canopy tents and gazebos for outdoor events, promotional stalls, and roadshows.",
        "forText": "Promotional tents, Outdoor gazebos, Campaign stalls",
        "category": "Displays",
        "image": "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "promotional-table",
        "title": "Promotional Table",
        "shortDesc": "Branded promotional counter tables with printed covers for exhibitions, trade shows, and product demos.",
        "forText": "Promo tables, Demo counters, Exhibition tables",
        "category": "Displays",
        "image": "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "flex-board-printing",
        "title": "Flex Board Printing",
        "shortDesc": "High-grade flex boards with metal framing for shops, offices, clinics, and commercial showrooms.",
        "forText": "Storefront Boards, Office Signage, Clinic Boards",
        "category": "Boards",
        "image": "https://images.unsplash.com/photo-1542744094-3a3121699494?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "hoarding-printing",
        "title": "Outdoor Hoarding Printing",
        "shortDesc": "Massive outdoor billboard hoarding prints with seamless color brilliance and UV-resistant inks.",
        "forText": "Highway Billboards, Outdoor Hoardings, Real Estate Ads",
        "category": "Flex",
        "image": "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "backlit-flex",
        "title": "Backlit Glow Sign Flex",
        "shortDesc": "Translucent flex material specially designed for lightboxes, LED illuminated signboards, and night displays.",
        "forText": "Lightboxes, Glow Signboards, Night Displays",
        "category": "Flex",
        "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    {
        "id": "star-flex",
        "title": "Star Flex Printing",
        "shortDesc": "Premium ultra-gloss flex media for crisp photographic details, luxury showrooms, and high-end brand banners.",
        "forText": "High-end Showrooms, Luxury Banners, Premium Displays",
        "category": "Flex",
        "image": "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80",
    }
]

def generate_cards_html(services_list):
    cards = []
    for s in services_list:
        card = f'''        <!-- Service: {s["title"]} -->
        <div class="rounded-2xl bg-[#12141A] border border-gray-800 hover:border-[#E50914]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group">
          <div>
            <div class="relative h-48 w-full overflow-hidden bg-gray-900">
              <img src="{s["image"]}" alt="{s["title"]}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#E50914] text-white text-[10px] font-black uppercase tracking-wider shadow-md">{s["category"]}</span>
            </div>
            <div class="p-5 space-y-3">
              <h3 class="text-lg font-black text-white uppercase tracking-tight group-hover:text-[#E50914] transition-colors">{s["title"]}</h3>
              <p class="text-xs text-gray-300 leading-relaxed line-clamp-3">{s["shortDesc"]}</p>
              <div class="pt-2 border-t border-gray-800/80">
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-[#E50914] block mb-0.5">Ideal For:</span>
                <p class="text-[11px] text-gray-400 italic line-clamp-1">{s["forText"]}</p>
              </div>
            </div>
          </div>
          <div class="p-5 pt-0 space-y-2">
            <button onclick="selectServiceAndScroll('{s["title"]}')" class="w-full py-2.5 px-4 rounded-xl bg-[#E50914] hover:bg-[#c00711] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-red-900/30">
              GET BEST QUOTE
            </button>
            <div class="text-right">
              <button onclick="selectServiceAndScroll('{s["title"]}')" class="text-[11px] font-bold text-gray-400 hover:text-[#E50914] transition-colors inline-flex items-center gap-1">
                Details <i class="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>
        </div>'''
        cards.append(card)
    return "\n\n".join(cards)

cards_html = generate_cards_html(services)

files_to_update = [
    r"d:\antigravity\flex-print-zone\index.html",
    r"d:\antigravity\FLEX_PRINT_ZONE\index.html"
]

for file_path in files_to_update:
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()

        start_marker = '<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">'
        end_marker = '<!-- 5. NEW SECTION: IMAGE 4 FORMAT (Print that inspires.) -->'

        start_idx = content.find(start_marker)
        end_idx = content.find(end_marker)

        if start_idx != -1 and end_idx != -1:
            # Find the closing </div> of section before end_marker
            section_end_idx = content.rfind('</section>', start_idx, end_idx)
            
            new_services_section = f'''<div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
\n{cards_html}\n
      </div>
    </div>
  </section>'''

            updated_content = content[:start_idx] + new_services_section + "\n\n  " + content[end_idx:]
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(updated_content)
            print(f"Successfully updated {file_path}")
        else:
            print(f"Markers not found in {file_path}: start={start_idx}, end={end_idx}")
    except Exception as e:
        print(f"Error updating {file_path}: {e}")
