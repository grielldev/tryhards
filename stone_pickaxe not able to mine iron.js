LootJS.modifiers((event) => {
    // Prevent iron ore from dropping anything with a wooden pickaxe
    event
        .addBlockLootModifier("minecraft:iron_ore")
        .matchMainHand("minecraft:wooden_pickaxe")
        .removeLoot("minecraft:raw_iron"); // remove the normal drop
        // You don’t addLoot here, so it drops nothing

    // Prevent iron ore from dropping anything with a stone pickaxe
    event
        .addBlockLootModifier("minecraft:iron_ore")
        .matchMainHand("minecraft:stone_pickaxe")
        .removeLoot("minecraft:raw_iron");
});
