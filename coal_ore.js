LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:coal_ore")
        .removeLoot("*") 
        .addLoot("spelunkery:coal_lump"); 
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:deepslate_coal_ore")
        .removeLoot("*") 
        .addLoot("spelunkery:coal_lump"); 
});