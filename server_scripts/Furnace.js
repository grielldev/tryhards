
ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:furnace' })
  event.shaped(
    Item.of('minecraft:furnace', 1), // output
    [
    'AAA',
    'ABA',
    'AAA'
    ],
    {
    A: 'minecraft:cobblestone',
    B: 'minecraft:raw_copper'
    }
  )

})
