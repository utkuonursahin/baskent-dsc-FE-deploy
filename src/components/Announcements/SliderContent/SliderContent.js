import Image from "next/image";
import Link from "next/link";
function SliderContent({data}) {
  const loadImg = ({ src}) => {
    return `${process.env.NEXT_PUBLIC_API_HOST}static/images/announcements/${src}`
  }
  return (
    <div className="slider-content">
      <h3 className="heading-3" >{data.name}</h3>
      <p className="slider-content__summary">{data.summary}</p>
      <Image width={100} height={100} src={`${data.imageCover}`}
             loader={loadImg} alt="Announcement Photo" crossorigin="anonymous"
             className="slider-content__image" sizes="
             (min-width: 640px) 80vw,
             (min-width: 1024px) 100%,
             90vw"/>
      <Link href={`/announcements/${data.id}`} passHref legacyBehavior ><button className="btn btn-announcement">Devamını oku</button></Link>
    </div>
  );
}

export default SliderContent;