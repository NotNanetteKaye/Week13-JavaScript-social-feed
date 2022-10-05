
import React, { useState } from 'react';



const AddEntryForm = (props) => {


    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='string' value={name} onChange={(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type='string' value={post} onChange={(event) => setPost(event.target.value)}/>
            <button type='submit'>Create</button>
        </form>
    );
}
 
export default AddEntryForm;