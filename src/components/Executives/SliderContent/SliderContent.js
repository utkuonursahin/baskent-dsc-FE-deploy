import Image from "next/image";

function SliderContent({data}) {
  const loadImg = ({ src}) => {
    return `${process.env.NEXT_PUBLIC_API_HOST}static/images/executives/${src}`
  }
  return (
    <div className="slider-content">
      <Image width={100} height={100} src={`${data.photo}`} loader={loadImg} alt="Announcement Photo" className="slider-content__image"/>
      <div>
        <h4 className="heading-4">{data.name}</h4>
        <span className="slider-content__position">{data.title}</span>
      </div>

    </div>
  );
}

export default SliderContent;