import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '@components/layout'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Disqus from '@components/disqus'
import Image from 'next/image'
import keycloakpic from '../../public/images/keycloak.jpg'

export default function Djangokeycloak(){
    return (
        <div>
            <Navbar />

            <Head>
                <title>Open Source</title>
            </Head>

            <Link href="/">
                <a>Go Back</a>
            </Link>

            <div className='container-fluid text-center'>
                <Image src={keycloakpic} />
            </div>
            
            <div className='container p-3'>
                <div className='card'>
                    <div className='card-body text-center'>
                    <p>Single Sign On(SSO), is a new way of authenticating users across different systems.</p>
                    <p> The user end will not be able to identify different systems s/he is interacting with.</p>
                    <p>Keycloak is one of the systems which can be used to achieve SSO.</p>
                    <p>In this article, i'm going to discuss how to integrate Keycloak with django. </p>

                    <h5>Step 1</h5>
                    <h5><u>Prerequisite</u></h5>
                    <p> You must first install keycloak on a server : 
                        <Link href="https://www.keycloak.org/docs/latest/server_installation/#installing-the-software">
                            <a target="_blank">Installation instructions</a>
                        </Link>
                     </p>

                    <h5>Step 2</h5>
                    <p>Install the following library , using this command</p>
                    <b>pip install python-keycloak</b>

                    <br />
                    <h5>Step 3</h5>
                    <p>In your python code add the following code:</p>
                    
                    <code>
                    from keycloak import KeycloakOpenID <br />
                    # Create keycloak object< br />
                    keycloak_openid = KeycloakOpenID(server_url="http://localhost:8080/auth/", <br />
                    client_id="example_client", <br />
                    realm_name="example_realm", <br />
                    client_secret_key="secret")
                    </code>

                    <br />
                    <h5>Step 4</h5>
                    <p>Get the access token</p>
                    <code>
                    # Get Token <br />
                    token = keycloak_openid.token("user", "password")
                    </code>
                    <br />
                    <note>The user and password is the one for logging into the system</note>

                    <br />

                    <h5>Step 5</h5>
                    <code>
                    # Get Userinfo <br />
                    userinfo = keycloak_openid.userinfo(token['access_token'])
                    </code>

                    <p>For a detailed information:
                        <Link href="https://pypi.org/project/python-keycloak/">
                            <a target="_blank">https://pypi.org/project/python-keycloak/</a>
                        </Link>
                    </p>

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