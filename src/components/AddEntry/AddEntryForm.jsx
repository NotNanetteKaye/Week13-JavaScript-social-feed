
import React, { useState } from 'react';
import './AddEntryForm.css';


const AddEntryForm = (props) => {


    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post,
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }


    return ( 
        <form onSubmit={handleSubmit} className="form-grid">
            <div className='form-group row'>
                <label for="inputName" className="col-sm-2 col-form-label-lg">Name</label>
                <div className='col-sm-10'>
                    <input type='string' className="form-control" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
            </div>
            <div className='form-group row'>
                <label for="inputPost" className='col-sm-2 col-form-label-lg'>Post</label>
                <div class='col-sm-10'>
                    <input type='string' className="form-control" value={post} onChange={(event) => setPost(event.target.value)}/>
                </div>
            </div>
            <button type='submit' className='btn btn-primary' style={{'margin-top': '1.5em'}}>Create</button>
        </form>
    );
}
 
export default AddEntryForm;