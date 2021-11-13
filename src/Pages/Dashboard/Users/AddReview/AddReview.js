import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const AddReview = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    axios.post('https://salty-beyond-99419.herokuapp.com/reviews', data)
    .then(res => {
        if(res.data.insertedId){
            alert('Review added successfully');
            reset();
        }
    })
  }
    return (
        <div className="service-form">
            <h2>Please Add A Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 50 })} value={user.displayName} placeholder="Your Name"/>
      <br />
      <input {...register("email", { required: true, maxLength: 50 })} value={user.email} placeholder="Your email"/>
      <br />
      <input {...register("review", { required: true})} placeholder="Type Your Review"/>
      <br />
      <input {...register("rating", { required: true})} placeholder="Rating (0-5)"/>
      <br />
      <input className="confirm-btn submit-field" type="submit" />
    </form>
    </div>
    );
};

export default AddReview;