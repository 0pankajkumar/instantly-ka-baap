import AppSkeleton from "@/components/AppSkeleton";

function InboxContents() {
  return <div>Inbox</div>;
}

export default function Inbox() {
  return (
    <div>
      <AppSkeleton />
      <InboxContents />
    </div>
  );
}
