 import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { createProduct } from '../service/api/products'
 
 const AddProductPage = () => {

    const {register, handleSubmit , formState: {errors}}=useForm()
   const{mutate , isPending ,isSuccess }=useMutation({
    mutationKey : ['/products'],
    mutationFn : createProduct,
    gcTime : 2000,
   })
    console.log("🚀 ~ AddProductPage ~ isPending:", isPending)
    const onSubmit = handleSubmit((data)=>{
        mutate(data)
    })

   

    

   return (
     <div>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="id">ID :</label>
                <input {...register('id')} className='border border-black rounded-lg p-2 m-2'  type="number" placeholder='enter product id'  id='id'/>
            </div>
            <div>
                <label htmlFor="title">TITLE :</label>
                <input {...register('title')} className='border border-black rounded-lg p-2 m-2' type="sdescription" placeholder='enter product title' id='title' />
            </div>

            <div>
                <label htmlFor="price">PRICE :</label>
                <input {...register('price' , {required: 'price is required'})} className='border border-black rounded-lg p-2 m-2' type="number" placeholder='enter product price' id='price' />
               <br />
               
               {errors.price && <span className='text-red-600'>{errors.price.message}</span>}
            </div>

            <div>
                <label htmlFor="description">DESCRIPTION :</label>
                <input {...register('description')} className='border border-black rounded-lg p-2 m-2' type="string" placeholder='enter product description' id='description' />
            </div>

            <div>
                <label htmlFor="category">CATEGORY:</label>
                <input {...register('category')} className='border border-black rounded-lg p-2 m-2' type="string" placeholder='enter product category' id='category' />
            </div>

            <div>
                <label htmlFor="image">IMAGE:</label>
                <input {...register('image')} className='border border-black rounded-lg p-2 m-2' type="text" placeholder='enter product image' id='image' />
            </div>

            <button className='border rounded-md bg-green-400 p-3 m-3 text-white'> {isPending ? 'loading ...' : 'add product'} </button>

            <p>{isSuccess ? 'product created successfully' : ''}</p>
        </form>
     </div>
   )
 }
 
 export default AddProductPage