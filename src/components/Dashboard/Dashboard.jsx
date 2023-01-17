import Image from "next/image";
import {useAdmin} from "../../context/AdminContext";
import DashboardContent from "./DashboardContent/DashboardContent";
const Dashboard = () => {
  const {type} = useAdmin();
  return (
    <div className="dashboard">
      {type === "panel" && <Image width="250" height="150" src="/logo-blue.svg" alt="DSC logo"/>}
      {type === "announcements" && <DashboardContent/>}
      {type === "users" && <DashboardContent/>}
      {type === "executives" && <DashboardContent/>}
      {type === "inviteKeys" && <DashboardContent/>}
    </div>
  );
};

export default Dashboard;
