const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

//Task 1: Use the find method to locate the first creature of the "Water" type and log its name to the console.
const firstWaterType = mythicalCreatures.find(
  (creature) => creature.type === "Water"
);

console.log(`First Spotted Water Creature: ${firstWaterType.name}`);

//Task 2:Use the findIndex method to locate the index of the "Griffin" in the mythical creatures array and log it to the console.

const griffinIdx = mythicalCreatures.findIndex(
  (creature) => creature.name === "Griffin"
);

console.log(`Index of Griffin Creature: ${griffinIdx}`);
