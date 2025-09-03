
ServerEvents.recipes(event => {
  event.remove({ output: 'notreepunching:plant_string' }) 
  event.shaped(
    Item.of('notreepunching:plant_string', 1), // output
    [
    'AA',
    'AA'
    ],
    {
    A: 'notreepunching:plant_fiber'
    }
  )
})