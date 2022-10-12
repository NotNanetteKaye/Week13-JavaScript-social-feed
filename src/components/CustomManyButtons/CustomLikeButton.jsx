import { useState } from "react";
import "./CustomButton.css"

const CustomLikeButton = (props) => {

    const [likeButtonClass, setLikeButtonClass] = useState('inactive');



    function handleClick(){
        // Need TODO: Change/toggle between active & inactive css class
        if (likeButtonClass === "inactive") {
            setLikeButtonClass("active");
        }
        else {
            setLikeButtonClass("inactive")
        }
    }


        return (
            <div>
                <button className={likeButtonClass} onClick={handleClick}>{props.message}</button>
            </div>
        )
}
 
export default CustomLikeButton;