import {useAdmin} from "../../../context/AdminContext";
import Image from "next/image";
import AnnouncementPopup from "./AnnouncementPopup/AnnouncementPopup";
import ExecutivePopup from "./ExecutivePopup/ExecutivePopup";

const DashboardPopup = ({mode,isOpened, setIsOpened}) => {
  const {type} = useAdmin();
  return (
    <div className={`dashboard__content--popup ${isOpened && "active"}`}>
      <h1 className="heading-1">{mode}  {type}</h1>
      <Image width={50} height={50} src="/close.svg" alt="close icon" onClick={()=>{setIsOpened(prev=>!prev)}} className="close-icon"/>
      {type === "announcements" && <AnnouncementPopup mode={mode} setIsOpened={setIsOpened}/>}
      {type === "executives" && <ExecutivePopup mode={mode} setIsOpened={setIsOpened}/>}
    </div>
  );
};

export default DashboardPopup;
