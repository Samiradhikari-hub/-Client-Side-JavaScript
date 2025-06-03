// Storymaker logic by Samir
// This function randomly picks one element from any given array
function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// This function assembles and displays the full silly sentence
function makeStory() {
  // Word sets based on the actual toy image you uploaded
  const subjects = [
    "The turkey", "Mom", "Dad", "The dog", 
    "My teacher", "The elephant", "The cat"
  ];

  const verbs = [
    "sat on", "ate", "danced with", "saw",
    "doesn't like", "kissed"
  ];

  const adjectives = [
    "a funny", "a scary", "a goofy", "a slimy",
    "a barking", "a fat"
  ];

  const nouns = [
    "goat", "monkey", "fish", "frog",
    "bug", "worm"
  ];

  const endings = [
    "on the moon", "on the chair", "in my spaghetti",
    "in my soup", "on the grass", "in my shoes"
  ];

  // Build the sentence from the selected pieces
  const sentence = `${pickRandom(subjects)} ${pickRandom(verbs)} ${pickRandom(adjectives)} ${pickRandom(nouns)} ${pickRandom(endings)}.`;

  // Output the sentence to the page
  document.getElementById("storyOutput").innerText = sentence;
}
