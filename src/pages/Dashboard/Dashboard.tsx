import "./styles.css";
import SidePanel from "./SidePanel";

const Dashboard = () => {
  // if not logged in redirect to landing page
  return (
    <div className="dashboard_">
      <SidePanel />
    </div>
  );
};

export default Dashboard;
