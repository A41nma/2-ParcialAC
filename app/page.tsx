import Image from "next/image";
import Helper-card from "@/components/organismo/Helper-card";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <Helper-card/>
      </main>
    </div>
  );
}
