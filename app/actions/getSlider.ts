import { pb } from "@/lib/pocketbase";


export async function getSlider() {
    try{

        // you can also fetch all records at once via getFullList
        const records = await pb.collection('sliders').getFullList({
    sort: '-created',
    }); 
    return records
    }catch (error){
        console.error('Error getting slider images:' ,error);
        return[]
        
    }
    
    
}