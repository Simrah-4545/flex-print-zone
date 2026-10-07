import re

with open('generate_social_logos_html.py', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
    'class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"',
    'class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent select-none" onerror="this.onerror=null; this.src=\'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80\';"'
)

content = content.replace(
    '<span class="absolute top-3 left-3 ',
    '<span class="absolute top-3 left-3 z-10 '
)

content = content.replace(
    '<div class="relative h-48 w-full overflow-hidden bg-gray-100">',
    '<div class="relative h-48 w-full overflow-hidden bg-slate-900">'
)

with open('generate_social_logos_html.py', 'w', encoding='utf-8') as f:
    f.write(content)

print('Successfully updated generate_social_logos_html.py')
