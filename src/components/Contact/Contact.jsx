import React from 'react';
import Link from "next/link";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading-2">İletişim</h2>
      <p>Sosyal medya hesaplarımızı takip edebilir, aşağıdaki buton ile direkt olarak bize ulaşabilirsin!</p>
      <div className="contact__socials">
        <img src="/linkedin.svg" alt="linkedin icon"/>
        <img src="/instagram.svg" alt="instagram icon"/>
        <img src="/twitter.svg" alt="twitter icon"/>
        <img src="/whatsapp.svg" alt="whatsapp icon"/>
        <img src="/discord.svg" alt="discord icon"/>
      </div>
      <button className="btn btn-cta"><Link href="https://docs.google.com/forms/d/e/1FAIpQLSf_oiFNow0vfISCxanxsqQeaQdzcLqihYpYT9CdfqoQyekXXg/viewform?usp=sf_link" target="_blank">Bize Ulaş</Link></button>
    </section>
  );
};

export default Contact;
