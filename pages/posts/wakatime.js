import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '@components/layout'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Image from 'next/image'
import wakapic from '../../public/images/waka.jpg'

export default function Wakatime(){

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
                <Image src={wakapic} />
            </div>
            
            <div className='container p-3'>
                <div className='card'>
                    <div className='card-body text-center'>
                    <p>Wakatime is a VsCode Extension that is used for tracking coding activity.</p>
                    <p> For those who don't know VsCode, it is an IDE(Integrated Development Environemt).</p>
                    <p>With Wakatime you can know how much time you spent coding.</p>
                    <p>It is equopped with different filters, such as : date range customizer, </p>
                    <p>time spent on different projects, time spent on different languages,</p> 

                    <p>and much more on those who are willing to subscribe to a monthly plan.</p>
                    <p></p>
                    <p>With the Leaderboard feature, you can actually view a list of how many hours</p>
                    <p>other developers have spent over the week.</p>

                    <p>For more info, visit:</p>
                    <Link href="https://wakatime.com/">
                         <a target="_blank">Wakatime Website</a>
                    </Link>
                    
                    <p></p>
                    <Link href='/'>
                    <a className='btn btn-primary'>Go Home</a>
                    </Link>
                    
                    </div>
                </div>
            </div>

            <Footer />
        </div>
       
    )
}