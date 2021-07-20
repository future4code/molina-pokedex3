import React from 'react'
import styled from 'styled-components'
import logo from '../../img/logo.png'
import { useHistory, Link } from 'react-router-dom'
import { goToPokedex } from '../../router/coordinator'


const Headers = styled.header`
  background-color: rgba(25, 0, 51, 0.8);
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 1fr 100px 100px;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

const LogoContainer = styled.div`
  grid-column-start: 2;
`

const ButtonContainer = styled.div`
  grid-column-start: 4;
`
const Button = styled.button`
  background-color: purple;
  color: white;
  border: none;
  border-radius: 15px;
`

export const Header = () => {
    const history = useHistory()

    

    return (
        <div>  
        <Headers>
            <HeaderContainer>
                <LogoContainer>
                  <Link to="/"><img src={logo} width='100%' alt="pokemon"/></Link>      
                </LogoContainer>
                <ButtonContainer>
                    <Button onClick={() => goToPokedex(history)}>Pokedex</Button>
                </ButtonContainer>
            </HeaderContainer>
        </Headers>
        </div>
    )
}