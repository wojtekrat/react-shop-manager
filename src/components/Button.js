import PropTypes from 'prop-types'
import styled from 'styled-components'
import {FaCheck} from 'react-icons/fa'

const StyledButton = styled.div`
    width: 150px;
    padding: 10px;
    height: 30px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(102, 89, 89);
    margin: 2px 2px;
    color: black;
  
  &:hover {
    background-color: black;
    color: white;
    cursor:pointer;
  }`
const Button = ({onClick, text, color}) => {
    return (
        <StyledButton
            onClick={onClick}>
            {text}
            <FaCheck color={color}/>
        </StyledButton>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}



export default Button
