ServerEvents.tags('item', (e) => {
  e.add('minecraft:storage_blocks/quartz', 'minecraft:quartz_block');
  e.add('c:storage_blocks/amethyst', 'minecraft:amethyst_block');
  e.add('c:storage_blocks/fluix', 'ae2:fluix_block');
  e.add('c:storage_blocks/charged_redstone', 'appflux:charged_redstone_block');

  e.add('curios:curio', ['simplemagnets:basicmagnet', 'simplemagnets:advancedmagnet']);

  // Crops & Seeds
  e.add('c:seeds/cabbage', 'farmersdelight:cabbage_seeds');
  e.add('c:seeds/tomato', 'farmersdelight:tomato_seeds');
  e.add('c:seeds/rice', 'sushigocrafting:rice_seeds');
  e.add('c:seeds/eggplant', 'dumplings_delight:eggplant_seeds');
  e.add('c:crops/garlic', 'dumplings_delight:garlic');
  e.add('c:crops/green_onion', 'croptopia:greenonion');

  // Foods
  e.add('c:foods/raw_bacon', 'croptopia:bacon');
  e.add('c:foods/cooked_bacon', 'croptopia:cooked_bacon');
  e.add('c:foods/calamari', 'croptopia:calamari');
});

ServerEvents.tags('block', (e) => {
  e.add('ftbchunks:interact_whitelist', [
    '@waystones',
    'minecraft:crafting_table',
    'minecraft:ender_chest',
    'minecraft:enchanting_table',
    'minecraft:loom',
    'minecraft:smithing_table',
    'minecraft:stonecutter',
    '#minecraft:anvil',
    'minecraft:bell',
    'yigd:grave',
    '#lootr:containers',
  ]);

  e.add('ae2:blacklisted/spatial', ['justdirethings:time_crystal_budding_block']);
  e.add('mekanism:cardboard_blacklist', ['justdirethings:time_crystal_budding_block']);

  colors.forEach((color) => {
    e.add('c:glass_blocks', `#chipped:${color}_stained_glass`);
    e.add('c:glass_panes', `#chipped:${color}_stained_glass_pane`);
  });

  e.add('c:glass_blocks', ['#chipped:glass']);
  e.add('c:glass_panes', ['#chipped:glass_pane']);

  e.add('minecraft:mineable/pickaxe', [
    '#c:glass_blocks',
    '#c:glass_panes',
    '#chipped:glowstone',
    /^mekanism:(basic|advanced|elite|ultimate)_(universal_cable|mechanical_pipe|pressurized_tube|logistical_transporter|thermodynamic_conductor)$/,
    'mekanism:diversion_transporter',
    'mekanism:restrictive_transporter',
    '#c:skulls',
  ]);

  e.add('minecraft:mineable/axe', ['mekanism:cardboard_box']);

  e.add('minecraft:storage_blocks/quartz', 'minecraft:quartz_block');

  e.add('c:budding', '#c:budding_blocks');
});

ServerEvents.tags('fluid', (e) => {
  e.add('c:lubricant', 'modern_industrialization:lubricant');
  e.add('c:plantoil', 'modern_industrialization:plant_oil');
  e.add('c:fuels/crude_oil', 'modern_industrialization:crude_oil');
});

ServerEvents.tags('entity_type', (e) => {
  e.add('ftbchunks:entity_interact_whitelist', ['minecraft:villager']);
});
