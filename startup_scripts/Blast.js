// kubejs/server_scripts/blast_resistance_changes.js

BlockEvents.modification(event => {
  const blocks = [
    { id: 'minecraft:oak_planks', resistance: 1200 },   // same as Obsidian
    { id: 'minecraft:glass', resistance: 600 },         // much stronger glass
    { id: 'minecraft:dirt', resistance: 50 },           // a little tougher dirt
    { id: 'minecraft:cobblestone', resistance: 200 },   // stronger cobble
    { id: 'minecraft:stone', resistance: 400 }          // stronger stone
  ]

  blocks.forEach(b => {
    event.modify(b.id, block => {
      block.explosionResistance = b.resistance
    })
  })
})