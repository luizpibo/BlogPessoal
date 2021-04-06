import Head from 'next/head'
import styled from 'styled-components'

const PageStyle = styled.div`
    background-color: aqua;
    
`;


export default function C4(){
    return (
        <>
            <Head>
                <title> C4 Counter Strike Global Ofenssive </title>
            </Head>
            <header>
                <div id="header">
                    <div id="componente">

                    </div>
                </div>
            </header>
            <body>
                <div class="container">
                    <h1 class="page-title">
                        C4 COUNTER-STRIKE GLOBAL OFENSSIVE
                    </h1>  
                    <p class="page-subtitle">
                        🎇 TENTE DEFUSAR A C4 🎇
                    </p>
                    <div class="containerPass">
                        <div class="passwordField" id="password">
                            <table>
                                <tr id="tabelaDigitos">

                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div id="buttonField">
                    <div>
                        <button class="botoes" id="botaoArma" onClick={() =>{
                            var numerosSecretos = [];
                            tabelaRow = document.getElementById("tabelaDigitos");
                            var colunas = '';
                            for(var i = 0; i<10; i++){
                                colunas += "<td id="+'coluna-'+i+"></td>"
                                numerosSecretos.push(gerarNumeroInteiroAleatoiroUnit());
                            }
                            tabelaRow.innerHTML = colunas;
                        }}>
                            Armar
                        </button>
                        <button class="botoes" id="botaoDesarmar" onClick={classC4.desarmar}>
                            Desarmar
                        </button>
                    </div>
                </div>
            </body>
        </>
    )
}

const classC4 = {
    numerosSecretos: [],
    chave: false,
    
    armar: function(){
        tabelaRow = document.getElementById("tabelaDigitos");
        var colunas = '';
        for(var i = 0; i<10; i++){
            colunas += "<td id="+'coluna-'+i+"></td>"
            this.numerosSecretos.push(gerarNumeroInteiroAleatoiroUnit());
        }
        tabelaRow.innerHTML = colunas;
    },
    desarmar: function(){
        var senhaChute = [];
        
        for(var i = 0; i<this.numerosSecretos.length; i++){
            senhaChute.push(0);
            if(compararInteiros(this.numerosSecretos[i],senhaChute[i])){
                alteraValorColuna(senhaChute[i],document.getElementById("coluna-"+i));
            }else{
                while(!compararInteiros(this.numerosSecretos[i],senhaChute[i])){
                senhaChute[i] += 1;
                console.log('chute - '+senhaChute[i]);
                console.log("Gravando numero - "+senhaChute[i]+" no campo -"+i);
                alteraValorColuna(senhaChute[i],document.getElementById("coluna-"+i));
                }
            }
            console.log('senha na posicao '+i);
            console.log("vc conseguiu desarmar a bomba");
            console.log("Senha da bomba: "+ senhaChute);
        }
    }
}

function alteraValorColuna(valor, local){
    local.innerHTML = valor;
}

function gerarNumeroInteiroAleatoiroUnit(){
    return Math.floor(Math.random()*(9 - 0));
}

function compararInteiros(a,b){
    return a==b;
}
