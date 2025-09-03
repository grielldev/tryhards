
ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:stone_pickaxe' }) 
  event.shaped(
    Item.of('minecraft:stone_pickaxe', 1), // output
    [
    'AAA',
    'BCB',
    ' C '
    ],
    {
    A: 'minecraft:stone',
    B: 'minecraft:string',
    C: 'minecraft:stick'
    }
  )
})

ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:stone_shovel' }) 
  event.shaped(
    Item.of('minecraft:stone_shovel', 1),
    [
    ' A ',
    'BCB',
    ' C '
    ],
    {
    A: 'minecraft:stone',
    B: 'minecraft:string',
    C: 'minecraft:stick'
    }
  )
})

ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:stone_sword' }) 
  event.shaped(
    Item.of('minecraft:stone_sword', 1),
    [
    ' A ',
    ' A ',
    'BCB'
    ],
    {
    A: 'minecraft:stone',
    B: 'minecraft:string',
    C: 'minecraft:stick'
    }
  )
})

ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:stone_hoe' }) 
  event.shaped(
    Item.of('minecraft:stone_hoe', 1),
    [
    'BAA',
    'BC ',
    ' C '
    ],
    {
    A: 'minecraft:stone',
    B: 'minecraft:string',
    C: 'minecraft:stick'
    }
  )
})

ServerEvents.recipes(event => {
  event.remove({ output: 'minecraft:stone_axe' }) 
  event.shaped(
    Item.of('minecraft:stone_axe', 1),
    [
    'BAA',
    'BCA',
    ' C '
    ],
    {
    A: 'minecraft:stone',
    B: 'minecraft:string',
    C: 'minecraft:stick'
    }
  )
})