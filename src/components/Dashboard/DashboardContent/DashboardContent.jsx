import axios from "axios";
import {useError} from "../../../context/ErrorContext";
import Item from "./Item/Item";
import DashboardButtons from "../DashboardButtons/DashboardButtons";
import {useEffect} from "react";
import {useAdmin} from "../../../context/AdminContext";

const DashboardContent = () => {
  const {type,setId,page,setPage,data, setData, isChanged} = useAdmin();
  const {setError} = useError();
  const handleSelection = (e) => {
    let el = e.target.closest(".dashboard__content--element");
    if(!el) return;
    el.classList.toggle("selected")
    setId(prev => prev === el.dataset.id ? "" : el.dataset.id);
    const siblings = [...el.parentNode.children]
    siblings.filter((child) => child !== el).forEach((child) => child.classList.remove("selected"))
  }
  const getData = async () => {
    try{
      if(page < 1) return setPage(1);
      const {data:res} = await axios({
        method: 'GET',
        url:`${process.env.NEXT_PUBLIC_API_URL}${type}?page=${page}&limit=15`,
        withCredentials : true,
      });
      if(res.status === "success") setData(res.data.data)
    }catch(error){
      setError(error.response.data.message);
    }
  }
  useEffect(()=>{getData()},[page,isChanged])
  return (
    <div className="dashboard__content">
      <div className="dashboard__content--elements" onClick={handleSelection}>
        {data.map((item,i)=>{return <Item key={item.id} data={item} index={i+1}/>})}
      </div>
      <DashboardButtons/>
    </div>
  );
};

export default DashboardContent;
