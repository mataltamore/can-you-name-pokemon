export enum Generations {
  GENERATION_ONE = '?offset=0&limit=151',
  GENERATION_TWO = '?offset=151&limit=100',
  GENERATION_THREE = '?offset=251&limit=135',
  GENERATION_FOUR = '?offset=387&limit=106',
  GENERATION_FIVE = '?offset=493&limit=156',
  GENERATION_SIX = '?offset=649&limit=72',
  GENERATION_SEVEN = '?offset=721&limit=88',
}

export function getGeneration(key: string) {
  switch (key) {
    case 'GENERATION_ONE':
      return Generations.GENERATION_ONE;
    case 'GENERATION_TWO':
      return Generations.GENERATION_TWO;
    case 'GENERATION_THREE':
      return Generations.GENERATION_THREE;
    case 'GENERATION_FOUR':
      return Generations.GENERATION_FOUR;
    case 'GENERATION_FIVE':
      return Generations.GENERATION_FIVE;
    case 'GENERATION_SIX':
      return Generations.GENERATION_SIX;
    case 'GENERATION_SEVEN':
      return Generations.GENERATION_SEVEN;
    default:
      return '';
  }
}
