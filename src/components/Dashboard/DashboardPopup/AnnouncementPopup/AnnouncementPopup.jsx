import axios from "axios";
import {useAdmin} from "../../../../context/AdminContext";
import {useError} from "../../../../context/ErrorContext";
import {useReducer, useState} from "react";
import Image from "next/image";

const AnnouncementPopup = ({mode, setIsOpened}) => {
  const {data,id,type, setIsChanged} = useAdmin();
  const {setError} = useError();
  const currentAnnouncement = data.find((item) => item.id === id);
  const reducer = function(state,action){
    switch (action.type) {
      case 'name': return {...state, name: action.value};
      case 'description': return {...state, description: action.value};
      case 'summary': return {...state, summary: action.value};
      case 'date': return {...state, date: action.value.toLocaleString().slice(0,10)};
      case 'image': return {...state, image: action.value};
      case 'link': return {...state, link: action.value};
      case 'linkBtnText': return {...state, linkBtnText: action.value};
      default: return state;
    }
  }
  const initializer = function(){
    if (mode !== 'create') {
      return {
        name: currentAnnouncement?.name,
        description: currentAnnouncement?.description,
        summary: currentAnnouncement?.summary,
        date: currentAnnouncement?.date.toLocaleString().slice(0,10),
        image: currentAnnouncement?.imageCover,
        link: currentAnnouncement?.link,
        linkBtnText: currentAnnouncement?.linkBtnText
      }
    } else return {name: '', description: '', summary: '', date: '', image: '', link: '', linkBtnText: ''}
  }
  const [state, dispatch] = useReducer(reducer,null,initializer);
  const formData = new FormData();
  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.append("name",state.name);
    formData.append("description",state.description);
    formData.append("summary",state.summary);
    formData.append("date",state.date);
    formData.append('imageCover',state.image);
    formData.append("link",state.link);
    formData.append("linkBtnText",state.linkBtnText);
    switch(mode){
      case "create":
        try{
          await axios({
            method: 'POST',
            url:`${process.env.NEXT_PUBLIC_API_URL}${type}`,
            withCredentials : true,
            data : {
              name:state.name,
              description:state.description,
              summary:state.summary,
              date:state.date,
              imageCover:"UPDATE ME ASAP!",
              link: (state.link || '/'),
              linkBtnText:state.linkBtnText
            }
          });
          setIsChanged(prev=>!prev)
          setIsOpened(prev=>!prev)
        }catch(error){setError(error.response.data.message)}
        break;
      case "update":
        try{
          await axios({
            method: 'PATCH',
            headers:{'Content-Type': 'multipart/form-data'},
            url:`${process.env.NEXT_PUBLIC_API_URL}${type}/${id}`,
            withCredentials : true,
            data: formData
          });
          setIsChanged(prev=>!prev)
          setIsOpened(prev=>!prev)
        }catch(error){setError(error.response.data.message)}
        break;
      case "delete":
        try{
          await axios({
            method: 'DELETE',
            url:`${process.env.NEXT_PUBLIC_API_URL}${type}/${id}`,
            withCredentials : true,
          });
          setIsChanged(prev=>!prev)
          setIsOpened(prev=>!prev)
        }catch(error){setError(error.response.data.message)}
        break;
      default:
        break;
    }
  }
  return (
    <form action="#" className="announcement-popup" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          <span>Name</span>
          <input type="text" placeholder="Name" value={state.name} required={true} id="name" onChange={(e)=>dispatch({type:"name",value:e.target.value})}/>
        </label>
        <label htmlFor="summary">
          <span>Summary</span>
          <input type="text" placeholder="Summary" value={state.summary} required={true} id="summary" onChange={(e)=>dispatch({type:"summary",value:e.target.value})}/>
        </label>
        <label htmlFor="date">
          <span>Date</span>
          <input type="date" id="date" required={true} value={state.date} onChange={(e)=>dispatch({type:"date",value:e.target.value})}/>
        </label>
        <label htmlFor="link">
          <span>Link</span>
          <input type="text" id="link" placeholder="Announcement link:" value={state.link} onChange={(e)=>dispatch({type:"link",value:e.target.value})}/>
        </label>
        <label htmlFor="link-button-text">
          <span>Link Button Text</span>
          <input type="text" id="link-button-text" placeholder="Announcement link button text:" value={state.linkBtnText} onChange={(e)=>dispatch({type:"linkBtnText",value:e.target.value})}/>
        </label>
      </div>
      <textarea placeholder="Description" required={true} value={state.description?.replace(/\\n/g, '\n')} onChange={(e)=>dispatch({type:"description",value:e.target.value})}/>
      <label htmlFor="file">
        <span>Upload Image <Image src="/upload.svg" alt="upload icon" width={40} height={40}/></span>
        <input type="file" id="file" onChange={(e) => dispatch({type:"image",value:e.target.files[0]})}/>
      </label>
      <button type="submit" className={`btn btn-${mode}`}>{mode}</button>
    </form>
  );
};

export default AnnouncementPopup;