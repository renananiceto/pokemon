import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/header";
import usePokemonData from "../../service/index.js";
import * as S from "./styles";

export const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchList, setSearchList] = useState(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        const results = response.data.results;
        const promises = results.map((pokemon) => {
          return axios.get(pokemon.url).then((response) => response.data);
        });

        Promise.all(promises)
          .then((pokemonData) => {
            setPokemonList(pokemonData);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header pokemonList={pokemonList} setSearchList={setSearchList} />
      <S.Container>
        <S.Wrapper>
          {!searchList &&
            pokemonList.map((pokemon) => (
              <S.Card key={pokemon.name}>
                <p>#{pokemon.id}</p>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                {pokemon.name}
              </S.Card>
            ))}
          {searchList &&
            searchList.map((pokemon) => (
              <S.Card key={pokemon.name}>
                <p>#{pokemon.id}</p>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                {pokemon.name}
              </S.Card>
            ))}
        </S.Wrapper>
      </S.Container>
    </div>
  );
};
