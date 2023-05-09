import AppSkeleton from "@/components/AppSkeleton";
import { Inter } from "next/font/google";
import NewAppSkeleton from "@/components/NewAppSkeleton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      {/* <AppSkeleton /> */}
      <NewAppSkeleton />
    </main>
  );
}
