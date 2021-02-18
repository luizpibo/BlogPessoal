import Head from 'next/head'
import React from 'react';
//import utilStyles from '../styles/relatorios.css'

/*
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmite = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        window.alert('Um nome foi enviado: '+ this.state.value);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}
*/
function Campo(){
    return(
        <tr>
            <td>
                Data<br/>
                <input type="date"></input>
            </td>
            <td>
                Descrição<br/>
                <input type="text"></input>
            </td>
            <td>
                Valor<br/>
                <input type="number" min="1" step="any" />
            </td>
            <td>
                NFC<br/>
                <input type="number" />
            </td> 
        </tr>
    );
}
function gerarRel(){
    var rows = [];
    for(var i = 0; i<10; i++){
        rows.push(Campo());
    }
    return <body>{rows}</body>;
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
export default gerarRel;