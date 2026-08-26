// ─────────────────────────────────────────────────────────────
//  BASE DE RÉFÉRENCES — c'est le SEUL fichier à modifier.
//
//  Une ligne = une référence. Pour en ajouter une, copiez une
//  ligne existante et changez les valeurs. Pour en supprimer une,
//  effacez sa ligne. Attention à la virgule en fin de ligne :
//  toutes les lignes en ont une, sauf la dernière.
//
//  profils : uniquement parmi "Fruité", "Sucré", "Herbacé", "Terreux"
//  notes   : texte libre ("Acidulé", "Agrume", "Exotique"…)
//  id      : doit rester unique
// ─────────────────────────────────────────────────────────────

const HERBES = [
  {"id":"h01","ref":"Small Hydro Berry","type":"20% Gold","profils":["Fruité"],"notes":["Acidulé"]},
  {"id":"h02","ref":"Apple Dragon","type":"20% Gold","profils":["Fruité","Herbacé","Terreux"],"notes":["Acidulé"]},
  {"id":"h03","ref":"Sinaloa","type":"20% Gold","profils":["Fruité"],"notes":[]},
  {"id":"h04","ref":"Tutti Frutti","type":"20% Gold","profils":["Fruité","Terreux"],"notes":[]},
  {"id":"h05","ref":"Tropical","type":"20% Gold","profils":["Fruité","Herbacé"],"notes":["Exotique"]},
  {"id":"h06","ref":"Green Gelato","type":"20% Gold","profils":["Herbacé","Sucré"],"notes":[]},
  {"id":"h07","ref":"Northern Mango","type":"20% Gold","profils":["Fruité"],"notes":["Exotique","Agrume","Mangue"]},
  {"id":"h08","ref":"Banana","type":"20% Gold","profils":["Fruité"],"notes":[]},
  {"id":"h09","ref":"Green Apple","type":"20% Gold","profils":["Herbacé","Fruité"],"notes":["Acidulé"]},
  {"id":"h10","ref":"Small","type":"20% Gold","profils":["Fruité"],"notes":[]},
  {"id":"h11","ref":"Watermelon","type":"30% Gold","profils":["Herbacé","Fruité"],"notes":["Exotique"]},
  {"id":"h12","ref":"El Patrone","type":"30% Gold","profils":["Herbacé","Sucré"],"notes":[]},
  {"id":"h13","ref":"Sinaloa","type":"30% Gold","profils":["Fruité"],"notes":[]},
  {"id":"h14","ref":"Pepper Mango Haze","type":"30% Gold","profils":["Fruité","Herbacé"],"notes":["Exotique"]},
  {"id":"h15","ref":"Green Apple","type":"30% Gold","profils":["Herbacé","Fruité"],"notes":["Acidulé"]},
  {"id":"h16","ref":"Honey Cream","type":"30% Gold","profils":["Fruité"],"notes":["Acidulé"]},
  {"id":"h17","ref":"Gelato RS","type":"30% Gold","profils":["Herbacé","Fruité"],"notes":["Acidulé"]},
  {"id":"h18","ref":"Candy Fruit","type":"30% Gold","profils":["Fruité","Herbacé","Sucré"],"notes":[]},
  {"id":"h19","ref":"Candy Fruit","type":"20% Gold","profils":["Fruité","Herbacé","Sucré"],"notes":[]},
  {"id":"h20","ref":"Candy","type":"10% Gold","profils":["Sucré"],"notes":[]},
  {"id":"h21","ref":"Orange Bud","type":"10% Gold","profils":["Sucré"],"notes":["Agrume","Acidulé"]},
  {"id":"h22","ref":"Small","type":"10% Gold","profils":["Fruité"],"notes":[]},
  {"id":"h23","ref":"White Widow","type":"5% Gold","profils":["Terreux"],"notes":["Acidulé"]},
  {"id":"h24","ref":"Small","type":"5% Gold","profils":["Fruité"],"notes":[]},
  {"id":"h25","ref":"Mix Promo","type":"CBD small","profils":["Fruité","Terreux"],"notes":[]},
  {"id":"h26","ref":"Green Berry Promo","type":"CBD small","profils":["Herbacé","Fruité"],"notes":[]},
  {"id":"h27","ref":"Lemon Purple Promo","type":"CBD small","profils":["Herbacé","Fruité"],"notes":["Acidulé"]},
  {"id":"h28","ref":"Nothern Lights","type":"CBD Hydro","profils":["Fruité"],"notes":["Agrume"]},
  {"id":"h29","ref":"Candy Fruit","type":"CBD Hydro","profils":["Fruité","Herbacé","Sucré"],"notes":["Acidulé"]},
  {"id":"h30","ref":"Green Apple","type":"CBD Hydro","profils":["Herbacé","Fruité"],"notes":["Acidulé"]},
  {"id":"h31","ref":"Candy","type":"CBD Hydro","profils":["Sucré"],"notes":[]},
  {"id":"h32","ref":"Mix Promo","type":"CBD Hydro","profils":["Fruité","Terreux"],"notes":[]},
  {"id":"h33","ref":"Pineapple","type":"CBD Hydro","profils":["Fruité","Terreux"],"notes":[]},
  {"id":"h34","ref":"White Widow","type":"CBD Hydro","profils":["Terreux"],"notes":["Acidulé"]},
  {"id":"h35","ref":"Gelato RS","type":"CBD Hydro","profils":["Herbacé","Fruité"],"notes":["Acidulé"]},
  {"id":"h36","ref":"test","type":"CBD Hydro","profils":["Terreux"],"notes":[]}
];
