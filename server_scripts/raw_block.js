ServerEvents.recipes(event => {

  // Iron
  event.remove({ output: 'minecraft:raw_iron', input: 'minecraft:raw_iron_block' })
  event.shapeless(Item.of('spelunkery:raw_iron_nugget', 9), ['minecraft:raw_iron_block'])

  // Copper
  event.remove({ output: 'minecraft:raw_copper', input: 'minecraft:raw_copper_block' })
  event.shapeless(Item.of('spelunkery:raw_copper_nugget', 9), ['minecraft:raw_copper_block'])

  // Gold
  event.remove({ output: 'minecraft:raw_gold', input: 'minecraft:raw_gold_block' })
  event.shapeless(Item.of('spelunkery:raw_gold_nugget', 9), ['minecraft:raw_gold_block'])

  // Diamond
  event.remove({ output: 'spelunkery:rough_diamond', input: 'spelunkery:rough_diamond_block' })
  event.shapeless(Item.of('spelunkery:rough_diamond_shard', 9), ['spelunkery:rough_diamond_block'])

  // Emerald
  event.remove({ output: 'spelunkery:rough_emerald', input: 'spelunkery:rough_emerald_block' })
  event.shapeless(Item.of('spelunkery:rough_emerald_shard', 9), ['spelunkery:rough_emerald_block'])

})