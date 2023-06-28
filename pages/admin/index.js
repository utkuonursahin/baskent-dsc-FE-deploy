import Head from "next/head";
import {useRouter} from "next/router";
import Header from "../../src/components/Header/Header";
import {useState} from "react";
import axios from "axios";
import Link from "next/link";
import {useError} from "../../src/context/ErrorContext";
import Error from "../../src/components/Error/Error";
export default function Admin () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {error,setError} = useError();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const {data:res} = await axios({
        method: 'POST',
        url:`${process.env.NEXT_PUBLIC_API_URL}users/login`,
        withCredentials : true,
        data: {email, password}
      });
      if(res.data) await router.push("/admin/panel");
    }catch(error){setError(error.response.data.message)}
  };
  return (
    <div className="page-wrapper">
      <Head>
        <title>Developer Students Community -Develop Together!-</title>
        <meta name="description" content="Başkent Üniversitesi Developer Students Community Websitesi" />
        <link rel="icon" href="/logo-blue.svg" />
      </Head>
      <Header/>
      <main className="main">
        {error && <Error/>}
        <section className="admin">
          <h1 className="heading-1">
            Baskent University Developer Students Community Website Admin Panel
            <span>If you came here accidentally, please go back to homepage</span>
          </h1>
          <form action="#" className="admin__input-wrapper" onSubmit={handleSubmit}>
            <div className="admin__input-box">
              <label htmlFor="email">E-mail adresiniz:</label>
              <input type="email" placeholder="E-mail:" id="email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="admin__input-box">
              <label htmlFor="password">Şifreniz: </label>
              <input type="password" placeholder="Şifre:" id="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button className="btn btn-cta">Giriş Yap</button>
            <span className="forgot-password"><Link href="/admin/forgotPassword">Şifreni mi unuttun?</Link></span>
          </form>
          <div className="admin__to-signup">
            <h2 className="heading-2">Aramıza yeni mi katıldın?</h2>
            <button className="btn btn-cta">Kayıt ol</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <span>
          Built by <Link href="https://www.linkedin.com/in/utku-onur-sahin/">Utku Onur Sahin</Link> in the name of DSC.<br/>
          All rights reserved © 2023
        </span>
        <img src="/logo-white.svg" alt="DSC Logo" className="footer__logo"/>
      </footer>
    </div>
  )
}