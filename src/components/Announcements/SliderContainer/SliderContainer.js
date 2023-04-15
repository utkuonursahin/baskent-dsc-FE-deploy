import {Pagination, EffectFade} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import SliderContent from "../SliderContent/SliderContent";
import {useAnnouncement} from "../../../context/AnnouncementContext";

function SliderContainer() {
  const {announcements, setPage} = useAnnouncement();
  //Handle Real Index Change
  const handleRIC = (swiper) => {
    if((swiper.realIndex) + 1 === announcements.length) {
        return setPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <Swiper modules={[Pagination, EffectFade]} pagination={{dynamicBullets:true}} spaceBetween={100} slidesPerView={1} effect={"fade"} onRealIndexChange={handleRIC}>
      {announcements.map((announcement,i) => {
        return (
          <SwiperSlide key={announcement.id + i}>
            <SliderContent data={announcement}/>
          </SwiperSlide>)
        })}
    </Swiper>
  );
}
export default SliderContainer;