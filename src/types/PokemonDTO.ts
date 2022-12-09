export type PokemonDTO = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability2[];
  forms: Ability[];
  game_indices: Gameindex[];
  held_items: Helditem[];
  location_area_encounters: string;
  moves: Move[];
  species: Ability;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  past_types: Pasttype[];
};

type Pasttype = {
  generation: Ability;
  types: Type[];
};

type Type = {
  slot: number;
  type: Ability;
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: Ability;
};

type Sprites = {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
  versions: Versions;
};

type Versions = {
  'generation-i': Generationi;
  'generation-ii': Generationii;
  'generation-iii': Generationiii;
  'generation-iv': Generationiv;
  'generation-v': Generationv;
  'generation-vi': Generationvi;
  'generation-vii': Generationvii;
  'generation-viii': Generationviii;
};

type Generationviii = {
  icons: Dreamworld;
};

type Generationvii = {
  icons: Dreamworld;
  'ultra-sun-ultra-moon': Home;
};

type Generationvi = {
  'omegaruby-alphasapphire': Home;
  'x-y': Home;
};

type Generationv = {
  'black-white': Blackwhite;
};

type Blackwhite = {
  animated: Diamondpearl;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
};

type Generationiv = {
  'diamond-pearl': Diamondpearl;
  'heartgold-soulsilver': Diamondpearl;
  platinum: Diamondpearl;
};

type Diamondpearl = {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
};

type Generationiii = {
  emerald: Emerald;
  'firered-leafgreen': Crystal;
  'ruby-sapphire': Crystal;
};

type Emerald = {
  front_default: string;
  front_shiny: string;
};

type Generationii = {
  crystal: Crystal;
  gold: Crystal;
  silver: Crystal;
};

type Crystal = {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
};

type Generationi = {
  'red-blue': Redblue;
  yellow: Redblue;
};

type Redblue = {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
};

type Other = {
  dream_world: Dreamworld;
  home: Home;
  'official-artwork': Officialartwork;
};

type Officialartwork = {
  front_default: string;
};

type Home = {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
};

type Dreamworld = {
  front_default: string;
  front_female?: any;
};

type Move = {
  move: Ability;
  version_group_details: Versiongroupdetail[];
};

type Versiongroupdetail = {
  level_learned_at: number;
  version_group: Ability;
  move_learn_method: Ability;
};

type Helditem = {
  item: Ability;
  version_details: Versiondetail[];
};

type Versiondetail = {
  rarity: number;
  version: Ability;
};

type Gameindex = {
  game_index: number;
  version: Ability;
};

type Ability2 = {
  is_hidden: boolean;
  slot: number;
  ability: Ability;
};

type Ability = {
  name: string;
  url: string;
};
