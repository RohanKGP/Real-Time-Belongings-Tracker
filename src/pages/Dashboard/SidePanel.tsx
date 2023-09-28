import PanelIcon from "./PanelIcon";

const SidePanel = () => {
  return (
    <div className="side_panel_">
      <div className="panel_brand_">
        <img
          alt="Google Maps icon (2020)"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/256px-Google_Maps_icon_%282020%29.svg.png"
        />
      </div>
      <PanelIcon />
      <PanelIcon />
      <PanelIcon />
    </div>
  );
};

export default SidePanel;
