import Image from "next/image";
import {useAdmin} from "../../../../context/AdminContext";
import {useError} from "../../../../context/ErrorContext";
import {useReducer} from "react";
import axios from "axios";

const ExecutivePopup = ({mode, setIsOpened}) => {
  const {data,id,type, setIsChanged} = useAdmin();
  const {setError} = useError();
  const currentExecutive = data.find((item) => item.id === id);
  const reducer = function(state,action){
    switch (action.type) {
      case 'name': return {...state, name: action.value};
      case 'title': return {...state, title: action.value};
      case 'image': return {...state, image: action.value};
      default: return state;
    }
  }
  const initializer = function(){
    if (mode !== 'create') {
      return {
        name: currentExecutive?.name,
        title: currentExecutive?.title,
        image: currentExecutive?.image,
      }
    } else return {name: '', title: '', image: ''}
  }
  const [state, dispatch] = useReducer(reducer,null,initializer);
  const formData = new FormData();
  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.append("name",state.name);
    formData.append("title",state.title);
    formData.append("imageCover",state.image);
    switch(mode){
      case "create":
        try{
          const {data:res} = await axios({
            method: 'POST',
            url:`${process.env.NEXT_PUBLIC_API_URL}${type}`,
            withCredentials : true,
            data : {
              name:state.name,
              title:state.title,
              imageCover:"UPDATE ME ASAP!",
            }
          });
          setIsChanged(prev=>!prev)
          setIsOpened(prev=>!prev)
        }catch(error){setError(error.response.data.message)}
        break;
      case "update":
        try{
          const {data:res} = await axios({
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
          const {data:res} = await axios({
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
    <form action="#" className="executive-popup" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          <span>Name</span>
          <input type="text" placeholder="Name" value={state.name} id="name" onChange={(e)=>dispatch({type:"name",value:e.target.value})}/>
        </label>
        <label htmlFor="title">
          <span>Title</span>
          <input type="text" id="title" placeholder="Executive title:" value={state.title} onChange={(e) => dispatch({type:"title",value:e.target.value})}/>
        </label>
      </div>
      <label htmlFor="file">
        <span>Upload Image <Image src="/upload.svg" alt="upload icon" width={40} height={40}/></span>
        <input type="file" id="file" onChange={(e) => dispatch({type:"image",value:e.target.files[0]})}/>
      </label>
      <button type="submit" className={`btn btn-${mode}`}>{mode}</button>
    </form>
  );
};

export default ExecutivePopup;
