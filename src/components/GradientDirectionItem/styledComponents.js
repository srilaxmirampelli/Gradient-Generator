import styled from 'styled-components'

export const DirectionButtonItem = styled.li`
  list-style-type: none;
`

export const DirectionButton = styled.button`
  background-color: '#ededed';
  opacity: ${props => (props.isActive ? 1.0 : 0.5)};
  color: #334155;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 15px;
  border-width: 0;
  border-radius: 8px;
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 16px;
  padding-bottom: 16px;
  height: 50px;
  width: 130px;
  margin-right: 10px;
  margin-bottom: 15px;
`
