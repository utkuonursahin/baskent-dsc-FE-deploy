import {useState} from 'react';
import {useAdmin} from "../../../context/AdminContext";
import Image from "next/image";
import PanelModal from "../PanelModals/PanelModal";

function PanelButtons({type}) {
  const [isOpened, setIsOpened] = useState(false);
  const [mode, setMode] = useState("");
  const {setPage} = useAdmin();
  const handleClick = (e) =>{
    const el = e.target.closest(".btn-panel");
    if(!el) return
    setIsOpened(true);
    el.dataset.action && setMode(el.dataset.action)
  }
  return (
    <nav className="panel__buttons" onClick={handleClick}>
      <button className="btn btn-page" onClick={()=>{setPage(prev=>prev-1)}}><Image width={50} height={50} src="/chevrons-left.svg" alt="icon-left"/></button>
      <button className="btn btn-create btn-panel" data-action="create">Create</button>
      <button className="btn btn-update btn-panel" data-action="update">Update</button>
      <button className="btn btn-delete btn-panel" data-action="delete">Delete</button>
      <button className="btn btn-page" onClick={()=>{setPage(prev=>prev+1)}}><Image width={50} height={50} src="/chevrons-right.svg" alt="icon-right"/></button>
      {isOpened && <PanelModal type={type} mode={mode} isOpened={isOpened} setIsOpened={setIsOpened}/>}
    </nav>
  );
}

export default PanelButtons;