
ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:charcoal' })
  event.smelting('spelunkery:charcoal_lump', '#minecraft:logs')
});

ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:charcoal' })
  event.shaped(
    Item.of('minecraft:charcoal', 1), // output
    [
    'AAA',
    'AAA',
    'AAA'
    ],
    {
    A: 'spelunkery:charcoal_lump',
    }
  )
})