import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '@components/layout'
import Image from 'next/image'
export default function Home(){

    return (
    <Layout>
        <div>
            <Head>
                <title>Title</title>
            </Head>

            <Link href="/">
                <a>Home</a>
            </Link>
            
            <h1>Home page</h1>            
        </div>

        </Layout>
    )
}