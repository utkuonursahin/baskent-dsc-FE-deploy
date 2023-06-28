import Image from "next/image";
import AnnouncementsModal from "./AnnouncementsModal";
import ExecutivesModal from "./ExecutivesModal";

const PanelModal = ({type,mode, setIsOpened}) => {
  return (
    <div className="panel-popups">
      <h1 className="heading-1">{mode} {type}</h1>
      <Image width={50} height={50} src="/close.svg" alt="close icon" onClick={()=>{setIsOpened(prev=>!prev)}} className="close-icon"/>
      {type === "announcements" && <AnnouncementsModal type={type} mode={mode} setIsOpened={setIsOpened}/>}
      {type === "executives" && <ExecutivesModal type={type} mode={mode} setIsOpened={setIsOpened}/>}
    </div>
  );
};

export default PanelModal;
