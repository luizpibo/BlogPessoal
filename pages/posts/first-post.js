import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Relatorio from '../components/corpoRelatrio';

export default function FirstPost(){
    return (
        <Layout>
        <Head>
            <title> Fist Post</title>
        </Head>
            <Relatorio
                quantidadeLinhas={10}
            >

            </Relatorio>
        </Layout>
    )
}