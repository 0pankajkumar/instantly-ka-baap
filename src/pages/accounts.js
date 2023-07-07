import AppSkeleton from "@/components/AppSkeleton";
import { FaBeer } from "react-icons/fa";

function AccountsContent() {
  return <div>Accounts tab</div>;
}

export default function Accounts() {
  return (
    <div>
      <AppSkeleton />
      <AccountsContent />
      <FaBeer />
      Gabeer
    </div>
  );
}
