import React from 'react';
import utilStyles from '../styles/utils.module.css'

/*
// Criando a Classe square herdando um React component 
class Square extends React.Component {
    // o construtor é definido tendo propriedades extenas e as atribuindo a classe pai 
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }
    // Class render responssável por renderizar e exportar os componentes a serem retornados 
    // Retorna um botão que modifica seu status de acordo com o click
    render() {
        return ( 
            <button 
                // mudamos a className para square para podermos modificar externamente os valores contidos nesse botão 
                className="square"
                // atribuimos uma arrow function para modificar o stado do botão apos o click
                // Exibe o valor de stado no botão apos o click 
                // Quando chamamos o setState em um componente, o React atualiza automaticamente os componentes filho dentro dele 
                onClick={() => this.props.onClick()}
            >  
                {this.props.value} 
            </button>
        );
    }
}
*/

function Square(props) {
    return (
        <button className={utilStyles.square} onClick={props.onClick}>
            {props.value}
        </button>
    )
}
//Cliando classe do tabuleiro
class Board extends React.Component {
//Metodo renderiza um quadrado e passa o valor de prop chamando value para o quadrado
/*
constructor(props) {
    super(props);
    this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
    };
}
*/

//Função responsável por passar duas props do tabuleiro para o quadrado
    renderSquare(i) {
        return (
            <Square 
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render(){
        /*
        //const status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        }else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        */
        return (
            <div>
                <div className={utilStyles.boardRow}>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>

                <div className={utilStyles.boardRow}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>

                <div className={utilStyles.boardRow}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                }
            ],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    // Função que é executada quando clicamos em algum quadrado
    // Usamos o slice() para criar uma cópia do array de quadrados
    // Agora os Squares são Componentes controlados (controlled components) onde o board terá controle total sobre eles
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }
    
    render() {
        // Historico de jogadas 
        const history = this.state.history;
        // Quadrado que foi clicado
        const current = history[this.state.stepNumber];
        // Armazena se houve ganhador na jogada
        const winner = calculateWinner(current.squares);

        /** mapa de jogadas
         * retorna uma lista ordenada com botões com as posições jogadas
         */
        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner){
            status = 'Ganhador: ' + winner;
        }else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className={utilStyles.game}>
                <div className="game-board"> 
                    <Board 
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>

                <div className={utilStyles.gameInfo}>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>        
        );
    }
}

function calculateWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

//ReactDOM.render(<Game />, document.getElementById("root"));
export default Game;