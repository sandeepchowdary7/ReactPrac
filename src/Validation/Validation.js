import React from "react";

const validation = (props) => {
    let validationMsg = 'Text is too long'

    if(props.inputLength <= 5) {
        validationMsg = 'Text is too short'
    }

    return (
        <div>
            <p>{validationMsg}</p>
        </div>
    );
}

export default validation;