import React from 'react';
import Link from "next/link";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading-2">İletişim</h2>
      <p>Sosyal medya hesaplarımızı takip edebilir, aşağıdaki buton ile direkt olarak bize ulaşabilirsin!</p>
      <div className="contact__socials">
        <img src="https://www.linkedin.com/company/developer-students-community/" alt="linkedin icon"/>
        <img src="https://www.instagram.com/baskentdsc/" alt="instagram icon"/>
        <img src="https://chat.whatsapp.com/FDtofP4pVxgBmbiaCw6BXr" alt="whatsapp icon"/>
        <img src="https://discord.gg/wBQnWdUw" alt="discord icon"/>
      </div>
      <button className="btn btn-cta"><Link href="https://docs.google.com/forms/d/e/1FAIpQLSf_oiFNow0vfISCxanxsqQeaQdzcLqihYpYT9CdfqoQyekXXg/viewform?usp=sf_link" target="_blank">Bİze Ulaş</Link></button>
    </section>
  );
};

export default Contact;
