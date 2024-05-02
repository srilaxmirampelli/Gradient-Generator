import {DirectionButtonItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeDirection, isActive} = props
  const {value, displayText} = directionDetails

  return (
    <DirectionButtonItem>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={() => changeDirection(value)}
      >
        {displayText}
      </DirectionButton>
    </DirectionButtonItem>
  )
}

export default GradientDirectionItem
