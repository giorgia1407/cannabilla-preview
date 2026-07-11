#!/usr/bin/env node
/* Curate + copy Cannabilla product photos into cannabilla-preview/public/products/<slug>/
 * Emits public/products/_manifest.json  (slug -> ["/products/<slug>/01.jpg", ...])
 * READ-ONLY on the source; only writes into the preview project. No network. */
const fs=require('fs'), path=require('path');
const SRC='/Users/sarang/Websites/ecwid-audit/Cannabilla Product Images';
const DEST='/Users/sarang/Websites/cannabilla-preview/public/products';
const IMG=/\.(jpe?g|png|webp)$/i;

// slug -> source folder
const folderFor={
  'crema-viso-idratante':'Crema viso',
  'crema-viso-solare-spf-50':'Crema solare viso',
  'melabilla-crema-viso-idratante-alla-mela-rosa':'MELABILLA Crema viso',
  'golden-hemp-siero-viso-idratante':'Olio viso golden hemp',
  'escar-glow-siero-viso-ultra-idratante':'Siero escarglow',
  'im-perfect-siero-viso-anti-imperfezioni':'Siero imperfect',
  'make-up-remover-bifasico':'Makeup remover',
  'mousse-detergente-delicata':'Mousse detergente',
  'scrub-viso-100-naturale':'Scrub viso',
  'hemp-kiss-balsamo-labbra-arancia':'Hemp kiss',
  'hemp-kiss-balsamo-labbra-nocciola':'Hemp kiss',
  'crema-corpo-idratazione-intensiva':'Crema corpo',
  'olio-corpo-nutriente-ed-idratante':'Olio corpo',
  'olio-corpo-per-massaggi':'Olio massaggi',
  'olio-corpo-post-epilazione':'Olio post epilazione',
  'crema-mani-idratante':'Crema mani',
  'melabilla-crema-mani-idratante-alla-mela-rosa':'MELABILLA Crema mani',
  'sapone-mani-delicato':'Sapone mani',
  'happy-feet-balsamo-naturale-per-il-benessere-dei-piedi':'Happy feet',
  'sportcream-crema-muscolare-lenitiva':'Sport cream',
  'psorcream-dermocalmante-e-lenitiva':'Psor cream',
  'latte-solare-idratante-spf-30':'Latte solare',
  'latte-solare-idratante-spf-50':'Latte solare',
  'crema-doposole-lenitiva':'Crema doposole',
  'olio-doposole-lenitivo':'Olio lenitivo',
  'elis-hair-olio-per-capelli-rigenerante':'Olio capelli ElisHair',
  'hemp-oo-shampoo-delicato-e-nutriente':'Hemp-oo',
  'olio-barba-ammorbidente':'Olio barba',
  'hempilla-ananda-5-estratto-naturale-di-canapa':'Hempilla',
  'hempilla-shanti-10-estratto-naturale-di-canapa':'Hempilla',
  'hempilla-soma-20-estratto-naturale-di-canapa':'Hempilla',
  'hempilla-shayana-30-estratto-naturale-di-canapa':'Hempilla',
  'olio-di-iperico-lenitivo-760499148':'Oleolito di iperico',
  'tattoo-cream-crema-nutriente':'Tattoo cream',
  'tattoo-balm-balsamo-lenitivo':'Tattoo balm',
  'bagno-doccia-detergente-e-idratante':'Bagnodoccia',
  'detergente-intimo-delicato':'Detergente Intimo',
  'liquido-igienizzante-spray':'Igienizzante mani',
};

// explicit ordered picks for shared/ambiguous folders (packshot-first, then lifestyle)
const explicit={
  'hempilla-ananda-5-estratto-naturale-di-canapa':['Hempilla_Ananda1.jpg','Hempilla_Ananda2.jpg','Hempilla_rendering.png','Infografica_Ananda.jpg','20260626_174104.jpg'],
  'hempilla-shanti-10-estratto-naturale-di-canapa':['Hempilla_rendering.png','hempilla_rendering1.png','hempilla_rendering2.png','20260626_174111.jpg','20260626_174104.jpg'],
  'hempilla-soma-20-estratto-naturale-di-canapa':['hempilla_rendering_soma.png','hempilla_rendering_soma1.png','Hempilla_rendering.png','20260626_174111.jpg'],
  'hempilla-shayana-30-estratto-naturale-di-canapa':['Hempilla_shayana.jpg','Hempilla_shayana_3.jpg','hempilla_shayana_10.jpg','Infografica_Shayana.jpg','Hempilla_rendering.png'],
  'hemp-kiss-balsamo-labbra-arancia':['Hempkiss_spf.jpg','HempKiss_mano.jpg','HempKiss_su foglia.jpg','20260626_173453.jpg','20260626_173449.jpg'],
  'hemp-kiss-balsamo-labbra-nocciola':['HempKiss_mano.jpg','HempKiss_su foglia.jpg','20260626_173459.jpg','20260626_173437.jpg','Hempkiss_spf.jpg'],
  'latte-solare-idratante-spf-30':['Latte solare SPF30_100ml.jpg','Latte solare SPF30_200ml.jpg','latte_solare_30_rendering1.jpg','LatteSolare_mano.jpg','20260626_173508.jpg'],
  'latte-solare-idratante-spf-50':['Latte solare SPF50_100ml.jpg','Latte solare SPF50_200ml.jpg','latte_solare_50_100ml_rendering2.jpg','LatteSolare_Mano1.jpg','20260626_173522.jpg'],
  'sportcream-crema-muscolare-lenitiva':['Sport cream 100ml.jpg','Sport crem 200ml.jpg','sport-cream-rendering.png','B0DDLG39CT.PT02.jpeg','Sport_cream_ragazza.png'],
  'tattoo-balm-balsamo-lenitivo':['Tattoo_balm.jpg','Tattoo_balm_rendering1.jpg','1_Tattoo_balm.jpg','2_Tattoo_balm.jpg','prima_dopo.jpg'],
  'tattoo-cream-crema-nutriente':['Tattoo_cream_rendering2.jpg','Tattoo_cream_rendering3.jpg','Tattoo_cream_rendering4.jpg','Tattoo_cream_rendering5.jpg','Tattoo_cream_rendering6.jpg'],
  'crema-viso-solare-spf-50':['Crema_solare_viso.jpg','Crema_solare_viso1.jpg','Crema solare.jpg','doposole_rendering1.png','20260626_201109.jpg'],
  'olio-corpo-nutriente-ed-idratante':['storia1.jpg','storia2.jpg','20260626_173351.jpg','20260626_173356.jpg'],
};

// heuristic ranker for auto folders
function rank(f){
  const n=f.toLowerCase();
  if(/rendering|_render|render\b/.test(n)) return 1;
  if(/^(crema|olio|scrub|mousse|golden|escar|elis|happy|iperico|struccante|sapone|bagno|make|imperfect|melabilla|hempoo|tattoo)/i.test(f)) return 0;
  if(/\.(png)$/i.test(n) && !/2026/.test(n)) return 1;
  if(/^20260626|^_?\d{6,}/.test(n)) return 3;
  if(/mano|spiaggia|office|foglia|ragazza|donna|relax|lancio/.test(n)) return 4;
  if(/infografica|storia|comp|prima_dopo|sessione|dalla|main|pt0/.test(n)) return 5;
  return 2;
}

const manifest={};
let totalCopied=0;
for(const [slug,folder] of Object.entries(folderFor)){
  const srcDir=path.join(SRC,folder);
  let files;
  if(explicit[slug]){ files=explicit[slug].filter(f=>fs.existsSync(path.join(srcDir,f))); }
  else {
    const all=fs.readdirSync(srcDir).filter(f=>IMG.test(f));
    all.sort((a,b)=> rank(a)-rank(b) || a.localeCompare(b));
    files=all.slice(0,6);
  }
  if(!files.length){ console.warn('NO IMAGES for',slug,folder); continue; }
  const outDir=path.join(DEST,slug);
  fs.mkdirSync(outDir,{recursive:true});
  const rel=[];
  files.forEach((f,i)=>{
    const ext=path.extname(f).toLowerCase().replace('.jpeg','.jpg');
    const dest=path.join(outDir, String(i+1).padStart(2,'0')+ext);
    fs.copyFileSync(path.join(srcDir,f), dest);
    rel.push('/products/'+slug+'/'+path.basename(dest));
    totalCopied++;
  });
  manifest[slug]=rel;
}
fs.mkdirSync(DEST,{recursive:true});
fs.writeFileSync(path.join(DEST,'_manifest.json'), JSON.stringify(manifest,null,2));
console.log('products with images:',Object.keys(manifest).length,'| files copied:',totalCopied);
for(const [s,imgs] of Object.entries(manifest)) console.log('  ',s,'->',imgs.length);
