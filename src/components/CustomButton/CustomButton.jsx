import { useState } from "react";
import "./CustomButton.css"

const CustomButton = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');


    function handleClick(){
        // Need TODO: Change/toggle between active & inactive css class

        if (buttonClass === "inactive") {
            setButtonClass("active");
        }
        else {
            setButtonClass("inactive")
        }
    }


        return (
            <div>
                <button className={buttonClass} onClick={handleClick}>{props.message}</button>
            </div>
        )
}
 
export default CustomButton;