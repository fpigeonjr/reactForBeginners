export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function getFunName() {
  const adjectives = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'sustainable', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'chic', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'lazy', 'sriracha', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried', 'fugly', 'smelly', 'tight', 'asymmetrical', 'lofi', 'retro', 'shabby', 'normcore'];

  const nouns = ['women', 'men', 'unicorn', 'chicharrones', 'feet', 'peeps', 'leaves', 'hammock', 'mustache', 'crucifix', 'keytar', 'wives', 'skateboard', 'elves', 'loaves', 'mixtape', 'tomatoes', 'cacti', 'meggings', 'fungi', 'nuclei', 'syllabuses', 'analyses', 'axe', 'kickstarter', 'dreamcatcher', 'crises', 'phenomena', 'criteria', 'data', 'momma', 'dwarfes', 'boots', 'man-bun', 'chillwave', 'vegan', 'cornhole', 'flannel', 'leggings', 'pug', 'cronut'];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
