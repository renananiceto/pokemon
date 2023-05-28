import React, { useState } from "react";
import axios from "axios";
//imagens
import Pokeball from "../../image/pokeball.svg";

//styled components
import * as S from "./styles";

export const Header = ({ pokemonList, setSearchList }) => {
  const [searchValue, setSearchValue] = useState();

  const handleChange = (ev) => {
    const { value } = ev.target;

    const filter = pokemonList.filter(
      (pokemon) =>
        pokemon.name.includes(value) || String(pokemon.id).includes(value)
    );
    setSearchList(filter);
    if (!value) setSearchList(null);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxImage>
          <section>
            <img src={Pokeball} alt="Pokeball" />
            <p>Pokédex</p>
          </section>
          <S.BoxInput>
            <input onChange={handleChange} />
            <button>#</button>
          </S.BoxInput>
        </S.BoxImage>
      </S.Wrapper>
    </S.Container>
  );
};
