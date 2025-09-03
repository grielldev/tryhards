
ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:cobblestone' })
  event.shaped(
    Item.of('minecraft:cobblestone', 1), // output
    [
    'AAA',
    'AAA',
    'AAA'
    ],
    {
    A: 'notreepunching:stone_loose_rock',
    }
  )
})