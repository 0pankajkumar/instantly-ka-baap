import AppSkeleton from "@/components/AppSkeleton";

function CampaignsContent() {
  return <div>Campaigns</div>;
}

export default function Campaigns() {
  return (
    <div>
      <AppSkeleton />
      <CampaignsContent />
    </div>
  );
}
