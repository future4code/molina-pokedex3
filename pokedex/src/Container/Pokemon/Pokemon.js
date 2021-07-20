import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { goToDetailsPage } from '../../router/coordinator'
import GlobalStateContext from '../../global/GlobalStateContext';

const CardPokemon = styled.div`
    background-color:  rgba(25, 0, 51, 0.9);
    color: black;
    width: 200px;
    height: 200px;
    border-radius: 15px;
    border: 1px solid black;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 15px;
`
const DivButton = styled.div`
    display: flex;    
`
const SpecificButton = styled.button`
    border-radius: 25px;
    width: 90px;
    cursor:pointer;
    background-color: purple;
    margin: 5px;
    color: white;
    &:hover{
        font-weight: bold;
    }
`
const Img = styled.img`
    align-items: center;
    width: 100px;
    height: 120px;
    margin: 5px;
`


export const Pokemon = (props) => {
    const history = useHistory()
    
    
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(
    GlobalStateContext
    );

    const addToPokedex = () => {
    const pokeIndex = pokemons.findIndex(
        (item) => item.name === props.thisPokemon.name
    );
    const newPokemonsList = [...pokemons];
    newPokemonsList.splice(pokeIndex, 1);
    const orderedPokemons = newPokemonsList.sort((a, b) => {
        return a.id - b.id;
    });

    const newPokedexList = [...pokedex, props.thisPokemon];
    const orderedPokedex = newPokedexList.sort((a, b) => {
        return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
    };

    const removeFromPokedex = () => {
    const pokeIndex = pokedex.findIndex(
        (item) => item.name === props.thisPokemon.name
    );

    const newPokedexList = [...pokedex];
    newPokedexList.splice(pokeIndex, 1);
    const orderedPokedex = newPokedexList.sort((a, b) => {
        return a.id - b.id;
    });

    const newPokemonsList = [...pokemons, props.thisPokemon];
    const orderedPokemons = newPokemonsList.sort((a, b) => {
        return a.id - b.id;
    });

    setPokedex(orderedPokedex);
    setPokemons(orderedPokemons);
    };


    return (
        <div>  
            <CardPokemon >
                <div>
                    <Img src ={props.thisPokemon && props.thisPokemon.sprites.other.dream_world.front_default}  />
                </div>
                <DivButton>
                    <SpecificButton 
                        onClick={props.isPokedex ? removeFromPokedex : addToPokedex}
                    >
                        {props.isPokedex ? "Remover" : "Adicionar a Pokédex"}
                    </SpecificButton>
                    <SpecificButton  onClick={() => goToDetailsPage(history, props.thisPokemon.name, props.isPokedex)}>Ver Detalhes</SpecificButton>
                </DivButton>
            </CardPokemon>
        </div>
    )
}