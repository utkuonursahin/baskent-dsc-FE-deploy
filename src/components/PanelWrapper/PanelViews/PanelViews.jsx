import AnnouncementsView from "./AnnouncementView/AnnouncementsView";
import ExecutivesView from "./ExecutivesView/ExecutivesView";
import CommonView from "./CommonView/CommonView";
import RedeployView from "./RedeployView/RedeployView";

function PanelViews ({type}) {
  return (
    <div className="panel-views">
      {type === "announcements" && <AnnouncementsView><CommonView type={type}/></AnnouncementsView>}
      {type === "executives" && <ExecutivesView><CommonView type={type}/></ExecutivesView>}
      {type === "redeploy" && <RedeployView/>}
    </div>
  );
}

export default PanelViews;