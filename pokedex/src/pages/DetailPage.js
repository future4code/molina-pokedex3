import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header } from '../Container/Header/Header'
import imagemPokemon from '../img/pokemon.png'
import { useHistory, useParams } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";
import axios from "axios";


const DivContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 60px;
    justify-content: center;
`
const DivCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 15px;
    align-items: center;
    justify-content: center;
    
`

const CardPokemon = styled.div`
    background-color:  rgba(25, 0, 51, 0.9);
    color: white;
    border-radius: 15px;
    display: grid;
    align-items: center;
    padding: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    @media(max-width: 600px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    grid-template-rows: 250px 1fr 1fr;
  }
`

const DivImages = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin: 15px;
  padding:15px;
  @media(max-width: 600px) {
    margin:0px;
    padding: 0px;
  }
`

const DescriptionP = styled.p`
    padding: 15px;
`

const Title =  styled.h2`
    color: #f9dd00;
`

const CardDescription = styled.div`
    background-color: #6B0091;
    border-radius: 15px;
    margin: 15px;
    padding:15px;
`

const Img = styled.img`
  @media(max-width: 600px) {
    width: 90%;
    height: 300px;
  }
`

export const DetailPage = () => {
    const { name, telaPokedex } = useParams();
    const history = useHistory();
    const { pokemons, pokedex } = useContext(GlobalStateContext);
    const [selectedPokemon, setSelectedPokemon] = useState({});
  
    useEffect(() => {
        let current = [];
        if (telaPokedex) {
          current = pokedex.find((item) => {
            return item.name === name;
          });
        } else {
          current = pokemons.find((item) => {
            return item.name === name;
          });
        }
    
        if (!current) {
          axios
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => setSelectedPokemon(res.data))
            .catch((err) => console.log(err.response.message));
        } else {
          setSelectedPokemon(current);
        }
      }, []); 
      console.log(selectedPokemon)

    return (
        <div>
          <Header />
          {selectedPokemon && selectedPokemon.sprites && (
          <>
          <DivContainer>
              <h1>{selectedPokemon.name.toUpperCase()}</h1>
          </DivContainer>
          <DivCard>
            <CardPokemon>
              <DivImages>
                <Img src={selectedPokemon.sprites.other.dream_world.front_default} />
              </DivImages>
              <CardDescription>
                <Title>Status</Title>
                {selectedPokemon &&
                  selectedPokemon.stats.map((stat) => {
                    return (
                      <DescriptionP key={stat.stat.name}>
                        <strong>{stat.stat.name}: </strong>
                        {stat.base_stat}
                      </DescriptionP>
                    );
                  })}
              </CardDescription>
              <CardDescription>
                <Title>Tipo</Title>
                {selectedPokemon &&
                  selectedPokemon.types.map((type) => {
                    return <DescriptionP key={type.type.name}>{type.type.name}</DescriptionP>;
                  })}
                <Title>Principais ataques</Title>
                {selectedPokemon &&
                  selectedPokemon.moves.map((move, index) => {
                    return (
                      index < 5 && <DescriptionP key={move.move.name}>{move.move.name}</DescriptionP>
                    );
                  })}
              </CardDescription>
            </CardPokemon>
          </DivCard>
          </>
        )}
        </div>
        
    )
}