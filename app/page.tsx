import Modal from "@/components/globals/modal";
import Header from "@/components/header";
import BackdropSearch from "@/components/home/backdropSearch";
import SpacesSidebar from "@/components/home/spacesSidebar";

export default function Home() {
  const spaces = [
    {
      id: "1",
      title: "Parenting Advice",
      picture: "/space-icon.jpeg",
    },
    {
      id: "2",
      title: "Quora Usage Data and Analysis",
      picture: "/space-icon.jpeg",
    },
    {
      id: "3",
      title: "Images",
      picture: "/space-icon.jpeg",
    },
    {
      id: " 4",
      title: "Happiness",
      picture: "/space-icon.jpeg",
    },
    {
      id: "5",
      title: "Upvoting and Downvoting (Quora feature)",
      picture: "/space-icon.jpeg",
    },
    {
      id: "6",
      title: "Answers (Quora content)",
      picture: "/space-icon.jpeg",
    },
  ];

  return (
    <div className="relative bg-gray-200 h-screen">
      <div className="w-full bg-white h-[3rem] shadow-md">
        <main className="max-w-6xl mx-auto  h-screen">
          <Header />
        </main>
      </div>

      <div className=" grid grid-cols-12  mx-auto">
        <div className="col-span-2 p-4">
          <SpacesSidebar spaces={spaces} />
        </div>
        <div className="col-span-8 p-4">feed and create</div>
        <div className="col-span-2 p-4">ads</div>
      </div>

      <BackdropSearch />
      <Modal />
    </div>
  );
}
