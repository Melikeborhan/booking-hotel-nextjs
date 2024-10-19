import { pb } from "@/lib/pocketbase";


export async function getHotel() {
    try{

        const record = await pb.collection('hotel').getOne('ef9sjojzggylxof', {
            expand: 'relField1,relField2.subRelField',
        });
        return record
    
    }catch (error){
        console.error('Error getting slider images:' ,error);
        return[]
        
    }
    
    
}