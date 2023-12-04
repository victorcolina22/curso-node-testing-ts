import { getPokemonById } from "../../src/01-foundations/05-promises";

describe("05-promises", () => {
  test("getPokemonById should return a pokemon", async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe("bulbasaur");
  });

  test("should return an error if pokemon does not exist", async () => {
    const pokemonId = 1000000;
    try {
      await getPokemonById(pokemonId);
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toStrictEqual(
        new Error(`Pokemon not found with id ${pokemonId}`)
      );
    }
  });
});
