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
  [ 1, Moves.SCREECH ],
  [ 1, Moves.DEFENSE_CURL ],
  [ 1, Moves.METRONOME ],
  [ 1, Moves.LICK ],
  [ 1, Moves.FLAIL ],
  [ 1, Moves.STOCKPILE ],
  [ 1, Moves.SWALLOW ],
  [ 1, Moves.RECYCLE ],
  [ 1, Moves.BLOCK ],
  [ 1, Moves.COVET ],
  [ 1, Moves.FLING ],
  [ 1, Moves.LAST_RESORT ],
  [ 1, Moves.SALT_CURE ],
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

  return new  species(Species.BNK_MON,
    1,
    false,
    false,
    false,
    "Trbo mon",
    Type.NORMAL,
    null,
    3,
    512,
    Abilities.WONDER_GUARD,
    Abilities.CUTE_CHARM,
    Abilities.SUPER_LUCK,
    405,
    210,
    150,
    80,
    65,
    80,
    144,
    20,
    50,
    320,
    GrowthRate.ERRATIC,
    87.5,
    false);
}
export const bnkMonStarterAbilities = Abilities.LIQUID_VOICE;

export const bnkMonStarterValue = 3;
