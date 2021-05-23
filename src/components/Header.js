import PropTypes from 'prop-types'
import styled from 'styled-components'

const Head = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: 10px;
`

const Header = ({title}) => {
    return (
        <Head>
            {title}  
        </Head>

    )
}

Header.defaultProps = {
    title: 'SHOP MANAGER',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
