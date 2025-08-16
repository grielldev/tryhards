LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:stone")
        .matchMainHand("notreepunching:flint_pickaxe")
        .removeLoot("minecraft:cobblestone") 
        .addLoot("notreepunching:stone_loose_rock"); 
});

