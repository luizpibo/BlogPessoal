//Fs é a biblioteca que usamos para acessar arquivos ou diretórios no react
import fs from 'fs'

//path formata diretórios de arquivos do projeto
import path from 'path'

//Faz a busca de valores dentro de arquivos de texto. EX: jason
import matter from 'gray-matter'

//Bibliotea que faz o acesso a bancos de dados SDK
//import someDatabaseSDK from 'someDataBaseSDK'

//Cliando cliente do dataBase
//const databaseClient = someDatabaseSDK.createClient(...)

//Instaciamos uma constante para guardar o diretório dos posts
//Process.cwd() -> Objeto global que da acesso a comando do node em tempo de execução 
const postsDirectory = path.join(process.cwd(), 'posts')

//Função que pega dados ordenados de um arquivo
export function getSortedPostsData(){
    // pegar nomes dos arquivos contidos em /posts
    const fileNames = fs.readdirSync(postsDirectory)

    //Mapeando todos os posts
    const allPostsData = fileNames.map(fileName => {
        //remove o ".md" do nome dos arquivos 
        const id = fileName.replace(/\.md/, '')

        //Lendo o arquivo markdown como instring 
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')

        //Usando gray-metter para recuperar metadados dentro do arquivo
        const matterResult = matter(fileContents)

        //Combinando os dados com o ID
        return{
            id,
            //Usamos o operador ... (Spread) quando todos os elementos de um objeto ou array precisam ser incluídos em uma lista de algum tipo. 
            ...matterResult.data
        }
    })
    //Ordernando dados do posts
    return allPostsData.sort((a,b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export async function getSortedPostsApi(){
    const res = await fetch('..')
    return res.json()
}

export async function retornarDadosOrdenados(){
    return databaseClient.query('SELECT posts...')
}