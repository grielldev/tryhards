
ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:charcoal' })
  event.smelting('spelunkery:charcoal_lump', '#minecraft:logs')
})