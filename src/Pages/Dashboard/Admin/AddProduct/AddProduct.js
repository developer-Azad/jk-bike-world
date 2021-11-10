import React from 'react';
import axios from 'axios';
import {useForm} from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:5000/bikes', data)
    .then(res => {
        if(res.data.insertedId){
            alert('added successfully');
            reset();

        }
    })
  }
    return (
        <div className="service-form">
            <h2 className="text-4xl font-bold text-danger">Add A Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 50 })} placeholder="Service Name"/>
      <br />
      <input {...register("description", { required: true})} placeholder="Service description"/>
      <br />
      <input {...register("price", { required: true})} placeholder="Price"/>
      <br />
      <input type="text" {...register("img", { required: true })} placeholder="image url"/>
      <br />
      <input className="confirm-btn submit-field" type="submit" />
    </form>
    </div>
    );
};

export default AddProduct;