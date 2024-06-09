// noinspection SpellCheckingInspection

import { Moves } from "../moves";
import {Species} from "#app/data/enums/species";
import {Type} from "#app/data/type";
import {Abilities} from "#app/data/enums/abilities";
import {GrowthRate} from "#app/data/exp";
import PokemonSpecies from "#app/data/pokemon-species";


export const bnkMonEggMoves =
    [ Moves.NASTY_PLOT, Moves.TRICK_ROOM, Moves.THUNDERBOLT, Moves.BOOMBURST ];


type MoveLevelPair = [number, Moves];
type MoveLevelList = MoveLevelPair[];
export const bnkMonLevelMoves:MoveLevelList =   [
  [ 1, Moves.TACKLE ],
  [ 1, Moves.LICK ],
  [ 1, Moves.SWALLOW ],
  [ 1, Moves.SALT_CURE ],
  [ 1, Moves.ZIPPY_ZAP ],
  [ 1, Moves.THOUSAND_ARROWS ],
  [ 1, Moves.BITTER_BLADE ],
  [ 12, Moves.YAWN ],
  [ 16, Moves.BITE ],
  [ 20, Moves.REST ],
  [ 20, Moves.SNORE ],
  [ 20, Moves.SLEEP_TALK ],
  [ 24, Moves.CRUNCH ],
  [ 28, Moves.BODY_SLAM ],
  [ 32, Moves.HEAVY_SLAM ],
  [ 36, Moves.AMNESIA ],
  [ 40, Moves.HIGH_HORSEPOWER ],
  [ 44, Moves.HAMMER_ARM ],
  [ 48, Moves.BELLY_DRUM ],
  [ 52, Moves.BELCH ],
  [ 56, Moves.GIGA_IMPACT ],
];



export function  getBnkMonSpecies (species: typeof PokemonSpecies): PokemonSpecies {
  const generation = 1;
  const subLegendary = false;
  const legendary = false;
  const mythical = false;
  const speciesName = "Trbo mon";
  const type1 = Type.NORMAL;
  const type2 = null;
  const height = 3;
  const weight = 512;
  const ability1 = Abilities.WONDER_GUARD;
  const ability2 = Abilities.CUTE_CHARM;
  const abilityHidden = Abilities.SUPER_LUCK;
  const baseTotal = 405;
  const baseHp = 210;
  const baseAtk = 150;
  const baseDef = 80;
  const baseSpatk = 65;
  const baseSpdef = 80;
  const baseSpd = 144;
  const catchRate = 20;
  const baseFriendship = 50;
  const baseExp = 320;
  const growthRate = GrowthRate.ERRATIC;
  const malePercent = 87.5;
  const genderDiffs = false;

  return new  species(Species.BNK_MON,
    generation,
    subLegendary,
    legendary,
    mythical,
    speciesName,
    type1,
    type2,
    height,
    weight,
    ability1,
    ability2,
    abilityHidden,
    baseTotal,
    baseHp,
    baseAtk,
    baseDef,
    baseSpatk,
    baseSpdef,
    baseSpd,
    catchRate,
    baseFriendship,
    baseExp,
    growthRate,
    malePercent,
    genderDiffs);
}
export const bnkMonStarterAbilities = Abilities.LIQUID_VOICE;

export const bnkMonStarterValue = 3;
