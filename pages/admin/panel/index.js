import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import Header from "../../../src/components/Header/Header";
import {useEffect, useState} from "react";
import {AdminProvider} from "../../../src/context/AdminContext";
import {useError} from "../../../src/context/ErrorContext";
import Error from "../../../src/components/Error/Error";
import PanelWrapper from "../../../src/components/PanelWrapper/PanelWrapper";
export default function Panel(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {error,setError} = useError();
  useEffect(()=>{
    (async ()=> {
      try{
        const {data:res} = await axios({
          method: 'GET',
          url:`${process.env.NEXT_PUBLIC_API_URL}users/isLoggedIn`,
          withCredentials : true,
        });
        if(res.data) setIsLoggedIn(true);
      }catch(error){setError(error.response.data.message || error.response.data)}
    })()
    //AUTOMATIC LOGOUT WHEN USER CLOSES THE TAB
    window.addEventListener('beforeunload', async (e) => {
      try{
        await axios({
          method: 'GET',
          url:`${process.env.NEXT_PUBLIC_API_URL}users/logout`,
          withCredentials : true,
        });
      }catch(error){setError(error.response.data.message || error.response.data);}
    })
    return () => {window.removeEventListener('beforeunload',null)}
  },[])
  return (
    <div className="page-wrapper">
      <Head>
        <title>Developer Students Community -Develop Together!-</title>
        <meta name="description" content="Başkent Üniversitesi Developer Students Community Websitesi" />
        <link rel="icon" href="/logo-blue.svg" />
      </Head>
      <Header/>
      <main className="main">
        <section className="panel">
          {error && <Error/>}
          {isLoggedIn ?
            <AdminProvider>
              <PanelWrapper/>
            </AdminProvider>
            : <h1 className="heading-1">
              Yönlendiriliyorsunuz...
              <span>Ulaşamıyor musunuz?
                  <Link href="/admin">Tekrar giriş yapmayı deneyin</Link>
              </span>
            </h1>
          }
        </section>
      </main>
      <footer className="footer">
        <span>
          Built by Utku Onur Sahin in the name of DSC.<br/>
          All rights reserved © 2023
        </span>
        <img src="/logo-white.svg" alt="DSC Logo" className="footer__logo"/>
      </footer>
    </div>
  )
}