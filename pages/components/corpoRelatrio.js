import Campo from '../posts/relatorio';

export default function Relatorio({quantidadeLinhas}){
    let rows = [];
    for(var i=0; i<quantidadeLinhas; i++ ){
        rows.push(Campo());
    }
    return (
        <div>
               {rows}
        </div>
    )
}