import Head from 'next/head'
import React from 'react';
import { render } from 'react-dom';

//Vai conter os componentes da pagina
class meuApp extends React.Component {
    render(){
        return(
            <div className="corpoPagina">
            </div>
            
        );
    }
}

//Função que retorna um campo de formulário
export default function Campo(){
    let row= '';

    for(let i=0; i<10; i++){
          row +=`<div>${i}</div>`
    }
    return(
        <div>{row}</div>
    );
}

//Função que recebe o numero de notas e gera um relatório
function GerarRel(props){
    var rows = [];
    for(var i = 0; i<props.value; i++){
        rows.push(Campo());
    }
    return <div>{rows}</div>;
}

function SolicitarQtd(){
        return (
            <body>
                Quantidade de notas<br/>
                <input type="number" min="1" step="any"></input>
                <button onClick=""></button>
            </body>
        )
}

function Form() {
    const registerUser = async event => {
        //Evento para limpar o valor do formulário 
        event.target.reset()
        event.preventDefault() // não redirecionar a pagina
        const res = await fetch(
            '/api/register',
            {
                body: JSON.stringify({
                    name: event.target.name.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
        const result = await res.json()
    }

    const envs = event =>{
        alert("vc clicou no botao")
    }

    return (
        <form onSubmit={registerUser}>
            <label htmlFor="name">
                Quantidade de linhas
            </label>
            <input type="number" />
            <button type="submit" onClick={envs}>Register</button>
        </form>
    )
}