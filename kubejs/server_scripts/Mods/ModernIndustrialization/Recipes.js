////////////////////////
/// Made by Team AOF ///
////////////////////////

ServerEvents.recipes((e) => {
  miAssembler(
    e,
    ['modern_industrialization:uu_matter', 500],
    [
      ['modern_industrialization:quantum_machine_hull', 1],
      ['modern_industrialization:quantum_upgrade', 4],
      ['modern_industrialization:quantum_circuit', 4],
      ['modern_industrialization:quantum_tank', 4],
      ['modern_industrialization:quantum_barrel', 4],
      ['mekanism:pellet_antimatter', 16],
    ],
    ['modern_industrialization:replicator', 1],
    1000000,
    2000
  );

  // Obsidian Dust
  miMacerator(e, ['minecraft:obsidian', 1], [['mekanism:dust_obsidian', 4]], 2, 200);

  // Ores > Raw
  miMacerator(e, ['c:ores/silver', 1], [['modern_industrialization:raw_silver', 3]], 2, 100);

  e.replaceInput(
    { id: 'industrialization_overdrive:machines/multi_processing_array/craft' },
    'modern_industrialization:assembler',
    'extended_industrialization:processing_array'
  );

  // Mekanism Compat
  miMacerator(
    e,
    ['c:ores/fluorite', 1],
    [
      ['mekanism:dust_fluorite', 4],
      ['mekanism:dust_fluorite', 4, 0.75],
    ],
    2,
    100
  );
  miCompressor(e, ['c:dusts/fluorite', 1], ['mekanism:fluorite_gem', 1], 2, 50);

  e.shaped('mi_tweaks:flux_transformer', ['SS ', ' HC', 'SS '], {
    S: 'modern_industrialization:superconductor_cable',
    H: 'modern_industrialization:quantum_machine_hull',
    C: '#c:fe_cables',
  }).id('mi_tweaks:flux_transformer');
});
