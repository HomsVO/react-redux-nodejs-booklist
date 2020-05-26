import React from 'react';
import { useForm } from "react-hook-form";
import { changeBookRequest } from '../redux/actions/book';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './../сomponents/Loader';
const BookChangePage = (props) => {
    const id = props.match.params.id;
    const { books } = useSelector(state => state.book);
    const book = books.find(item => item._id === id);

    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => {
        const updBook = {
            ...book,
            ...data
        }
        dispatch(changeBookRequest(updBook));
        props.history.push('/');
    }
    
    if(!book) return <Loader />

    return (
        <div className="container">
        <h1 className='mt-3 text-center'>Add Book</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
            <div className="form-group">
                <label forhtml="author">Author</label>
                <input className="form-control" defaultValue={book.author} id="author" name="author" ref={register({ required: true })} />
                {errors.author && <span>This field is required</span>}
            </div>
            <div className="form-group">
                <label forhtml="title">Book Title</label>
                <input className="form-control" name="title" defaultValue={book.title} id="title" ref={register({ required: true })} />
                {errors.title && <span>This field is required</span>}
            </div>
            <button className="btn btn-success">Save</button>
        </form>
        </div>
    );
}

export default BookChangePage;
