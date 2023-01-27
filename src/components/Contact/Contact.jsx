import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading-2">İletişim</h2>
      <p>Sosyal medya hesaplarımızı takip edebilir, aşağıdaki buton ile direkt olarak bize ulaşabilirsin!</p>
      <div className="contact__socials">
        <Link href="https://www.linkedin.com/company/developer-students-community/"><Image width={40} height={40} src="/linkedin.svg" alt="linkedin icon"/></Link>
        <Link href="https://www.instagram.com/baskentdsc/"><Image width={40} height={40} src="/instagram.svg" alt="instagram icon"/></Link>
        <Link href="https://chat.whatsapp.com/FDtofP4pVxgBmbiaCw6BXr"><Image width={40} height={40} src="/whatsapp.svg" alt="whatsapp icon"/></Link>
        <Link href="https://discord.gg/wBQnWdU"><Image width={40} height={40} src="/discord.svg" alt="discord icon"/></Link>
      </div>
      <button className="btn btn-cta"><Link href="https://docs.google.com/forms/d/e/1FAIpQLSf_oiFNow0vfISCxanxsqQeaQdzcLqihYpYT9CdfqoQyekXXg/viewform?usp=sf_link" target="_blank">Bİze Ulaş</Link></button>
    </section>
  );
};

export default Contact;
