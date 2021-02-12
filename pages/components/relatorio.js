/*
//"SWR" deriva de stale-while-revalidate, é uma estratégia para primeiro retornar os dados do cache
//os componentes eceberão um flux de atualização de dados constante e automaticamente
import React from 'react'
import useSWR from 'swr'
import reactTable from 'react-table'
//Função de busca
function Profile() {
    //Enviamos uma key string e uma função de busca
    //Key é um identificador exclusivo dos dados (normalmente o URL da API)
    // e será passado para fetcher, o fetcher pode ser qualquer função assíncona que retorna os dados
    //O gancho retorna 2 valores, data, error, com base no status da solicitação
    const {data, error} = useSWR('/api/user', fetch)

    //Se houver algum erro, retornar div com aviso de erro
    if (error) return <div> failed to load</div>

    //Carregando os dados
    if (!data) return <div> loadding...</div>
    
    //retorna o nome do usuário
    return <div> hello {data.name}!</div>
}

export default class Form extends React.Component {
    render () {
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
              Name:
              <br />
                <input type='text' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
              </label>
            </div>

            <div>
              <label>
              Review:
              <br />
                <textarea rows='4' cols='50' type='text' value={this.state.review} onChange={this.handleChange.bind(this, 'review')} />
              </label>
            </div>

            <div>
              <label>
              Rating:
              <br />
                <input type='text' value={this.state.rating} onChange={this.handleChange.bind(this, 'rating')} />
              </label>
            </div>
            <input type='submit' value='Submit' />
          </form>
        )
    }
}
*/