import AppSkeleton from "@/components/AppSkeleton";

function AccountsContent() {
  return <div>Accounts tab</div>;
}

export default function Accounts() {
  return (
    <main>
      <AppSkeleton />
      <AccountsContent />
    </main>
  );
}
