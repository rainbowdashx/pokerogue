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
  [ 1, Moves.TAIL_WHIP ],
  [ 3, Moves.WATER_GUN ],
  [ 6, Moves.WITHDRAW ],
  [ 9, Moves.RAPID_SPIN ],
  [ 12, Moves.BITE ],
  [ 15, Moves.WATER_PULSE ],
  [ 18, Moves.PROTECT ],
  [ 21, Moves.RAIN_DANCE ],
  [ 24, Moves.AQUA_TAIL ],
  [ 27, Moves.SHELL_SMASH ],
  [ 30, Moves.IRON_DEFENSE ],
  [ 33, Moves.HYDRO_PUMP ],
  [ 36, Moves.WAVE_CRASH ],
];



export function  getBnkMonSpecies (species: typeof PokemonSpecies): PokemonSpecies {

  return new  species(Species.BNK_MON,
    1,
    false,
    false,
    false,
    "Trbo mon",
    Type.PSYCHIC,
    null,
    1,
    22.5,
    Abilities.TORRENT,
    Abilities.NONE,
    Abilities.RAIN_DISH,
    405,
    59,
    63,
    80,
    65,
    80,
    58,
    45,
    50,
    142,
    GrowthRate.FLUCTUATING,
    87.5,
    false);
}
export const bnkMonStarterAbilities = Abilities.VICTORY_STAR;

export const bnkMonStarterValue = 6;
