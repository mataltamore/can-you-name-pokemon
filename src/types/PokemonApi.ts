export type DtoPokemonGetObject = { name: string; url: string };
export type DtoPokemonGet = {
  count: number;
  next: string;
  previous: string;
  results: Array<DtoPokemonGetObject>;
};
