import React from 'react'
import styled from 'styled-components'
import {Pokemon} from '../../Container/Pokemon/Pokemon'

const DivCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 15px;
    align-items: center;
    justify-content: center;
`

export const PokemonCard = ({pokemons}) => {
    
    return (
        <div>  
            <DivCard>
             {
                    pokemons?(
                        pokemons.map((thisPokemon) => {
                            return(
                               <Pokemon key={thisPokemon.name} thisPokemon={thisPokemon} />
                            )
                        }))
                        :
                        (<div>Carregando</div>)
                }
            </DivCard>
        </div>
    )
}