const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Helpers for SVG generation
const createSvg = (filename, content) => {
  const fullPath = path.join(IMAGES_DIR, filename);
  fs.writeFileSync(fullPath, content.trim());
  console.log(`Generated: ${filename}`);
};

// 1. Cozy Home (Hero)
createSvg('cozy-home.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#0f172a"/>
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#047857" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#glow)"/>
  
  <!-- Stylized modern home illustration -->
  <path d="M 400 150 L 600 300 L 600 500 L 200 500 L 200 300 Z" fill="#1e293b" stroke="#334155" stroke-width="4"/>
  <path d="M 400 150 L 600 300 H 200 Z" fill="#0f172a" stroke="#10b981" stroke-width="6"/>
  
  <!-- Windows with warm light -->
  <rect x="250" y="340" width="80" height="80" rx="8" fill="#f59e0b" opacity="0.95"/>
  <line x1="290" y1="340" x2="290" y2="420" stroke="#1e293b" stroke-width="4"/>
  <line x1="250" y1="380" x2="330" y2="380" stroke="#1e293b" stroke-width="4"/>
  
  <rect x="470" y="340" width="80" height="80" rx="8" fill="#f59e0b" opacity="0.95"/>
  <line x1="510" y1="340" x2="510" y2="420" stroke="#1e293b" stroke-width="4"/>
  <line x1="470" y1="380" x2="550" y2="380" stroke="#1e293b" stroke-width="4"/>
  
  <!-- Door -->
  <rect x="360" y="400" width="80" height="100" rx="4" fill="#047857"/>
  <circle cx="425" cy="450" r="4" fill="#fbbf24"/>
  
  <!-- Heatwaves / Insulation shield around house -->
  <path d="M 170 290 L 400 120 L 630 290 L 630 520 H 170 Z" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="8 6" opacity="0.6"/>
  <path d="M 150 280 L 400 100 L 650 280 L 650 540 H 150 Z" fill="none" stroke="#059669" stroke-width="2" stroke-dasharray="4 4" opacity="0.4"/>
  
  <!-- Overlay Title -->
  <text x="400" y="80" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="32" font-weight="900" fill="#ffffff" letter-spacing="-1">
    EFFICIENT & WARM HOME
  </text>
</svg>
`);

// 2. Boiler
createSvg('boiler.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#f8fafc"/>
  <rect x="250" y="100" width="300" height="400" rx="16" fill="#ffffff" stroke="#e2e8f0" stroke-width="4" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))"/>
  
  <!-- Boiler Control Panel -->
  <rect x="280" y="380" width="240" height="80" rx="8" fill="#0f172a"/>
  <circle cx="330" cy="420" r="16" fill="#10b981"/> <!-- Green display -->
  <circle cx="440" cy="420" r="12" fill="#334155"/>
  <circle cx="475" cy="420" r="12" fill="#334155"/>
  
  <!-- Pressure Gauge -->
  <circle cx="390" cy="420" r="18" fill="#ffffff" stroke="#475569" stroke-width="2"/>
  <line x1="390" y1="420" x2="400" y2="410" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
  
  <!-- Logo/Brand on Boiler -->
  <text x="400" y="180" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="24" font-weight="900" fill="#059669">
    JHT SYSTEM A+
  </text>
  
  <!-- Flame Window -->
  <rect x="375" y="240" width="50" height="70" rx="25" fill="#1e293b" stroke="#475569" stroke-width="3"/>
  <path d="M400,250 Q420,285 410,300 A15,15 0 0,1 390,300 Q380,285 400,250 Z" fill="#f97316"/>
  <path d="M400,265 Q410,290 405,300 A10,10 0 0,1 395,300 Q390,290 400,265 Z" fill="#f59e0b"/>

  <!-- Pipes -->
  <rect x="300" y="500" width="25" height="50" fill="#94a3b8"/>
  <rect x="350" y="500" width="25" height="50" fill="#cbd5e1"/>
  <rect x="425" y="500" width="25" height="50" fill="#cbd5e1"/>
  <rect x="475" y="500" width="25" height="50" fill="#94a3b8"/>
</svg>
`);

// 3. Heat Pump
createSvg('heat-pump.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#f8fafc"/>
  
  <!-- Outer metal casing -->
  <rect x="200" y="120" width="400" height="360" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/>
  <rect x="200" y="120" width="400" height="60" rx="6" fill="#0f172a"/>
  <text x="400" y="160" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="20" font-weight="900" fill="#10b981">
    AIR SOURCE HEAT PUMP
  </text>
  
  <!-- Fan Grill -->
  <circle cx="360" cy="320" r="110" fill="#f1f5f9" stroke="#94a3b8" stroke-width="4"/>
  <circle cx="360" cy="320" r="25" fill="#334155"/>
  
  <!-- Fan Blades -->
  <path d="M 360 295 L 360 215 C 380 215 390 240 375 295 Z" fill="#475569"/>
  <path d="M 360 345 L 360 425 C 340 425 330 400 345 345 Z" fill="#475569"/>
  <path d="M 385 320 L 465 320 C 465 340 440 350 385 335 Z" fill="#475569"/>
  <path d="M 335 320 L 255 320 C 255 300 280 290 335 305 Z" fill="#475569"/>
  
  <!-- Air Flow Indicator (arrows) -->
  <path d="M 490 280 Q 560 280 540 300 M 540 300 L 520 290 M 540 300 L 530 320" fill="none" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
  <path d="M 490 320 Q 560 320 540 340 M 540 340 L 520 330 M 540 340 L 530 360" fill="none" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
  
  <!-- Control Box / Details on casing -->
  <rect x="520" y="200" width="50" height="90" rx="4" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
  <line x1="530" y1="220" x2="560" y2="220" stroke="#475569" stroke-width="2"/>
  <line x1="530" y1="230" x2="555" y2="230" stroke="#475569" stroke-width="2"/>
  <circle cx="535" cy="265" r="5" fill="#ef4444"/>
  <circle cx="550" cy="265" r="5" fill="#10b981"/>
</svg>
`);

// 4. Solar Panels
createSvg('solar.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#f8fafc"/>
  
  <!-- Sun -->
  <circle cx="600" cy="150" r="50" fill="#f59e0b" opacity="0.9"/>
  <path d="M 600 80 L 600 60 M 600 220 L 600 240 M 530 150 L 510 150 M 670 150 L 690 150" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
  <path d="M 550 100 L 535 85 M 650 200 L 665 215 M 550 200 L 535 215 M 650 100 L 665 85" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>

  <!-- Solar Panel Grid (isometric tilted) -->
  <polygon points="150,420 450,220 650,300 350,500" fill="#1e293b" stroke="#475569" stroke-width="4"/>
  
  <!-- Horizontal Grid Lines -->
  <line x1="200" y1="386" x2="500" y2="186" stroke="#64748b" stroke-width="3" opacity="0.4"/>
  <line x1="225" y1="403" x2="525" y2="203" stroke="#64748b" stroke-width="3" opacity="0.4"/>
  <line x1="250" y1="420" x2="550" y2="220" stroke="#64748b" stroke-width="3" opacity="0.4"/>
  <line x1="275" y1="436" x2="575" y2="236" stroke="#64748b" stroke-width="3" opacity="0.4"/>
  <line x1="300" y1="453" x2="600" y2="253" stroke="#64748b" stroke-width="3" opacity="0.4"/>
  <line x1="325" y1="470" x2="625" y2="270" stroke="#64748b" stroke-width="3" opacity="0.4"/>
  
  <!-- Vertical Grid Lines -->
  <line x1="225" y1="370" x2="425" y2="450" stroke="#38bdf8" stroke-width="2"/>
  <line x1="300" y1="320" x2="500" y2="400" stroke="#38bdf8" stroke-width="2"/>
  <line x1="375" y1="270" x2="575" y2="350" stroke="#38bdf8" stroke-width="2"/>
  <line x1="450" y1="220" x2="650" y2="300" stroke="#38bdf8" stroke-width="2"/>
  
  <!-- Panel Reflection/Glint -->
  <polygon points="300,330 450,230 460,250 310,350" fill="#ffffff" opacity="0.15"/>
</svg>
`);

// 5. External Wall Insulation
createSvg('external-wall.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#f8fafc"/>
  
  <!-- Brick Layer (Left side) -->
  <g fill="#f87171" stroke="#ef4444" stroke-width="2">
    <rect x="100" y="100" width="100" height="40"/>
    <rect x="210" y="100" width="100" height="40"/>
    <rect x="50" y="150" width="100" height="40"/>
    <rect x="160" y="150" width="100" height="40"/>
    <rect x="270" y="150" width="40" height="40"/>
    <rect x="100" y="200" width="100" height="40"/>
    <rect x="210" y="200" width="100" height="40"/>
    <rect x="50" y="250" width="100" height="40"/>
    <rect x="160" y="250" width="100" height="40"/>
    <rect x="270" y="250" width="40" height="40"/>
    <rect x="100" y="300" width="100" height="40"/>
    <rect x="210" y="300" width="100" height="40"/>
    <rect x="50" y="350" width="100" height="40"/>
    <rect x="160" y="350" width="100" height="40"/>
    <rect x="270" y="350" width="40" height="40"/>
    <rect x="100" y="400" width="100" height="40"/>
    <rect x="210" y="400" width="100" height="40"/>
  </g>
  
  <!-- Insulation Layer (Center) -->
  <rect x="330" y="80" width="120" height="440" fill="#a7f3d0" stroke="#059669" stroke-width="3"/>
  <path d="M 350 100 L 430 500 M 370 100 L 450 500 M 330 150 L 410 550" stroke="#10b981" stroke-width="4" opacity="0.3"/>
  
  <!-- Render/Plaster Finish (Right side) -->
  <rect x="470" y="80" width="230" height="440" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3"/>
  
  <!-- Labels -->
  <rect x="350" y="220" width="80" height="30" rx="4" fill="#065f46"/>
  <text x="390" y="240" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">ECO FOAM</text>
  
  <rect x="530" y="220" width="110" height="30" rx="4" fill="#1e293b"/>
  <text x="585" y="240" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff">ROUGHCAST RENDER</text>
</svg>
`);

// 6. Internal Wall Insulation
createSvg('internal-wall.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#f8fafc"/>
  
  <!-- Solid External Brick Wall (Right side) -->
  <g fill="#f87171" stroke="#ef4444" stroke-width="2">
    <rect x="550" y="80" width="150" height="50"/>
    <rect x="500" y="140" width="150" height="50"/>
    <rect x="660" y="140" width="40" height="50"/>
    <rect x="550" y="200" width="150" height="50"/>
    <rect x="500" y="260" width="150" height="50"/>
    <rect x="660" y="260" width="40" height="50"/>
    <rect x="550" y="320" width="150" height="50"/>
    <rect x="500" y="380" width="150" height="50"/>
    <rect x="660" y="380" width="40" height="50"/>
    <rect x="550" y="440" width="150" height="50"/>
  </g>
  
  <!-- Stud Work / Timber frames (Center) -->
  <rect x="360" y="80" width="110" height="440" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
  <line x1="360" y1="180" x2="470" y2="180" stroke="#ca8a04" stroke-width="2"/>
  <line x1="360" y1="280" x2="470" y2="280" stroke="#ca8a04" stroke-width="2"/>
  <line x1="360" y1="380" x2="470" y2="380" stroke="#ca8a04" stroke-width="2"/>
  
  <!-- Plasterboard (Left side) -->
  <rect x="150" y="80" width="180" height="440" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="3"/>
  <circle cx="200" cy="150" r="6" fill="#94a3b8"/>
  <circle cx="200" cy="300" r="6" fill="#94a3b8"/>
  <circle cx="200" cy="450" r="6" fill="#94a3b8"/>
  
  <text x="240" y="300" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="18" font-weight="800" fill="#475569">
    PLASTERBOARD
  </text>
  <text x="415" y="300" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="16" font-weight="800" fill="#854d0e">
    INSULATION
  </text>
</svg>
`);

// 7. Underfloor Insulation
createSvg('underfloor.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#f8fafc"/>
  
  <!-- Wooden floorboards (Top third) -->
  <rect x="100" y="100" width="600" height="80" fill="#fed7aa" stroke="#ea580c" stroke-width="3"/>
  <line x1="220" y1="100" x2="220" y2="180" stroke="#ea580c" stroke-width="2"/>
  <line x1="340" y1="100" x2="340" y2="180" stroke="#ea580c" stroke-width="2"/>
  <line x1="460" y1="100" x2="460" y2="180" stroke="#ea580c" stroke-width="2"/>
  <line x1="580" y1="100" x2="580" y2="180" stroke="#ea580c" stroke-width="2"/>
  
  <!-- Joists (vertical beams supporting floor) -->
  <rect x="180" y="180" width="60" height="240" fill="#b45309"/>
  <rect x="420" y="180" width="60" height="240" fill="#b45309"/>
  
  <!-- Insulation rolls sitting between joists -->
  <rect x="240" y="180" width="180" height="180" fill="#a7f3d0" stroke="#10b981" stroke-width="3"/>
  <path d="M 250 190 C 270 190 270 210 290 210 C 310 210 310 190 330 190 C 350 190 350 210 370 210" fill="none" stroke="#059669" stroke-width="3"/>
  <path d="M 250 250 C 270 250 270 270 290 270 C 310 270 310 250 330 250 C 350 250 350 270 370 270" fill="none" stroke="#059669" stroke-width="3"/>
  <path d="M 250 310 C 270 310 270 330 290 330 C 310 330 310 310 330 310 C 350 310 350 330 370 330" fill="none" stroke="#059669" stroke-width="3"/>
  
  <!-- Crawler Space Label -->
  <text x="360" y="470" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="20" font-weight="900" fill="#475569">
    CRAWL SPACE DRAFT BARRIER
  </text>
</svg>
`);

// 8. Loft Insulation
createSvg('loft.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#f8fafc"/>
  
  <!-- Roof rafters (Triangular pitch at top) -->
  <polygon points="100,300 400,80 700,300" fill="none" stroke="#92400e" stroke-width="8"/>
  <line x1="400" y1="80" x2="400" y2="380" stroke="#92400e" stroke-width="4"/>
  
  <!-- Ceiling Board (Horizontal base) -->
  <rect x="100" y="380" width="600" height="30" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2"/>
  
  <!-- Loft Insulation Quilt Rolls (thick layer on ceiling) -->
  <rect x="120" y="280" width="560" height="100" rx="10" fill="#fbcfe8" stroke="#ec4899" stroke-width="3"/>
  
  <!-- Roll detail swirls -->
  <path d="M 160 330 C 160 300 190 300 190 330 C 190 360 160 360 160 330 Z" fill="none" stroke="#db2777" stroke-width="3"/>
  <path d="M 300 330 C 300 300 330 300 330 330 C 330 360 300 360 300 330 Z" fill="none" stroke="#db2777" stroke-width="3"/>
  <path d="M 450 330 C 450 300 480 300 480 330 C 480 360 450 360 450 330 Z" fill="none" stroke="#db2777" stroke-width="3"/>
  <path d="M 580 330 C 580 300 610 300 610 330 C 610 360 580 360 580 330 Z" fill="none" stroke="#db2777" stroke-width="3"/>
  
  <!-- Labels -->
  <text x="400" y="450" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="22" font-weight="900" fill="#0f172a">
    270mm GLASSWOOL INSULATION
  </text>
  <text x="400" y="480" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#64748b">
    Prevents 25% heat loss through roof
  </text>
</svg>
`);

// 9. Energy Assessments
createSvg('energy-assessments.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#f8fafc"/>
  
  <!-- Clipboard -->
  <rect x="250" y="100" width="300" height="420" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="4"/>
  <rect x="350" y="80" width="100" height="40" rx="6" fill="#475569"/>
  
  <!-- House outlines on clipboard -->
  <path d="M 370 210 L 400 180 L 430 210 L 430 250 H 370 Z" fill="none" stroke="#059669" stroke-width="3"/>
  
  <!-- Checklist items -->
  <circle cx="300" cy="300" r="12" fill="#10b981"/>
  <path d="M 295 300 L 298 303 L 305 295" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <line x1="330" y1="300" x2="500" y2="300" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
  
  <circle cx="300" cy="350" r="12" fill="#10b981"/>
  <path d="M 295 350 L 298 353 L 305 345" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <line x1="330" y1="350" x2="480" y2="350" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
  
  <circle cx="300" cy="400" r="12" fill="#10b981"/>
  <path d="M 295 400 L 298 403 L 305 395" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
  <line x1="330" y1="400" x2="450" y2="400" stroke="#334155" stroke-width="4" stroke-linecap="round"/>
  
  <!-- Heading -->
  <text x="400" y="150" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="20" font-weight="900" fill="#0f172a">
    ENERGY PERFORMANCE (EPC)
  </text>
</svg>
`);

// 10. Case Studies / Recent Works (1 to 6)
const colors = ['#047857', '#065f46', '#0284c7', '#0369a1', '#b45309', '#1e293b'];
for (let i = 1; i <= 6; i++) {
  createSvg(`case-study-${i}.svg`, `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="${colors[i - 1]}"/>
  <defs>
    <pattern id="pattern-${i}" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="80" stroke="#ffffff" stroke-width="1" opacity="0.1"/>
      <line x1="0" y1="0" x2="80" y2="0" stroke="#ffffff" stroke-width="1" opacity="0.1"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#pattern-${i})" />
  
  <!-- Icon centered -->
  <circle cx="400" cy="300" r="80" fill="#ffffff" opacity="0.1"/>
  <text x="400" y="320" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="64" font-weight="900" fill="#ffffff" opacity="0.9">
    JHT
  </text>
  
  <text x="400" y="440" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="24" font-weight="900" fill="#ffffff" opacity="0.9">
    COMPLETED SURVEY #${i}
  </text>
  <text x="400" y="475" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" opacity="0.7">
    100% ECO4 / GBIS COMPLIANT INSTALL
  </text>
</svg>
`);
}

// 11. Accreditations Badges
// Green Deal
createSvg('green-deal.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="100%" height="100%">
  <rect width="300" height="200" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <circle cx="150" cy="90" r="50" fill="#10b981"/>
  <circle cx="150" cy="90" r="40" fill="#ffffff"/>
  <text x="150" y="98" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="20" font-weight="900" fill="#10b981">
    GREEN
  </text>
  <text x="150" y="118" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="16" font-weight="900" fill="#047857">
    DEAL
  </text>
  <text x="150" y="165" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#475569">
    APPROVED PROVIDER
  </text>
</svg>
`);

// TrustMark
createSvg('trustmark.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="100%" height="100%">
  <rect width="300" height="200" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <path d="M 150 40 L 200 65 V 110 C 200 140 170 160 150 165 C 130 160 100 140 100 110 V 65 Z" fill="#1e293b"/>
  <path d="M 150 50 L 190 72 V 108 C 190 130 166 148 150 153 C 134 148 110 130 110 108 V 72 Z" fill="#f59e0b"/>
  <text x="150" y="115" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="18" font-weight="900" fill="#ffffff">
    TRUST
  </text>
  <text x="150" y="132" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="900" fill="#ffffff">
    MARK
  </text>
  <text x="150" y="180" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#475569">
    GOVERNMENT ENDORSED
  </text>
</svg>
`);

// Gas Safe
createSvg('gas-safe.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="100%" height="100%">
  <rect width="300" height="200" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  <!-- Triangle yellow logo sign -->
  <polygon points="150,30 220,130 80,130" fill="#f59e0b"/>
  <polygon points="150,42 208,122 92,122" fill="#ffffff"/>
  
  <!-- Safe flame icon inside -->
  <path d="M 150 70 Q 165 95 160 110 A 12,12 0 0,1 140 110 Q 135 95 150 70 Z" fill="#ef4444"/>
  
  <text x="150" y="160" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="14" font-weight="900" fill="#1e293b">
    GAS SAFE REGISTERED
  </text>
  <text x="150" y="180" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#64748b">
    LICENSED HEATING WORK
  </text>
</svg>
`);

// PAS 2030
createSvg('pas2030.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="100%" height="100%">
  <rect width="300" height="200" rx="8" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
  
  <circle cx="150" cy="80" r="40" fill="#10b981"/>
  <!-- Tick mark -->
  <path d="M 135 80 L 145 90 L 165 70" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
  
  <text x="150" y="150" text-anchor="middle" font-family="'Outfit', sans-serif" font-size="18" font-weight="900" fill="#1e293b">
    PAS 2030
  </text>
  <text x="150" y="172" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">
    COMPLIANT QUALITY STANDARDS
  </text>
</svg>
`);

console.log('All custom SVG placeholders generated successfully.');
