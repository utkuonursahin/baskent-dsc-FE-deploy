import {useAnnouncement} from "../../context/AnnouncementContext";
import {useEffect} from "react";
import SliderContainer from "./SliderContainer/SliderContainer";
import {useError} from "../../context/ErrorContext";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
const Announcements = () => {
  const {page, announcements, setAnnouncements} = useAnnouncement();
  const {setError} = useError()

  useEffect(() => {
    let ignore = false;
    (async () => {
      try{
        if(page === 1) return;
        const {data:response} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}announcements?page=${page}&limit=3`)
        if(!response.results) return
        const newAnnouncements = response?.data?.data
        if(newAnnouncements.length && !ignore) setAnnouncements([...announcements,...newAnnouncements])
      }catch(error){
        setError(error.response?.data.message || error.response?.data)
      }
    })();
    //Cleanup function
    return () => {ignore = true}
  },[page, setError, setAnnouncements]);

  return (
    <section className="announcements" id="announcements">
      <h2 className="heading-2">Duyurular</h2>
      {announcements ? <SliderContainer/> : <Spinner/>}
    </section>
  );
};

export default Announcements;
