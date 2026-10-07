import re

with open('generate_social_logos_html.py', 'r', encoding='utf-8') as f:
    content = f.read()

mapping = {
    'alt="Flex Banner"': 'IMAGES/FLEX BANNER.jpeg',
    'alt="Flex Board"': 'IMAGES/FLEX BOARD.jpeg',
    'alt="Frontlit Flex"': 'IMAGES/FLEX BANNER.jpeg',
    'alt="3D Acrylic Letter"': 'IMAGES/3D ACRYLIC LETTER.jpeg',
    'alt="Glow Sign Board"': 'IMAGES/GLOW SIGN BOARD.jpeg',
    'alt="Hoarding Unipole"': 'IMAGES/HOARDING UNIPOLE.jpeg',
    'alt="Backlit Flex"': 'IMAGES/BACKLIT FLEX.jpeg',
    'alt="Star Flex"': 'IMAGES/STAR FLEX.jpeg',
    'alt="Mesh Flex"': 'IMAGES/FLEX BANNER.jpeg',
    'alt="Hoarding"': 'IMAGES/HOARDING.jpeg',
    'alt="Shop Board"': 'IMAGES/SHOP BOARD.jpeg',
    'alt="Vinyl Printing"': 'IMAGES/VINYL PRINTING.jpeg',
    'alt="Eco Vinyl Printing"': 'IMAGES/ECO VINYL PRINTING.jpeg',
    'alt="Retro Vinyl Printing"': 'IMAGES/RETRO VINYL PRINTING.jpeg',
    'alt="Oneway Vision"': 'IMAGES/ONEWAY VISION.jpeg',
    'alt="Offset Printing"': 'IMAGES/OFFSET PRINTING.jpeg',
    'alt="Digital Printing"': 'IMAGES/Digital printing.jpeg',
    'alt="Event Backdrop"': 'IMAGES/STAR FLEX.jpeg',
    'alt="Stage Backdrop"': 'IMAGES/FLEX BANNER.jpeg',
    'alt="Poster"': 'IMAGES/Digital printing.jpeg',
    'alt="Exhibition Graphics"': 'IMAGES/SHOP BOARD.jpeg',
    'alt="Promotional Banner"': 'IMAGES/FLEX BANNER.jpeg',
}

for alt_str, img_path in mapping.items():
    pattern = r'<img src="[^"]+" ' + re.escape(alt_str)
    repl = f'<img src="{img_path}" {alt_str}'
    content = re.sub(pattern, repl, content)

with open('generate_social_logos_html.py', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated generate_social_logos_html.py successfully!')
