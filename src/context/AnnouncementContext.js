import {createContext, useContext, useState} from "react";

const AnnouncementContext = createContext()

const AnnouncementProvider = ({initAnnouncements,children}) => {
  const [page, setPage] = useState(1)
  const [announcements, setAnnouncements] = useState(initAnnouncements)

  const values = {page, setPage, announcements, setAnnouncements}
  return <AnnouncementContext.Provider value={values}>{children}</AnnouncementContext.Provider>
}
const useAnnouncement = () => useContext(AnnouncementContext)
export {AnnouncementProvider, useAnnouncement}