import Image from 'next/image';
const Hero = ({containerRef}) => {
  return (
    <section lang="tr" className="hero" ref={containerRef} id="hero">
      <Image src="/circuit-board.svg" alt="bg vector" width={100} height={100} className="background-vectors background-vectors--top"/>
      <h1 className="heading-1 heading-slogan">Develop Together</h1>
      <h2 className="heading-2">Hakkımızda</h2>
      <p className="hero__description" lang="tr">
        DSC (Developer Students Community) ya da Türkçe ismiyle Yazılım Geliştirici Öğrenciler Topluluğu,
        yazılım sektöründe kariyer hedefleyen öğrencileri bir araya getirerek, ortak projeler geliştirmek,
        eğitimler ve seminerler düzenlemek, öğrencilerin mesleki çevresini genişletmek ve yarışmalara katılmak
        amacıyla “Develop Together!” mottosuyla Ocak 2023&apos;de Başkent Üniversitesinde kurulmuş bir öğrenci
        topluluğudur.
      </p>
    </section>
  );
};

export default Hero;
