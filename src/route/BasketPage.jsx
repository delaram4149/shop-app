 import React, { useMemo, useState } from 'react'


 function getParams(text) {
  if (text.length < 2) {
    return [...text];
  }
  const params = [];

  const letters = [...text];

  letters.forEach((letter, index) => {
    const without = [...letters];
    without.splice(index, 1);
    getParams(without).forEach((element) => {
      params.push(letter + element);
    });
  });
  return params;
}
// 'abc' => ['abc', 'acb', 'bca', 'bac' , 'cba', 'cab']

 
 const BasketPage = () => {

  const [showList, setShowList] = useState(false)

  const [letters, setLetters] = useState("")
console.time("invoke getParams")


// useMemo
  const list = useMemo(()=>getParams(letters), [letters])




  console.timeEnd("invoke getParams")
  console.log(list);
  
   return (
     <div>

      <input type="text" onChange={(e)=>setLetters(e.target.value)} className='border border-black rounded-md m-2 p-2' />

      <br />
      <button className='border border-black rounded-md ' onClick={()=>setShowList(!showList)}>
        {showList ? "hide list" : "show list"}
      </button>
      <br />
      { showList && <ul className='m-4 '>
        {list.map((item , i)=>{
          return <li key={item + i}> {i+1} - {item}</li>
        })}
      </ul>}
     </div>

       
   )
 }
 
 export default BasketPage