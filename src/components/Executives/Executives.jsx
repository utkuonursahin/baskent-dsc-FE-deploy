import {useExecutive} from "../../context/ExecutiveContext";
import SliderContainer from "./SliderContainer/SliderContainer";
import Spinner from "../Spinner/Spinner";
const Executives = () => {
  const {executives} = useExecutive();
  return (
    <section className="executives" id="executives">
      <h2 className="heading-2">Yönetim Kadromuz</h2>
      {executives ? <SliderContainer/> : <Spinner/>}
    </section>
  );
};

export default Executives;
