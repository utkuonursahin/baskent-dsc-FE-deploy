import Image from "next/image";

function SliderContent({data}) {
  const loadImg = ({ src}) => {
    return `${process.env.NEXT_PUBLIC_API_HOST}static/images/executives/${src}`
  }
  return (
    <div className="slider-content">
      <Image width={100} height={100} src={`${data.photo}`}
             loader={loadImg} alt="Executive Photo" crossorigin="anonymous"
             className="slider-content__image"
             sizes="(max-width: 640px) 50vw,
             (max-width: 768px) 30vw,
             (max-width: 1024px) 30%,
             (max-width: 1440px) 23rem"/>
      <div>
        <h4 className="heading-4">{data.name}</h4>
        <span className="slider-content__position">{data.title}</span>
      </div>

    </div>
  );
}

export default SliderContent;