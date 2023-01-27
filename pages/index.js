import axios from "axios";
import Head from 'next/head'
import Link from "next/link";
import Header from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";
import Features from "../src/components/Features/Features";
import Announcements from "../src/components/Announcements/Announcements";
import {AnnouncementProvider} from "../src/context/AnnouncementContext";
import Executives from "../src/components/Executives/Executives";
import {ExecutiveProvider} from "../src/context/ExecutiveContext";
import Statistics from "../src/components/Statistics/Statistics";
import FAQ from "../src/components/FAQ/FAQ";
import Contact from "../src/components/Contact/Contact";
import useObserver from "../src/hooks/useObserver";
import Error from "../src/components/Error/Error";
import {useError} from "../src/context/ErrorContext";
export default function Home({initAnnouncements, initExecutives}) {
  const [elementRef,containerRef] = useObserver({root:null, rootMargin:"-150px", threshold:0},'sticky');
  const {error} = useError();
  return (
    <div className="page-wrapper">
      <Head>
        <title>Developer Students Community -Develop Together!-</title>
        <meta name="description" content="Başkent Üniversitesi Developer Students Community Websitesi" />
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/logo-blue.svg"/>
      </Head>
      <Header elementRef={elementRef}/>
      <main className="main">
        {error && <Error/>}
        <Hero containerRef={containerRef}/>
        <Features/>
        <AnnouncementProvider initAnnouncements={initAnnouncements}>
          <Announcements/>
        </AnnouncementProvider>
        <ExecutiveProvider initExecutives={initExecutives}>
          <Executives/>
        </ExecutiveProvider>
        <Statistics/>
        <FAQ/>
        <Contact/>
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

export async function getStaticProps() {
  try{
    const res = await Promise.all([
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}announcements?page=1&limit=3`),
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}executives?sort=createdAt`)
    ]);
    const initAnnouncements = res[0]?.data.data.data
    const initExecutives = res[1]?.data.data.data
    return {
      props: {
        initAnnouncements,
        initExecutives
      }
    }
  } catch {return {props:{}}}
}