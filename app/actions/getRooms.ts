import { pb } from "@/lib/pocketbase";


export  const getRooms = async()=> {
    try{

        // fetch a paginated records list
        const resultList = await pb.collection('rooms').getList(1, 50, {
            filter: 'created >= "2022-01-01 00:00:00"',
        });
        
    return resultList.items
    }catch (error){
        console.error('Error getting slider images:' ,error);
        return[]
        
    }
    
    
}