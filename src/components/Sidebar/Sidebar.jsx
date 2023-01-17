import {useAdmin} from "../../context/AdminContext";
import axios from "axios";
import {useRouter} from "next/router";
const Sidebar = () => {
  const {setType} = useAdmin();
  const router = useRouter();
  const handleNavigation = (e) => {
    const el = e.target;
    if(e.target.tagName === "BUTTON" ){
      setType(e.target.parentNode.dataset.tab);
      const cousins = [...el.parentNode.parentNode.children]
      cousins.filter((child) => child !== el.parentNode).forEach((child) => child.firstElementChild.classList.remove("active"))
      e.target.classList.add("active");
    }
  }
  const handleLogout = async () => {
    const {data:res} = await axios({
      method: 'GET',
      url:`${process.env.NEXT_PUBLIC_API_URL}users/logout`,
      withCredentials : true,
    });
    setTimeout(async ()=>{
      await router.push("/admin");
    },1000)
  }
  return (
    <nav className="panel__sidebar">
      <h3 className="heading-3">Panel Menü</h3>
      <ul className="panel__sidebar-list" onClick={handleNavigation}>
        <li className="panel__sidebar-list-item" data-tab="me">
          <button className="btn btn-panel">Profilim</button>
        </li>
        <li className="panel__sidebar-list-item" data-tab="users">
          <button className="btn btn-panel">Adminler</button>
        </li>
        <li className="panel__sidebar-list-item" data-tab="inviteKeys">
          <button className="btn btn-panel">Davet Tokenleri</button>
        </li>
        <li className="panel__sidebar-list-item" data-tab="announcements">
          <button className="btn btn-panel">Duyurular</button>
        </li>
        <li className="panel__sidebar-list-item" data-tab="executives">
          <button className="btn btn-panel">Yönetim Kurulu</button>
        </li>
        <li className="panel__sidebar-list-item" data-tab="stats">
          <button className="btn btn-panel">İstatistikler</button>
        </li>
        <li className="panel__sidebar-list-item" data-tab="faq">
          <button className="btn btn-panel">S.S.S</button>
        </li>
        <li className="panel__sidebar-list-item" data-tab="redeploy">
          <button className="btn btn-panel">Redeploy</button>
        </li>
        <li className="panel__sidebar-list-item" onClick={handleLogout}>
          <button className="btn btn-panel">Çıkış Yap</button>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;