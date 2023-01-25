import React from "react";
import Head from "next/head";
import Header from "../../../src/components/Header/Header";
import {useState} from "react";
import axios from "axios";
import Link from "next/link";
import {useRouter} from "next/router";
import {useError} from "../../../src/context/ErrorContext";
import Error from "../../../src/components/Error/Error";
export default function ForgotPassword () {
    const [email, setEmail] = useState("");
    const {error, setError} = useError();
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        await axios({
            method: 'POST',
            url:`${process.env.NEXT_PUBLIC_API_URL}users/forgotPassword`,
            withCredentials : true,
            data: {email}
        });
        await router.push("/admin")
        }catch(error){setError(error.response.data.message)}
    };
    return (
        <div className="page-wrapper">
        <Head>
            <title>Developer Students Community -Derslerle Yetinmeyenlere!-</title>
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
                    <input type="email" placeholder="E-mail:" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button className="btn btn-cta">Şifremi yenile</button>
            </form>
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