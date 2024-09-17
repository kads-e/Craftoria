ServerEvents.tags('item', (e) => {
  let additions = [
    /storage_cell/,
    /fe_.*_cell/,
    /portable_.*_cell/,
    'ae2:view_cell',
    'ae2:wireless_crafting_terminal',
    'ae2wtlib:wireless_universal_terminal',
    'megacells:bulk_item_cell',
    'megacells:radioactive_chemical_cell',

    /pneumaticcraft:.*_(tank|chest)$/,
    /pneumaticcraft:.*drone/,
    'pneumaticcraft:liquid_hopper',

    /sophisticated.*:.*(shulker|barrel|chest|backpack)/,

    /functionalstorage/,

    /industrialforegoing:infinity_.*/,
    'industrialforegoing:mob_imprisonment_tool',

    /^easy_/,

    /mekanism:.*_(chest|tank|barrel)/,
    /mekanism:.*_bin$/,
    /mekanism:qio_drive/,
    /mekanism:(basic|advanced|elite|ultimate)_.*_factory/,
    /mekanism:.*_energy_cube$/,
    'mekanism:cardboard_box',
    'mekanism:qio_dashboard',
    'mekanism:portable_qio_dashboard',
    'mekanism:enrichment_chamber',
    'mekanism:crusher',
    'mekanism:purification_chamber',
    'mekanism:chemical_injection_chamber',
    'mekanism:chemical_washer',
    'mekanism:chemical_crystallizer',
    'mekanism:combiner',
    'mekanism:metallurgic_infuser',
    'mekanism:osmium_compressor',
    'mekanism:energized_smelter',
    'mekanism:digital_miner',
    'mekanism:chemical_dissolution_chamber',
    'mekanism:pressurized_reaction_chamber',
    'mekanism:precision_sawmill',
    'mekanism:rotary_condensentrator',
    'mekanism:seismic_vibrator',
    'mekanism:solar_neutron_activator',
    'mekanism:nutritional_liquifier',
    'mekanism:formulaic_assemblicator',
    'mekanism:oredictionificator',
    'mekanism:laser_tractor_beam',
    'mekanism:chemical_oxidizer',
    'mekanism:chemical_infuser',
    'mekanism:pigment_extractor',
    'mekanism:pigment_mixer',
    'mekanism:painting_machine',
    'mekanism:security_desk',
    'mekanism:electric_pump',
    'mekanism:fluidic_plenisher',
    'mekanism:electrolytic_separator',
    'mekanism:isotopic_centrifuge',
    'mekanism:resistive_heater',
    'mekanism:fuelwood_heater',
    'mekanism:modification_station',
    'mekanism:antiprotonic_nucleosynthesizer',
    'mekanism:teleporter',
    'mekanism:gauge_dropper',
    'mekanism:robit',
    'mekanismgenerators:heat_generator',
    'mekanismgenerators:wind_generator',
    'mekanismgenerators:bio_generator',
    'mekanismgenerators:solar_generator',
    'mekanismgenerators:advanced_solar_generator',
    'mekanismgenerators:gas_burning_generator',

    'occultism:storage_controller',
    'occultism:soul_gem',
    'occultism:soul_shard',
    'occultism:satchel',
    'occultism:storage_stabilizer_.*',
    'occultism:familiar_ring'

    'ars_nouveau:mob_jar',
    'ars_elemental:curio_bag',
    'ars_elemental:caster_bag',
    'ars_additions:handy_haversack',
    'ars_nouveau:source_jar'

    'shrink:shrink_bottle',

    'integrateddynamics:energy_battery',

    'justdirethings:creaturecatcher',
    'justdirethings:inventory_holder',
    'justdirethings:fluid_canister',
    'justdirethings:fuel_canister',
    'justdirethings:pocket_generator',
    'justdirethings:experienceholder',

    'modern_industrialization:replicator',
    'modern_industrialization:helium_plasma_bucket',

    'gag:time_sand_pouch',

    'hyperbox:hyperbox',

    'extendedae:package',

    'apothic_enchanting:library',
    'apothic_enchanting:ender_library',
  ];

  let exclusions = [
    /functionalstorage:.*(upgrade|downgrade|tool|controller)/,
    /mekanism:dynamic_(tank|valve)/,
    'industrialforegoing:infinity_charger',
    'mekanism:scuba_tank',
    'mekanism:radioactive_waste_barrel',
  ];
  e.add('modern_industrialization:replicator_blacklist', additions).remove(exclusions);
});
