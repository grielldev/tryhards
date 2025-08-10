// Just call the function defined in 00_armor_helper.js, no imports or requires!




addCustomArmorRecipe(
  'minecraft:diamond_chestplate',
  ['CLC', 'CCC', 'CCC'],
  {
    C: 'minecraft:cobblestone',
    L: 'minecraft:leather_chestplate'
  },
  [
    { AttributeName: 'generic.armor', Amount: 5.0, Slot: 'chest' },
    { AttributeName: 'generic.armor_toughness', Amount: 2.0, Slot: 'chest' },
    { AttributeName: 'generic.knockback_resistance', Amount: 0.1, Slot: 'chest' }
  ],
  0,
  "Test Diamond Chestplate"
)

