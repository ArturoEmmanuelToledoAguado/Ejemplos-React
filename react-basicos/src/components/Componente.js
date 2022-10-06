import React from "react";
//import React,{Component} from "react";

const Componente=props=> <h2>{props.msg}</h2>

/* Componente en funcion declarada
function Componente(props) {
    return <h2>{props.msg}</h2>;
}*/

/* Componente con clase
class Componente extends Component{
    render() {
        return <h2>{this.props.msg}</h2>;
    }
}*/

export default Componente;