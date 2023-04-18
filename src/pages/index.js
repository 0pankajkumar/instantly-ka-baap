import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <span class="flex flex-row m-8">
        <span>Brand</span>
      </span>
      <span className="flex flex-row-reverse space-x-4">
        <span>Help</span>
        <span>Options</span>
        <span>pranav sethi</span>
      </span>

      <span class="flex flex-col space-y-8">
        <span>Accounts</span>
        <span>Campaigns</span>
        <span>Analytics</span>
        <span>Inbox</span>
        <span>Settings</span>
        <span>Accelerator</span>
      </span>
    </main>
  );
}
