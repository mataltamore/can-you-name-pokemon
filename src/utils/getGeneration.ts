import { Generations } from 'src/types/Generations';

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
