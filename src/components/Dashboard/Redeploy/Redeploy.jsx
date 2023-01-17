import axios from "axios";
const Redeploy = () => {
  const handleRedeploy = async () => {
    await axios({
      method: 'POST',
      url:`${process.env.NEXT_PUBLIC_REDEPLOY_URL}`,
      withCredentials : true,
    });
  }
  return (
    <div className="redeploy">
      <h1 className="heading-1">Talimatlar</h1>
      <p>
        Bu sayfadan websitemizi redeploy ederek yaptığın son değişikliklerin canlıya geçmesini sağlayabilirsin.
        <span>*Bu işlem maliyetli ve yaklaşık 1(bir) dakika süren bir işlemdir. Lütfen redeploy etmeden önce yaptığın değişiklikleri bir kez daha kontrol et
        ve doğruluklarından emin ol.</span>
        <span>*Butona bastıktan sonra değişikliklerin uygulanması için birkaç dakika bekle. Lütfen sabırsız davranıp kısa zamanda çok defa redeploy tetikleme.</span>
      </p>
      <button className="btn btn-cta" onClick={handleRedeploy}>Redeploy</button>
    </div>
  );
};

export default Redeploy;
