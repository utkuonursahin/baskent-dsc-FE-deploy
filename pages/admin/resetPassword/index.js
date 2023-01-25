import axios from "axios";
import Link from "next/link";
import Header from "../../../src/components/Header/Header";
import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import Error from "../../../src/components/Error/Error";
import {useError} from "../../../src/context/ErrorContext";
export default function ResetPassword () {
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const {error, setError} = useError();
    const router = useRouter();
    let token = useRef();
    useEffect(()=>{
        if(router.isReady) token.current = router.query["token"]
    },[router.isReady, router.query])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data:res} = await axios({
                method: 'PATCH',
                url:`${process.env.NEXT_PUBLIC_API_URL}users/resetPassword/${token.current}`,
                withCredentials : true,
                data: {password, passwordConfirm}
            });
            if(res.data) await router.push("/admin");
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
                        <label htmlFor="password">Yeni şifreniz:</label>
                        <input type="password" placeholder="Yeni şifreniz:" id="password" onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div className="admin__input-box">
                        <label htmlFor="passwordConfirm">Yeni şifreniz tekrar:</label>
                        <input type="password" placeholder="Yeni şifreniz tekrar:" id="passwordConfirm" onChange={e=>setPasswordConfirm(e.target.value)}/>
                    </div>
                    <button className="btn btn-cta">Şifremi yenile</button>
                </form>
            </section>
        </main>
        <footer className="footer">
            <span>
            Built by <Link href="https://www.linkedin.com/in/utku-onur-sahin/">Utku Onur Şahin</Link> in the name of DSC.<br/>
            All rights reserved © 2023
            </span>
            <img src="/logo-white.svg" alt="DSC Logo" className="footer__logo"/>
        </footer>
    </div>
    )
}