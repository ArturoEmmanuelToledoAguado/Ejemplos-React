import PropTypes from 'prop-types'

export function Botton({text, name}){
    return <button onClick={function (){
        console.log('Hola Mundo')
    }}>
        {text}-{name}
    </button>
}

Botton.propTypes ={
    text: PropTypes.string.isRequired
}

Botton.defaultProps = {
    name:'Some user'
}