import React from 'react';
import { useForm } from "react-hook-form";
import { addBookRequest } from './../redux/actions/book';
import { useDispatch } from 'react-redux';

const BookAddPage = (props) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors } = useForm();
    
    const onSubmit = data => {
        dispatch(addBookRequest(data));
        props.history.push('/');
    }
  
    return (
        <div className="container">
        <h1 className='mt-3'>Add Book</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
            <div className="form-group">
                <label forHtml="author">Author</label>
                <input className="form-control" id="author" name="author" ref={register({ required: true })} />
                {errors.author && <span>This field is required</span>}
            </div>
            <div className="form-group">
                <label forHtml="title">Book Title</label>
                <input className="form-control" name="title" id="title" ref={register({ required: true })} />
                {errors.title && <span>This field is required</span>}
            </div>

            <button className="btn btn-success">Add</button>
        </form>
        </div>
    );
}

export default BookAddPage;
