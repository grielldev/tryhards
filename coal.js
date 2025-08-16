
ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:coal' })
  event.shaped(
    Item.of('minecraft:coal', 1), // output
    [
    'AAA',
    'AAA',
    'AAA'
    ],
    {
    A: 'spelunkery:coal_lump',
    }
  )
})