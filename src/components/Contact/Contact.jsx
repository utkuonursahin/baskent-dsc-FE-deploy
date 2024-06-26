import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Image src="/hexagon.svg" alt="bg vector" width={100} height={100} className="background-vectors background-vectors--bottom"/>
      <h2 className="heading-2">İletişim</h2>
      <p>Sosyal medya hesaplarımızı takip edebilir, aşağıdaki buton ile direkt olarak bize ulaşabilirsin!</p>
      <div className="contact__socials">
        <Link href="https://www.linkedin.com/company/developer-students-community/"><img src="/linkedin.svg" alt="linkedin icon"/></Link>
        <Link href="https://www.instagram.com/baskentdsc/"><img src="/instagram.svg" alt="instagram icon"/></Link>
        <Link href="https://chat.whatsapp.com/FDtofP4pVxgBmbiaCw6BXr"><img src="/whatsapp.svg" alt="whatsapp icon"/></Link>
        <Link href="https://discord.gg/dR5NRVRmf3"><img src="/discord.svg" alt="discord icon"/></Link>
      </div>
      <button className="btn btn-cta"><Link href="https://docs.google.com/forms/d/e/1FAIpQLSf_oiFNow0vfISCxanxsqQeaQdzcLqihYpYT9CdfqoQyekXXg/viewform?usp=sf_link" target="_blank">Bİze Ulaş</Link></button>
    </section>
  );
};

export default Contact;
