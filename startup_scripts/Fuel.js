// kubejs/startup_scripts/disable_wood_fuel.js
// Robust: disables fuel for anything that looks wood-ish by ID, plus common tags.

ItemEvents.modification(event => {
  // Regex hits most vanilla + modded wood items by name
  const woodLike = /^(?:.+:).*(?:log|wood|stem|hyphae|planks|slab|stairs|fence|gate|door|trapdoor|button|boat|sign|hanging_sign|pressure_plate|mosaic|bamboo|stick)$/;

  event.modify(woodLike, item => {
    item.burnTime = 0;
  });

  // Also hit key vanilla tags
  ['#minecraft:logs', '#minecraft:logs_that_burn', '#minecraft:planks'].forEach(t => {
    event.modify(t, item => { item.burnTime = 0; });
  });

  // Cross-platform “wooden rod” tags (ignored if missing)
  ['#forge:rods/wooden', '#c:wooden_rods'].forEach(t => {
    event.modify(t, item => { item.burnTime = 0; });
  });
});
