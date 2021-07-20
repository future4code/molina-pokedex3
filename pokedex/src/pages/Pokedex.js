import React, { useContext } from 'react'
import styled from 'styled-components'
import { Header } from '../Container/Header/Header'
import {Pokemon} from '../Container/Pokemon/Pokemon'
import { useHistory } from 'react-router-dom'
import GlobalStateContext from "../global/GlobalStateContext"



const DivContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 100px;
    justify-content: center;
`
const DivCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 15px;
    align-items: center;
    justify-content: center;
`

export const Pokedex = () => {
    const { pokedex } = useContext(GlobalStateContext);
    const history = useHistory()


    return (
        <div>
            <Header />
            <DivContainer>
                <h1>POKEDEX</h1>
            </DivContainer>
            <DivCard>
            {pokedex &&
                pokedex.map((thisPokemon) => {
                    return <Pokemon isPokedex key={thisPokemon.name} thisPokemon={thisPokemon} />;
            })}


        </DivCard>
        </div>
        
    )
}