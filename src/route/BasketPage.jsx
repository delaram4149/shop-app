 import React from 'react'


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
   return (
     <div>BasketPage</div>
   )
 }
 
 export default BasketPage