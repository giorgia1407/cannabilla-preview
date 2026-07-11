#!/usr/bin/env node
// READ-ONLY local transform. Builds 08-images.json, and aggregation data for brand voice.
const fs=require('fs');
const C=require('./05-products-clean.json');

// ---------- 08-images.json ----------
const imagesDoc = { _meta:{fetchedAt:'2026-07-10', source:'derived from 02-products-raw.json galleryImages/media', cdnBase:'https://d2j6dbq0eux0bg.cloudfront.net/images/26630034/products/'}, products:[] };
let totalImages=0;
for (const p of C){
  const entry={ id:p.id, slug:p.slug, name:p.name, count:p.images.count, videos:p.images.videos, images:[] };
  // primary
  entry.images.push({ role:'primary', alt:null, sizes:p.images.primarySizes });
  // gallery
  for (const g of p.images.galleryDetailed){
    entry.images.push({ role:'gallery', id:g.id, alt:g.alt, width:g.width, height:g.height, sizes:g.sizes });
  }
  totalImages += p.images.count;
  imagesDoc.products.push(entry);
}
imagesDoc._meta.totalImagesAcrossCatalog = totalImages;
fs.writeFileSync('./08-images.json', JSON.stringify(imagesDoc,null,2));

// image summary stats
const single = C.filter(p=>p.images.count===1).map(p=>({name:p.name,slug:p.slug}));
const top5 = [...C].sort((a,b)=>b.images.count-a.images.count).slice(0,5).map(p=>({name:p.name,count:p.images.count}));
const withVideo = C.filter(p=>p.images.videos>0).map(p=>({name:p.name,videos:p.images.videos}));

// ---------- aggregations for brand voice ----------
// ingredient master dictionary (dedupe by normalized name, keep richest benefit)
const ingMap=new Map();
for (const p of C){
  for (const ing of p.extractedSections.ingredients){
    const key=ing.name.toLowerCase().replace(/[^a-zàèéìòù0-9 ]/g,'').replace(/\s+/g,' ').trim();
    if(!key) continue;
    const prev=ingMap.get(key);
    if(!prev || (ing.benefit && (!prev.benefit || ing.benefit.length>prev.benefit.length))){
      ingMap.set(key,{name:ing.name.trim(), benefit:ing.benefit, products:new Set()});
    }
    (ingMap.get(key).products).add(p.name);
  }
}
const ingredients=[...ingMap.values()].map(v=>({name:v.name, benefit:v.benefit, usedInCount:v.products.size}))
  .sort((a,b)=>b.usedInCount-a.usedInCount || a.name.localeCompare(b.name));

// certifications frequency
const certCount={};
C.forEach(p=>p.extractedSections.certifications.forEach(c=>certCount[c]=(certCount[c]||0)+1));

// skin/hair concerns scan across descriptionText
const concernDefs=[
  ['secchezza / pelle secca',/secchezz|pelli secche|pelle secca/i],
  ['screpolature',/screpolat/i],
  ['arrossamenti / rossori',/arross|rossor/i],
  ['irritazioni',/irritazion|irritat/i],
  ['macchie cutanee',/macchie/i],
  ['imperfezioni / acne',/imperfezion|acne|brufol/i],
  ['invecchiamento / rughe',/invecchiament|rughe|antiet|matur/i],
  ['pelle sensibile',/sensibil/i],
  ['prurito',/prurito/i],
  ['psoriasi / desquamazione',/psorias|squamos|desquamaz/i],
  ['pelle grassa / sebo',/pelle grassa|sebo|seboreg/i],
  ['disidratazione',/disidrat/i],
  ['dolori muscolari / affaticamento',/muscolar|affaticament|indolenzi/i],
  ['scottature solari',/scottatur|eritema solare|dopo.*sole|esposizione solare/i],
  ['capelli sfibrati / crespo',/sfibrat|crespo|doppie punte|capelli danneggiati/i],
];
const concerns=concernDefs.map(([label,re])=>({concern:label, products:C.filter(p=>re.test(p.descriptionText)).length}))
  .filter(c=>c.products>0).sort((a,b)=>b.products-a.products);

// recurring phrases
const phraseDefs=[
  ['Formulato e prodotto nel cuore dei Monti Sibillini',/monti sibillini|cuore dei monti/i],
  ['Cruelty-free e senza parabeni',/cruelty[\s-]?free/i],
  ["L'eventuale variazione di colore o odore indica la naturalezza degli ingredienti",/eventuale variazione di colore/i],
  ['Solo per uso esterno',/solo per uso esterno/i],
  ['Registrato nel portale europeo CPNP',/cpnp/i],
  ['A base di Olio di Canapa',/base di olio di canapa|olio di (semi di )?canapa/i],
  ['Conforme alle norme nazionali ed europee',/conforme alle norme/i],
];
const phrases=phraseDefs.map(([label,re])=>({phrase:label, products:C.filter(p=>re.test(p.descriptionText)).length}))
  .filter(x=>x.products>0).sort((a,b)=>b.products-a.products);

const agg={ single, top5, withVideo, totalImages, ingredients, certCount, concerns, phrases,
  productCount:C.length, enabled:C.filter(p=>p.enabled).length };
fs.writeFileSync('./_agg.json', JSON.stringify(agg,null,2));
console.log('images total:',totalImages,'| single-image:',single.length,'| ingredients dict:',ingredients.length,'| concerns:',concerns.length,'| phrases:',phrases.length);
console.log('top5 images:',JSON.stringify(top5));
console.log('single-image products:',JSON.stringify(single.map(s=>s.name)));
console.log('products with video:',JSON.stringify(withVideo));
console.log('certifications:',JSON.stringify(certCount));
