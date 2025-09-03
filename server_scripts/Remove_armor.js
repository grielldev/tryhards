const extraArmor = [
  "acacia", "amethyst", "birch", "cactus", "crimson",
  "crying_obsidian", "dark_oak", "echo", "emerald", "ender", "enderghost",
  "feather", "ghost", "glass", "glowing_obsidian", "glowstone",
  "ice", "jungle", "lapis", "magma", "mangrove", "melon", "molten", "oak",
  "obsidian", "phantom", "prismarine_crystal", "prismarine_shard", "pumpkin",
  "quartz", "reinforced_iron", "slime", "snow", "spruce",
  "warped"
]

ServerEvents.recipes(event => {
  extraArmor.forEach(mat => {
    event.remove({ output: `extraarmor:${mat}_helmet` })
    event.remove({ output: `extraarmor:${mat}_chestplate` })
    event.remove({ output: `extraarmor:${mat}_leggings` })
    event.remove({ output: `extraarmor:${mat}_boots` })
  })
})

LootJS.modifiers(event => {
  extraArmor.forEach(mat => {
    ["helmet", "chestplate", "leggings", "boots"].forEach(piece => {
      event.addLootTableModifier(/.*/)
        .removeLoot(`extraarmor:${mat}_${piece}`)
    })
  })
})

const moreArmor = [
  "acacia", "adaptive", "birch", "coal", "dark_oak",
  "dirt", "egg", "emerald", "enchanted_golden_apple", "enderpearl",
  "enhanced", "enhanceddiamondd", "feather", "flint", "food", "glowing",
  "golden_apple", "ice", "iron_bar", "jungle", "lapis", "magma",
  "melon", "nether_quartz", "oak", "obsidian", "paper", "redstone",
  "scute", "shulker", "slime", "sponge", "spruce", "stick", "sugar",
  "sugarcane", "tnt", "totem"
]

ServerEvents.recipes(event => {
  moreArmor.forEach(mat => {
    event.remove({ output: `morearmor:${mat}_armor_helmet` })
    event.remove({ output: `morearmor:${mat}_armor_chestplate` })
    event.remove({ output: `morearmor:${mat}_armor_leggings` })
    event.remove({ output: `morearmor:${mat}_armor_boots` })
  })
})

LootJS.modifiers(event => {
  moreArmor.forEach(mat => {
    ["helmet", "chestplate", "leggings", "boots"].forEach(piece => {
      event.addLootTableModifier(/.*/)
        .removeLoot(`morearmor:${mat}_armor_${piece}`)
    })
  })
})
