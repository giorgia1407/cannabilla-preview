/**
 * Cannabilla — libreria immagini stock (Unsplash) per hero, editoriali, concern,
 * categorie, ingredienti e journal. Le foto PRODOTTO restano file locali in
 * /public/products/<slug>/.
 *
 * Tutti gli ID Unsplash qui sotto sono stati verificati (HTTP 200) prima del
 * commit. Temi: cosmesi naturale, botanica, montagna, wellness, texture pelle.
 */

/** Costruisce un URL Unsplash con crop e larghezza dati. */
export function unsplash(id: string, w = 1200, opts?: { h?: number; q?: number }): string {
  const q = opts?.q ?? 70;
  const h = opts?.h ? `&h=${opts.h}` : "";
  const fit = opts?.h ? "&fit=crop" : "&fit=max";
  return `https://images.unsplash.com/photo-${id}?auto=format&w=${w}${h}${fit}&q=${q}`;
}

/**
 * ID verificati, raggruppati per tema. I nomi descrivono l'uso previsto; le foto
 * sono selezionate su temi natura/botanica/wellness (soggetto non medicale).
 */
export const IMG = {
  // Paesaggi / montagna — Monti Sibillini, natura
  mountain1: "1454372182658-c712e4c5a1db",
  mountain2: "1470071459604-3b5ec3a7fe05",
  mountain3: "1469474968028-56623f02e42e",
  mountain4: "1441974231531-c6227db76b6e",
  mountain5: "1466781783364-36c955e42a7f",
  forest1: "1416879595882-3373a0480b5b",
  forest2: "1447752875215-b2761acb3c5d",
  meadow1: "1490750967868-88aa4486c946",
  field1: "1501004318641-b39e6451bec6",
  valley1: "1487412947147-5cebf100ffc2",

  // Persone / skincare / wellness (aspirazionale)
  skincare1: "1556228578-8c89e6adf883",
  skincare2: "1570172619644-dfd03ed5d881",
  skincare3: "1598440947619-2c35fc9aa908",
  skincare4: "1596755389378-c31d21fd1273",
  skincare5: "1620916566398-39f1143ab7be",
  skincare6: "1571781926291-c477ebfd024b",
  skincare7: "1620916297397-a4a5402a3c6c",
  wellness1: "1522335789203-aabd1fc54bc9",
  wellness2: "1556228453-efd6c1ff04f6",
  wellness3: "1556228720-195a672e8a03",
  wellness4: "1512207736890-6ffed8a84e8d",
  wellness5: "1616394584738-fc6e612e71b9",
  spa1: "1547793548-7a0e7dfdb24f",

  // Botanica / canapa / oli / texture
  botanical1: "1608248543803-ba4f8c70ae0b",
  botanical2: "1601049676869-702ea24cfd58",
  botanical3: "1615397349754-cfa2066a298e",
  botanical4: "1611930022073-b7a4ba5fcccd",
  botanical5: "1526947425960-945c6e72858f",
  botanical6: "1519681393784-d120267933ba",
  oil1: "1512290923902-8a9f81dc236c",
  oil2: "1552693673-1bf958298935",
  leaf1: "1517637633369-e4cc28755e01",
  leaf2: "1607602132700-068258431c6c",
  herb1: "1503236823255-94609f598e71",
  texture1: "1596178065887-1198b6148b2b",
  texture2: "1556227702-d1e4e7b5c232",
  cosmetics1: "1518495973542-4542c06a5843",

  /* --------------------------------------------------------------------------
   * Slot dedicati — foto selezionate e VERIFICATE VISIVAMENTE (2026-07, non solo
   * HTTP 200) per corrispondere alla rispettiva didascalia. Vedi
   * IMAGE_CURATION_REPORT.md per i candidati scartati e la motivazione.
   * -------------------------------------------------------------------------- */
  // Hero slideshow — donne 35-40 nella natura / paesaggio italiano
  hero1: "1601909977949-94b1582edc47", // donna ~35 in luce calda di casa, botanica in primo piano
  hero2: "1769984888584-fdd82332d8d9", // donna in prato fiorito di campagna, pelle chiara
  hero3: "1552598715-7eeb9232a2ac", // colline italiane all'alba, cipressi e casolare

  // Category tiles — persone che usano la categoria
  catViso: "1661346376364-706a9eac60ab", // crema viso allo specchio, casa luminosa
  catCorpo: "1655944185555-e58ed32a41f7", // olio corpo, camera calda, fiori secchi
  catSole: "1688823475222-b4bbd695c340", // applicazione solare all'aperto, montagna
  catCapelli: "1779055660816-14ccb4325087", // capelli lunghi sani, casa calda
  catLabbra: "1590736945722-bf5c39bc6513", // balsamo labbra, luce dorata naturale
  catTrattamenti: "1776790376585-4a12803b2b8c", // gesto di self-care sul viso, golden hour
  catEstratti: "1608571424266-edeb9bbefdec", // contagocce ambra su legno, botanica
  catLifestyle: "1597755770248-1cd07faaaff6", // tè del mattino, piante, casa
  catRegali: "1629959059803-0dc732a96d15", // regalo in carta kraft con fronde verdi

  // Concern tiles — close-up aspirazionali di pelle sana (mai condizioni mediche)
  cnSecca: "1595182281528-5ceaa7765993", // pelle idratata e luminosa
  cnSensibile: "1549996519-82381be6ac23", // viso calmo, incarnato uniforme
  cnImperfezioni: "1581182800629-7d90925ad072", // pelle fresca e pulita in luce naturale
  cnTono: "1542132583-b47f94eec949", // incarnato luminoso e uniforme
  cnMatura: "1781439213513-ef4ee75a4cd6", // donna con bella pelle matura, luce calda
  cnSolare: "1517269992380-58d48f7101d1", // glow estivo all'aperto, golden hour

  // Ingredient tiles — elemento botanico letterale
  ingCanapa: "1579244117435-36cc633d3292", // semi di canapa in cucchiaio di legno
  ingIaluronico: "1610797145210-42a1a511ba4c", // goccia d'acqua su foglia verde
  ingNiacinamide: "1655892836674-1df10277925e", // contagocce ambra minimal + botanica
  ingAloe: "1649264722111-5cff15f9d830", // foglie di aloe vera con rugiada
  ingVitaminaE: "1748543668646-e81cda0890f3", // goccia d'olio dorato + foglia
  ingCalendula: "1764070140303-e0a60f54625d", // fiori di calendula arancioni
  ingMalva: "1773992029604-9d27422ed8bc", // fiore di malva, petali viola venati
  ingIperico: "1626624780829-8d959d03c5d9", // iperico giallo, stami evidenti
  ingJojoba: "1573575154488-f88a60e170df", // flacone contagocce di olio dorato

  // Journal thumbnails — coerenti con il tema dell'articolo
  jrRoutine: "1770988042769-8457db10f3c6", // still-life botanico caldo, routine
  jrCanapa: "1617874564430-7487b49f5947", // campo di canapa al sole
  jrSpf: "1633321088768-b994237c8aa8", // costa italiana estiva soleggiata
  jrOrigini: "1600079793053-3a9fca3acd5d", // valle verde appenninica con borgo

  // Mega-menu — foto pannello dropdown (verificate visivamente 2026-07)
  mmDetersione: "1775642543443-a10792f9dc3d", // detersione viso al lavabo, luce calda
  mmEsfoliazione: "1585945037805-5fd82c2e60b1", // texture scrub su beige caldo
  mmBagnoDoccia: "1733426107854-ee00a25d72a7", // bagno naturale luminoso con piante
  mmIgiene: "1591625591034-75d303d2e1a4", // asciugamani di lino su legno
  mmRoutineUomo: "1607613992484-4df4d97b48fe", // uomo skincare, sfondo oliva naturale
  mmQualita: "1605265058749-78af14a1be2b", // mani con sapone artigianale
  mmSostenibilita: "1648587456176-4969b0124b12", // packaging kraft compostabile
  mmRivenditori: "1723663123120-6d47b4fac665", // scaffali erboristeria/apoteca caldi
  mmStoria: "1760681555936-9ed26729ff92", // casolare toscano al tramonto, cipressi
  mmSport: "1758274529433-864c64bbb61e", // donna stretching all'aperto, benessere
} as const;

export type ImgKey = keyof typeof IMG;
