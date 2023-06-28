import PanelMenu from "./PanelMenu/PanelMenu";
import {useState} from "react";
import PanelViews from "./PanelViews/PanelViews";
import PanelButtons from "./PanelButtons/PanelButtons";

const PanelContainer = () => {
  const [type,setType] = useState("dsc")
  return (
    <section className="panel-wrapper">
      <PanelMenu type={type} setType={setType}/>
      {type ? <PanelViews type={type}/> : null}
      {type ? <PanelButtons type={type}/> : null}
    </section>
  );
};

export default PanelContainer;
