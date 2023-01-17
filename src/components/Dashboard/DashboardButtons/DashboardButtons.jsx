import {useState} from "react";
import DashboardPopup from "../DashboardPopup/DashboardPopup";
import Image from "next/image";
import {useAdmin} from "../../../context/AdminContext";

function DashboardButtons() {
  const [isOpened, setIsOpened] = useState(false);
  const [mode, setMode] = useState("");
  const {setPage} = useAdmin();
  const handleClick = (e) =>{
    const el = e.target.closest(".btn-content");
    if(!el) return
    setIsOpened(true);
    el.dataset.action && setMode(el.dataset.action)
  }
  return (
    <nav className="dashboard__content--buttons" onClick={handleClick}>
      <button className="btn btn-page" onClick={()=>{setPage(prev=>prev-1)}}><Image width={50} height={50} src="/chevrons-left.svg" alt="icon-left"/></button>
      <button className="btn btn-create btn-content" data-action="create">Create</button>
      <button className="btn btn-update btn-content" data-action="update">Update</button>
      <button className="btn btn-delete btn-content" data-action="delete">Delete</button>
      <button className="btn btn-page" onClick={()=>{setPage(prev=>prev+1)}}><Image width={50} height={50} src="/chevrons-right.svg" alt="icon-right"/></button>
      {isOpened && <DashboardPopup mode={mode} isOpened={isOpened} setIsOpened={setIsOpened}/>}
    </nav>
  );
}

export default DashboardButtons;