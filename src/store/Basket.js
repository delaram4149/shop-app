 import { create } from "zustand";
 
  const useBasket= create((set,get)=>{
   return{
     items : [] ,
     invoice : {
       totalPrice: 0,
       deliveryCost: 0,
       totalDiscount: 0,
       finalPrice: 0,
     },
 
     actions : {
       addToBasket:(payload)=>{
     
       // 1. add new item
       // 2. increase already item
       // use some because we need true and false
       // already exist
       const alreadyExist = get().items.some((item)=>item.id===payload.id)
       if(!alreadyExist){
         // set new item to basket
         set((oldState)=>{
           return{
             items : [...oldState.items, {...payload, quantity:1}],
             invoice : {...oldState.invoice , totalPrice: oldState.invoice.totalPrice + payload.price}
           }
         })
       }
       else{
        // increase already exist
        set((oldState)=>{
         return{
           items : oldState.items.map((item)=>{
           
             if(item.id===payload.id){
               return {...item, quantity : item.quantity +1}
             }else return item;
           }),
 
           invoice : {...oldState.invoice, totalPrice : oldState.invoice.totalPrice + payload.price}
           
         }
        })
       }
       
 
         
       },
       removeFromBasket :(payload)=>{
         const shouldRemove = payload.quantity===1;
        if(shouldRemove){
             // remove item from the basket => quantity = 1
         set((oldState)=>{
           return{
             invoice : {...oldState.invoice, totalPrice : oldState.invoice.totalPrice-payload.price},
             items : oldState.items.filter((item)=> item.id !== payload.id),
           }
         })
        }else{
         // decrease quantity
         set((oldState)=>{
           return{
            invoice : {...oldState.invoice , totalPrice : oldState.invoice.totalPrice - payload.price},
            items : oldState.items.map((item)=>{
              if(item.id===payload.id){
               return {...item , quantity : item.quantity -1}
              }else return item
            })
           }
         })
 
        }
        
         
       }
     }
   }
  })
 
 
 
 
  export default useBasket;