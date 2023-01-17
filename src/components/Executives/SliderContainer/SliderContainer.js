import {Navigation, EffectCards} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import SliderContent from "../SliderContent/SliderContent";
import {useExecutive} from "../../../context/ExecutiveContext";

function SliderContainer() {
  const {executives} = useExecutive();
  return (
    <Swiper modules={[Navigation, EffectCards]} navigation={true}
            spaceBetween={100} slidesPerView={1} effect={"cards"}>
      {executives.map((executive) => {
        return (
          <SwiperSlide key={executive._id}>
            <SliderContent data={executive}/>
          </SwiperSlide>)
      })}
    </Swiper>
  );
}
export default SliderContainer;