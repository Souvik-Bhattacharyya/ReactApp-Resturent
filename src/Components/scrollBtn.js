import React from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import './scrollBtn.css';


function scrollBtn() {
    return (
        <div>
            <button className='btn btn-info'>
                <MdKeyboardDoubleArrowUp />
            </button>
        </div>
    )
}

export default scrollBtn;