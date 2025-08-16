LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:iron_ore")
        .removeLoot("*") 
        .addLoot("spelunkery:raw_iron_nugget"); 
});
LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:deepslate_iron_ore")
        .removeLoot("*") 
        .addLoot("spelunkery:raw_iron_nugget"); 
});