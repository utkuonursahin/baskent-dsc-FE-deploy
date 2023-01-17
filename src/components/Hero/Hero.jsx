const Hero = ({containerRef}) => {
  return (
    <section lang="tr" className="hero" ref={containerRef} id="hero">
      <h1 className="heading-1">DERSLERLE YETİNMEYENLERE!</h1>
      <h2 className="heading-2">Hakkımızda</h2>
      <p className="hero__description">
        DSC (Developer Students Community) ya da Türkçe ismiyle Yazılım Geliştirici Öğrenciler Topluluğu,
        yazılım sektöründe kariyer hedefleyen öğrencileri bir araya getirerek, ortak projeler geliştirmek,
        eğitimler ve seminerler düzenlemek, öğrencilerin mesleki çevresini genişletmek ve yarışmalara katılmak
        amacıyla “Derslerle Yetinmeyenlere!” mottosuyla Ocak 2023&apos;de Başkent Üniversitesinde kurulmuş bir öğrenci
        topluluğudur.
      </p>
    </section>
  );
};

export default Hero;
