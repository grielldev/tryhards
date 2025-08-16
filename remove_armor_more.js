// kubejs/server_scripts/remove_morearmor.js

// 🛑 List of all More Armor item IDs (helmets, chestplates, leggings, boots)
const moreArmor = [
  "acacia", "adaptive", "birch", "coal", "dark_oak",
  "dirt", "egg", "emerald", "enchanted_golden_apple", "enderpearl",
  "enhanced", "enhanceddiamondd", "feather", "flint", "food", "glowing",
  "golden_apple", "ice", "iron_bar", "jungle", "lapis", "magma",
  "melon", "nether_quartz", "oak", "obsidian", "paper", "redstone",
  "scute", "shulker", "slime", "sponge", "spruce", "stick", "sugar",
  "sugarcane", "tnt", "totem"
]

// 🔹 Remove crafting/smelting/etc. recipes
ServerEvents.recipes(event => {
  moreArmor.forEach(mat => {
    event.remove({ output: `morearmor:${mat}_armor_helmet` })
    event.remove({ output: `morearmor:${mat}_armor_chestplate` })
    event.remove({ output: `morearmor:${mat}_armor_leggings` })
    event.remove({ output: `morearmor:${mat}_armor_boots` })
  })
})

// 🔹 Remove from all loot tables (blocks, mobs, chests)
LootJS.modifiers(event => {
  moreArmor.forEach(mat => {
    ["helmet", "chestplate", "leggings", "boots"].forEach(piece => {
      event.addLootTableModifier(/.*/)
        .removeLoot(`morearmor:${mat}_armor_${piece}`)
    })
  })
})
