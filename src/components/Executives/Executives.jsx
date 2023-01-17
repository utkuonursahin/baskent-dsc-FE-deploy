import {useExecutive} from "../../context/ExecutiveContext";
import SliderContainer from "./SliderContainer/SliderContainer";
import {useError} from "../../context/ErrorContext";
import Image from "next/image";
const Executives = () => {
  const {executives} = useExecutive();
  return (
    <section className="executives" id="executives">
      <h2 className="heading-2">Yönetim Kadromuz</h2>
      {executives ? <SliderContainer/> : <Image width={50} height={50} className="spinner" src="/spinner.svg" alt="spinner icon"/>}
    </section>
  );
};

export default Executives;
