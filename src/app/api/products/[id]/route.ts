export async function GET(){


    try{

        const {id} = await params;
        const product = products.find((product)=>product.id===id)

    }catch(error){


    }

}