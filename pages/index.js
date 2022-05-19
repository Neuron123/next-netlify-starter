import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import mypic from '../public/images/profile.jpg'
import wakapic from '../public/images/waka.jpg'
import keycloakpic from '../public/images/keycloak.jpg'
import openpic from '../public/images/opensource.jpg'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container-fluid">
      
      <h1 className='title'>
        <Navbar />
      </h1>

      <main>
        <Header title="Welcome" />
        <p className="description">
          Recent news in, <code>Programming world</code>
        </p>

        {/* Cards on home page */}
        <div className='container-fluid'>
          <div className='row'>

            <div className='col-sm-12 col-lg-4'>
                <div class="card">
                <Image src={openpic} class="card-img-top" alt="Open source" />

                <div class="card-body">
                  <h5 class="card-title text-primary">What is Open Source</h5>
                  <p class="card-text">Open source software is a common term used these days, in simple terms, this is any software that is free and ...</p>
                  
                  <Link href="/posts/opensource/">
                    <a class="btn btn-primary">Open Source Software</a>
                  </Link>
                  
                </div>
              </div>
            </div>

            <div className='col-sm-12 col-lg-4'>
                <div class="card">
                <Image src={keycloakpic} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title text-primary">Django Keycloak (SSO)</h5>
                  <p class="card-text">Single Sign On(SSO) with Keycloak in django</p>

                  <Link href="/posts/djangokeycloak/">
                    <a class="btn btn-primary">Django-Keycloak</a>
                  </Link>
                  
                </div>
              </div>
            </div>

            <div className='col-sm-12 col-lg-4'>
                <div class="card">
                <Image src={wakapic} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title text-primary">Wakatime</h5>
                  <p class="card-text">Wakatime VsCode extension to measure programming analytics</p>

                  <Link href="/posts/wakatime/">
                  <a class="btn btn-primary">Wakatime</a>
                  </Link>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
        {/* End of Cards on home page */}
      </main>

      <Footer />
    </div>
  )
}
