import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '@components/layout'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Disqus from '@components/disqus'
import Image from 'next/image'
import openpic from '../../public/images/opensource.jpg'
export default function Opensource(){

    return (
        <div>
            <Navbar />

            <Head>
                <title>Open Source</title>
            </Head>

            <Link href="/">
                <a>Go Back</a>
            </Link>

            <div className='container-fluid'>
                <Image src={openpic} />
            </div>
            
            <div className='container p-3'>
                <div className='card'>
                    <div className='card-body text-center'>
                    <p>Open source software is a common term used these days, in simple terms,</p>
                    <p> This is any software that is free and accessible to everyone.</p>
                    <p>This means anyone can download the code and modify it to fit your needs.</p>
                    <p>Over the last few years, open source softwares have grown from just personal projects </p>
                    <p>to enterprise softwares used as business applications.</p> 

                    <p>In my experience,open source softwares in the near future will not just be a choice,</p>
                    <p>but a necessity since no software team can predict all user requirements.</p>
                    <p>To check some of the open source softwares, i have personally used are:</p>
                    
                    <ul>
                        <li>
                            <Link href="https://www.zabbix.com/">
                                <a target="_blank"><h5>Zabbix(for monitoring server processes and services)</h5></a>
                            </Link>
                        </li>
                        <br />
                        <li>
                            <Link href="https://otrs.com/">
                                <a target="_blank"><h5>OTRS(for handling customer support tickets)</h5></a>
                            </Link>
                        </li>
                        <br />
                        <li>
                            <Link href="https://www.djangoproject.com/">
                                <a target="_blank"><h5>Django Framework(Python web Framework)</h5></a>
                            </Link>
                        </li>

                    </ul>

                    <p></p>
                    <Link href='/'>
                    <a className='btn btn-primary'>Go Home</a>
                    </Link>

                    <br /><br /><br />
                    <hr />
                    <Disqus />
                    
                    </div>
                </div>
            </div>

            <Footer />
        </div>
       
    )
}