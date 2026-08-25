# Herbier — catalogue filtrable

Site statique (aucun serveur, aucune base de données) : deux fichiers suffisent.

```
index.html   ← l'application (filtres, affichage, mode édition)
data.js      ← les 40 références. Le seul fichier à modifier au quotidien.
```

Pour le tester en local : ouvrez `index.html` dans le navigateur.

---

## Mettre en ligne gratuitement — GitHub Pages

C'est l'option recommandée : elle est gratuite à vie, et surtout elle permet de
modifier `data.js` directement depuis le navigateur, sans rien réinstaller.

1. Sur github.com, **New repository** → nom `herbier` → **Public** → *Create*.
2. **Add file → Upload files** : déposez `index.html` et `data.js`, puis *Commit changes*.
3. **Settings → Pages** → *Source* : `Deploy from a branch` → branche `main`, dossier `/ (root)` → *Save*.
4. Une minute plus tard, le site est à l'adresse
   `https://VOTRE-PSEUDO.github.io/herbier/`.

### Mettre à jour les références ensuite

- Sur le dépôt, cliquez sur `data.js` → l'icône crayon → modifiez → *Commit changes*.
- Le site est à jour en une minute environ.

## Autre option — Netlify Drop

`https://app.netlify.com/drop` : glissez le dossier complet dans la page, l'URL est
immédiate et aucun compte n'est nécessaire pour un premier essai. En revanche, chaque
mise à jour impose de re-glisser le dossier. Pratique pour montrer le site aujourd'hui,
moins pour le maintenir.

---

## Modifier les références

### Depuis le site lui-même (le plus simple)

1. Bouton **Mode édition** en haut à droite de la barre de filtres.
2. Ajoutez, modifiez ou supprimez les références directement sur les cartes.
3. Cliquez sur **Télécharger data.js** en bas de l'écran.
4. Remplacez `data.js` sur GitHub par le fichier téléchargé.

Vos changements restent dans le navigateur tant que vous n'avez pas publié le nouveau
`data.js` — ils ne sont visibles que par vous. « Revenir au fichier d'origine » les efface.

### Directement dans `data.js`

Une ligne = une référence :

```js
{"id": "h07", "ref": "Northern Mango", "type": "20% Gold", "profils": ["Fruité"], "notes": ["Exotique"]},
```

- `id` : unique, jamais deux fois le même.
- `type` : texte libre. Toute nouvelle valeur alimente automatiquement le menu déroulant.
- `profils` : uniquement `"Fruité"`, `"Sucré"`, `"Herbacé"`, `"Terreux"` — ce sont les
  quatre boutons. Une liste vide (`[]`) est acceptée.
- `notes` : texte libre, autant de valeurs que voulu.
- Toutes les lignes se terminent par une virgule, **sauf la dernière**.

## Ajouter un cinquième profil aromatique

Dans `index.html`, en haut du `<script>` :

```js
const PROFILS = [
  {nom:'Fruité',  css:'var(--fruite)'},
  ...
  {nom:'Acidulé', css:'#7FB8D9'}      // ← nouvelle ligne
];
```

Le bouton, la couleur et le filtre suivent tout seuls.
