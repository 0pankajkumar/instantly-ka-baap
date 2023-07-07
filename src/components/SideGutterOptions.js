import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

export default function SideGutterOptions() {
  return (
    <div className="flex flex-col">
      <div>
        <EmailOutlinedIcon />
      </div>
      <div>
        <SendOutlinedIcon />
      </div>
      <div>
        <TimelineOutlinedIcon />
      </div>
      <div>
        <TuneOutlinedIcon />
      </div>
    </div>
  );
}
