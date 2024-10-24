import Hero from "@/app/(auth)/_components/Hero";
import RoomItem from "@/app/(auth)/_components/RoomItem";
import { getHomeRooms} from "@/app/actions/getRooms";

export default async function Home() {
  const rooms = await getHomeRooms();
  return (
    <div>
      <Hero />
      <div className="text-center text-3xl font-semibold  container mt-24 mb-32">
        <span>BEST ROOMS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-44 container">
          {rooms.map((room)=>(
               <RoomItem key={room.id} room={room} />
          ))}
         
         
        </div>
      </div>
    
  );
}
