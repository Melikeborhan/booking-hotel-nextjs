import Hero from "@/app/(auth)/_components/Hero";
import RoomsPage from "../rooms/page";
import RoomItem from "@/app/(auth)/_components/RoomItem";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="text-center text-3xl font-semibold  container mt-24 mb-32">
        <span>BEST ROOMS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-44 container">
          <RoomItem />
          <RoomItem />
          <RoomItem />
        </div>
      </div>
    
  );
}
