import Title from "./Title";
import LoginOptions from "./LoginOptions";
import SideGutterOptions from "./SideGutterOptions";

export default function AppSkeleton2() {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-2">
        <Title />
      </div>
      <div className="col-span-3">
        <LoginOptions />
      </div>
      <div>
        <SideGutterOptions />
      </div>
      <div className="col-span-3">main content</div>
    </div>
  );
}
