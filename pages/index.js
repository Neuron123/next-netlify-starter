import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import mypic from '../public/images/profile.jpg'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Learn</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
      </Head>

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
                <Image src={mypic} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className='col-sm-12 col-lg-4'>
                <div class="card">
                <Image src={mypic} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>

            <div className='col-sm-12 col-lg-4'>
                <div class="card">
                <Image src={mypic} class="card-img-top" alt="..." />

                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
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
