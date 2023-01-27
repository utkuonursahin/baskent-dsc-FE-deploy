import axios from "axios";
import Head from "next/head";
import Header from "../../src/components/Header/Header";
import Image from "next/image";
import Link from "next/link";

export default function Announcement ({announcement}) {
  const loadImg = ({ src, width}) => {return `${process.env.NEXT_PUBLIC_API_HOST}static/images/announcements/${src}?w=${width}`}
  return (
    <div className="page-wrapper">
      <Head>
        <title>Bir Duyurumuz Var!</title>
        <meta name="description" content="Başkent Üniversitesi Developer Students Community Duyuru Sayfası" />
        <link rel="icon" href="/logo-blue.svg" />
      </Head>
      <Header/>
      <main className="main">
        <section className="announcement">
          <h1 className="heading-1" >{announcement.name}</h1>
          <Image width={100} height={100} src={`${announcement.imageCover}`} loader={loadImg} alt="Announcement Photo" className="slider-content__image"/>
          <p className="announcement__summary">{announcement.summary}</p>
          <p className="announcement__description">{announcement.description.replace(/\\n/g, '\n')}</p>
          <Link href={`${announcement.link}`}><button className="btn btn-cta">Katıl</button></Link>
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
export async function getStaticProps({params}) {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}announcements/${params.id}`);
  return {props: {announcement: response.data.data.data}}
}
export async function getStaticPaths() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}announcements`);
  const paths = response.data.data.data.map((announcement) => ({params: { id: announcement.id},}))
  return {paths,fallback:false}
}
