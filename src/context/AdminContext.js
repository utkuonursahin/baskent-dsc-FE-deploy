import {createContext, useContext, useState} from "react";
const AdminContext = createContext()
const AdminProvider = ({children}) => {
  const [type, setType] = useState("panel")
  const [id, setId] = useState("")
  const [page,setPage] = useState(1)
  const [data,setData] = useState([])
  const [isChanged,setIsChanged] = useState(false)
  const values = {type,setType, id, setId, page, setPage,data,setData,isChanged,setIsChanged}
  return <AdminContext.Provider value={values}>{children}</AdminContext.Provider>
}
const useAdmin = () => useContext(AdminContext)
export {AdminProvider, useAdmin}