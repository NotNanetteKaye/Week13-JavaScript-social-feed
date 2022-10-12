import { useState } from "react";
import "./CustomButton.css"

const CustomDislikeButton = (props) => {
    
    const [dislikeButtonClass, setDislikeButtonClass] = useState('inactive');
    
    
    function handleClick(){
        if (dislikeButtonClass === "inactive") {
            setDislikeButtonClass("dislike");
        }
        else {
            setDislikeButtonClass("inactive");
        }
    }
    
    
    return (
        <div>
            <button className={dislikeButtonClass} onClick={handleClick}>{props.message}</button>
        </div>
    )
}
 
export default CustomDislikeButton;

