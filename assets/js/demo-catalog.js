(()=>{
'use strict';
const categories=[
 {name:'Phones',emoji:'📱',image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=75',bases:['Smartphone','Android Phone','5G Phone','Camera Phone','Dual SIM Phone','Budget Phone','Pro Smartphone','Mini Smartphone'],tags:['5G','Dual SIM','Fast charge','Camera','Android']},
 {name:'Computing',emoji:'💻',image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=75',bases:['Student Laptop','Business Laptop','Gaming Laptop','Mini Laptop','Notebook Computer','Chromebook','Ultrabook','Desktop Bundle'],tags:['SSD','Portable','Wi-Fi','Study','Office']},
 {name:'Electronics',emoji:'🎧',image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=75',bases:['Wireless Earbuds','Bluetooth Headphones','Portable Speaker','Power Bank','Smart Watch','Charging Station','USB Hub','Wireless Charger'],tags:['Bluetooth','Portable','Rechargeable','Wireless','Fast charge']},
 {name:'Home',emoji:'🏠',image:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=75',bases:['Standing Fan','Table Fan','Electric Kettle','Rice Cooker','Blender Set','Air Fryer','Microwave Oven','Vacuum Cleaner'],tags:['Home','Energy saving','Compact','Daily use','Easy clean']},
 {name:'Fashion',emoji:'👟',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=75',bases:['Running Shoes','Casual Sneakers','Travel Backpack','Crossbody Bag','Classic Wristwatch','Hoodie','Polo Shirt','Denim Jacket'],tags:['Fashion','Unisex','Comfort','Everyday','Lightweight']},
 {name:'Beauty',emoji:'✨',image:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=75',bases:['Skincare Set','Body Care Set','Hair Dryer','Hair Clipper','Makeup Organizer','Perfume Set','Face Care Kit','Manicure Set'],tags:['Beauty','Personal care','Gift set','Travel size','Daily routine']},
 {name:'Gaming',emoji:'🎮',image:'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=700&q=75',bases:['Game Controller','Gaming Headset','Mechanical Keyboard','Gaming Mouse','RGB Mouse Pad','Handheld Console','Gaming Chair','Streaming Microphone'],tags:['Gaming','RGB','USB','Low latency','Comfort']},
 {name:'TV & Audio',emoji:'📺',image:'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=700&q=75',bases:['Smart Television','LED Television','Soundbar','Home Theatre','Digital Decoder','Mini Projector','Radio Speaker','TV Wall Mount'],tags:['HD','Smart','Entertainment','Remote','Home cinema']},
 {name:'Kitchen',emoji:'🍳',image:'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=75',bases:['Cookware Set','Food Flask','Water Bottle Set','Cutlery Set','Kitchen Rack','Non-stick Frying Pan','Food Processor','Toaster'],tags:['Kitchen','Food safe','Easy clean','Durable','Family']},
 {name:'Sports',emoji:'⚽',image:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=75',bases:['Fitness Band','Yoga Mat','Football','Basketball','Training Shoes','Gym Bag','Skipping Rope','Dumbbell Set'],tags:['Fitness','Training','Outdoor','Sports','Active']},
 {name:'Kids',emoji:'🧸',image:'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=700&q=75',bases:['Learning Tablet','Building Blocks','Remote Control Car','School Backpack','Drawing Set','Educational Game','Kids Bicycle','Story Book Set'],tags:['Kids','Learning','Creative','Gift','Family']},
 {name:'Office',emoji:'🗂️',image:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=75',bases:['Office Chair','Study Desk','Desk Lamp','Document Organizer','Printer','Calculator','Writing Set','Laptop Stand'],tags:['Office','Study','Workspace','Organized','Productivity']},
 {name:'Travel',emoji:'🧳',image:'https://images.unsplash.com/photo-1553531889-56d82c7c6c9a?auto=format&fit=crop&w=700&q=75',bases:['Travel Box','Cabin Luggage','Neck Pillow','Travel Organizer','Passport Holder','Duffel Bag','Travel Adapter','Thermal Flask'],tags:['Travel','Portable','Secure','Lightweight','Trip']},
 {name:'Photography',emoji:'📷',image:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=700&q=75',bases:['Digital Camera','Action Camera','Camera Tripod','Ring Light','Phone Gimbal','Camera Bag','Photo Printer','Studio Light'],tags:['Photo','Video','Creator','Portable','Studio']},
 {name:'Automotive',emoji:'🚗',image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=75',bases:['Car Phone Holder','Car Vacuum','Tyre Inflator','Car Charger','Seat Cover Set','Dash Camera','Car Cleaning Kit','Emergency Tool Kit'],tags:['Car','Travel','Safety','Portable','Utility']},
 {name:'Garden',emoji:'🌿',image:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=75',bases:['Garden Tool Set','Plant Pot Set','Watering Can','Outdoor Chair','Solar Garden Light','Garden Hose','Seed Starter Kit','Patio Table'],tags:['Garden','Outdoor','Home','Reusable','Nature']},
 {name:'Health',emoji:'🩺',image:'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=700&q=75',bases:['Digital Scale','Thermometer','First Aid Box','Massage Pillow','Posture Support','Sleep Mask Set','Water Flosser','Electric Toothbrush'],tags:['Wellness','Personal care','Home use','Portable','Routine']},
 {name:'Tools',emoji:'🧰',image:'https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?auto=format&fit=crop&w=700&q=75',bases:['Tool Box','Screwdriver Set','Electric Drill','Measuring Tape Set','Work Light','Socket Set','Repair Kit','Storage Cabinet'],tags:['Tools','DIY','Repair','Durable','Home']},
 {name:'Bedding',emoji:'🛏️',image:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=75',bases:['Bedsheet Set','Duvet Set','Memory Pillow','Mattress Topper','Blanket','Curtain Set','Towel Set','Laundry Basket'],tags:['Bedroom','Comfort','Soft','Home','Easy care']},
 {name:'Accessories',emoji:'👜',image:'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=700&q=75',bases:['Sunglasses','Wallet','Belt Set','Jewellery Box','Phone Case Set','Card Holder','Umbrella','Key Organizer'],tags:['Accessory','Style','Gift','Compact','Everyday']}
];
const modifiers=['Classic','Premium','Essential','Smart','Compact','Plus','Max','Pro','Lite','Modern'];
const colors=['Black','White','Blue','Silver','Gold','Red','Purple','Green','Grey','Rose'];
const badges=['Popular','Trending','New arrival','Top goal','Member pick','Limited demo'];
const products=[];
for(let i=0;i<1000;i++){
 const category=categories[i%categories.length];
 const base=category.bases[Math.floor(i/categories.length)%category.bases.length];
 const modifier=modifiers[(i*3)%modifiers.length];
 const color=colors[(i*7)%colors.length];
 const tier=Math.floor(i/categories.length);
 const tokens=500+((i*137)%14500)+tier*45;
 const tags=[category.tags[i%category.tags.length],category.tags[(i+2)%category.tags.length],color];
 products.push({
  id:`demo-product-${String(i+1).padStart(4,'0')}`,
  name:`${modifier} ${base} ${color}`,
  description:`Demo ${category.name.toLowerCase()} product with organized token-based ordering requirements.`,
  category:category.name,
  emoji:category.emoji,
  image:`${category.image}&sig=${i+1}`,
  tokens,
  badge:badges[i%badges.length],
  tags,
  demo:true
 });
}
window.MAIN_DEMO_PRODUCTS=Object.freeze(products);
window.MAIN_DEMO_CATEGORIES=Object.freeze(['All',...categories.map(item=>item.name)]);
})();