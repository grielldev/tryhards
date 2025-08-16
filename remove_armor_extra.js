// kubejs/server_scripts/remove_items.js

// 🛑 List of all Extra Armor item IDs (helmets, chestplates, leggings, boots)
const extraArmor = [
  "acacia", "amethyst", "birch", "cactus", "crimson",
  "crying_obsidian", "dark_oak", "echo", "emerald", "ender", "enderghost",
  "feather", "ghost", "glass", "glowing_obsidian", "glowstone",
  "ice", "jungle", "lapis", "magma", "mangrove", "melon", "molten", "oak",
  "obsidian", "phantom", "prismarine_crystal", "prismarine_shard", "pumpkin",
  "quartz", "reinforced_iron", "slime", "snow", "spruce",
  "warped"
]

// 🔹 Remove crafting/smelting/etc. recipes
ServerEvents.recipes(event => {
  extraArmor.forEach(mat => {
    event.remove({ output: `extraarmor:${mat}_helmet` })
    event.remove({ output: `extraarmor:${mat}_chestplate` })
    event.remove({ output: `extraarmor:${mat}_leggings` })
    event.remove({ output: `extraarmor:${mat}_boots` })
  })
})

// 🔹 Remove from all loot tables (blocks, mobs, chests)
LootJS.modifiers(event => {
  extraArmor.forEach(mat => {
    ["helmet", "chestplate", "leggings", "boots"].forEach(piece => {
      event.addLootTableModifier(/.*/)
        .removeLoot(`extraarmor:${mat}_${piece}`)
    })
  })
})
