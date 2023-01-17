import {createContext, useContext, useState} from "react";

const ExecutiveContext = createContext()

const ExecutiveProvider = ({initExecutives,children}) => {
  const [executives, setExecutives] = useState(initExecutives)
  const values = {executives, setExecutives}
  return <ExecutiveContext.Provider value={values}>{children}</ExecutiveContext.Provider>
}
const useExecutive = () => useContext(ExecutiveContext)
export {ExecutiveProvider, useExecutive}