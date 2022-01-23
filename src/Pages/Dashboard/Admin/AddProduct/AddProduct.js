import React from 'react';
import axios from 'axios';
import {useForm} from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios.post('https://salty-beyond-99419.herokuapp.com/bikes', data)
    .then(res => {
        if(res.data.insertedId){
            alert('added successfully');
            reset();

        }
    })
  } 
    return (
        <div className="">
            <h2 className="text-4xl font-bold text-danger">Add A Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 50 })} placeholder="Service Name"/>
      <br />
      <input className="description-field" {...register("description", { required: true})} placeholder="Service description"/>
      <br />
      <input {...register("price", { required: true})} placeholder="Price"/>
      <br />
      <input type="text" {...register("img", { required: true })} placeholder="image url"/>
      <br />
      <button  className="submit-btn"> <input type="submit" /></button>
    </form>
    </div>
    );
};

export default AddProduct;