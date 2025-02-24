import { create } from "zustand";

const useCount = create((set)=>({
    //should return sth
    count : 0,
    increaseCount : ()=>set((oldState)=>({count: oldState.count +1})),
    //decreaseCount : ()=>{}
}))






export default useCount;