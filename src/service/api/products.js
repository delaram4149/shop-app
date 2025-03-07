import axios from "axios"

const getProducts = async ()=>{
 const data = await axios.get("https://fakestoreapi.com/products") 
 return data; 
}

export const createProduct= async (payload)=>{
const data = await axios.post("https://fakestoreapi.com/products" , {
    // {...payload} => chot type payload obj 
    body : payload
})
return data;
}

export default getProducts;
