import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function LoginOptions() {
  return (
    <div className="flex flex-row-reverse">
      <div>
        <AccountCircleOutlinedIcon />
      </div>
      <div>
        <HelpOutlineOutlinedIcon />
      </div>
    </div>
  );
}
