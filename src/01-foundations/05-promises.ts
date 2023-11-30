import { http } from "../plugins";

// --- PROMISES ---
// const getPokemonById = (id: string) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   return fetch(url)
//     .then((response) => response.json())
//     .then((pokemon) => pokemon.name);
// };

// --- ASYNC/AWAIT ---
export const getPokemonById = async (id: string | number): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    return pokemon.name;
  } catch (error: any) {
    throw new Error(error);
  }
};
