import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to ${props => props.activeDirection},
    ${props => props.topColor},
    ${props => props.bottomColor})
  ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const Heading = styled.h1`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 35px;
`
export const SubHeader = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 28px;
`

export const DirectionsList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
export const InputColorPicker = styled.input`
  height: 50px;
  width: 120px;
  border-width: none;
  outline: 1px solid #ffffff79;
  border-radius: 3px;
`
export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  max-width: 500px;
`

export const HexCodeHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
`

export const GenerateColor = styled.button`
  background-color: #00c9b7;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
  color: #1e293b;
  border-width: 0;
  border-radius: 10px;
  padding: 15px;
  margin-top: 40px;
  height: 50px;
  width: 130px;
`

export const InputHexCode = styled.p`
  color: white;
  font-weight: 500;
`
