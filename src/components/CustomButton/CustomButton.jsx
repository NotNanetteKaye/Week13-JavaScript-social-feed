import React from 'react';

const CustomButton = (props) => {
    function handleClick(){
        // TODO: Change/toggle between active & inactive css class
    }

        return (
            <div>
                <button className='inactive' onClick={handleClick}>{props.message}</button>
            </div>
        )
}
 
export default CustomButton;