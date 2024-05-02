import {Component} from 'react'

import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  SubHeader,
  DirectionsList,
  ColorPickerContainer,
  HexCodeHolder,
  InputHexCode,
  InputColorPicker,
  GenerateColor,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    inputHexCode1: '#8ae323',
    inputHexCode2: '#014f7b',
    topColor: '#8ae323',
    bottomColor: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
  }

  onChangeColorPicker1 = event => {
    this.setState({
      inputHexCode1: event.target.value,
    })
  }

  onChangeColorPicker2 = event => {
    this.setState({
      inputHexCode2: event.target.value,
    })
  }

  onClickGenerateColor = () => {
    const {inputHexCode1, inputHexCode2} = this.state
    this.setState({topColor: inputHexCode1, bottomColor: inputHexCode2})
  }

  changeDirection = newDirection => {
    this.setState({activeDirection: newDirection})
  }

  renderGradientDirectionItems = () => {
    const {activeDirection} = this.state
    return (
      <DirectionsList>
        {gradientDirectionsList.map(direction => (
          <GradientDirectionItem
            key={direction.directionId}
            directionDetails={direction}
            isActive={direction.value === activeDirection}
            changeDirection={this.changeDirection}
          />
        ))}
      </DirectionsList>
    )
  }

  render() {
    const {
      inputHexCode1,
      inputHexCode2,
      topColor,
      bottomColor,
      activeDirection,
    } = this.state
    return (
      <AppContainer
        activeDirection={activeDirection}
        topColor={topColor}
        bottomColor={bottomColor}
        data-testid="gradientGenerator"
      >
        <ResponsiveContainer>
          <Heading appHeader>Generate a CSS Color Gradient</Heading>
          <SubHeader>Choose Direction</SubHeader>
          {this.renderGradientDirectionItems()}
          <SubHeader>Pick the Colors</SubHeader>
          <ColorPickerContainer>
            <HexCodeHolder>
              <InputHexCode>{inputHexCode1}</InputHexCode>
              <InputColorPicker
                type="color"
                value={inputHexCode1}
                onChange={this.onChangeColorPicker1}
              />
            </HexCodeHolder>
            <HexCodeHolder>
              <InputHexCode>{inputHexCode2}</InputHexCode>
              <InputColorPicker
                type="color"
                value={inputHexCode2}
                onChange={this.onChangeColorPicker2}
              />
            </HexCodeHolder>
          </ColorPickerContainer>
          <GenerateColor type="button" onClick={this.onClickGenerateColor}>
            Generate
          </GenerateColor>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
