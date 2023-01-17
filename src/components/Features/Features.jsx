import {useState} from "react";
import Lottie from "lottie-react";
import bookAnimation from "../../../public/19-book-outline-edited.json";
import codeAnimation from "../../../public/34-code-outline-edited.json";
import improvingAnimation from "../../../public/160-trenging-up-outline-edited.json";
const Features = () => {
  const [active,setIsActive] = useState(0)
  const handleClick = (e) => {
    const el = e.target.closest(".btn-features")
    if(!el) return;
    setIsActive(+el.dataset.index);
  }
  return (
    <section className="features">
      <h2 className="heading-2">DSC ile</h2>
      <nav className="features__nav">
        <ul className="features__nav-list" onClick={handleClick}>
          <li>
            <button className={`btn btn-features ${active === 0 && 'active'}`} data-index={0}>
              <span>ÖĞREN</span>
            </button>
          </li>
          <li>
            <button className={`btn btn-features ${active === 1 && 'active'}`} data-index={1}>
              <span>UYGULA</span>
            </button>
          </li>
          <li>
            <button className={`btn btn-features ${active === 2 && 'active'}`} data-index={2}>
              <span>GELİŞ</span>
            </button>
          </li>
        </ul>
      </nav>
      <div className="features__box">
       <div className={`features__box-element ${active === 0 && 'active'}`}>
         <Lottie speed={0.5} animationData={bookAnimation} style={{ height: 50 }} />
         <p>
           Düzenleyeceğimiz interaktif eğitimlere katılarak bir adım öne geç ve seni hedeflerine yaklaştıracak
           yeni teknolojileri öğrenmeye başla.
         </p>
       </div>
        <div className={`features__box-element ${active === 1 && 'active'}`}>
          <Lottie speed={0.5} animationData={codeAnimation} style={{ height: 50 }} />
          <p>
            Programlamada pratiğin gücüne inanıyoruz. Topluluk içerisindeki mevcut proje takımlarına katılarak
            veya kendi proje takımını oluşturarak öğrendiklerini uygulamaya başla.
          </p>
        </div>
        <div className={`features__box-element ${active === 2 && 'active'}`}>
          <Lottie speed={0.5} animationData={improvingAnimation} style={{ height: 50 }} />
          <p>
            Öğrenmenin ve uygulamanın kaçınılmaz sonucu olarak hedeflediğin kariyer alanında ilerlemeye başla.
            İnanıyoruz ki senin gelişimin etrafındaki insanlara da ilham olacak!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
