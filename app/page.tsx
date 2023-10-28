import Modal from "@/components/globals/modal";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="relative bg-gray-200 h-screen">
      <div className="w-full bg-white h-[3rem] shadow-md">
    <main className="max-w-6xl mx-auto  h-screen">
      <Header/>
    </main>
    </div>
    <Modal />
    </div>
  )
}
