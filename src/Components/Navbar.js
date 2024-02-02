import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Stack, Badge } from 'react-bootstrap';
import { FaCartArrowDown } from "react-icons/fa";
import { MdOutlineArrowUpward } from "react-icons/md";


function Navbar() {
    const [show, setshow] = useState(true);
    const button = document.querySelector('.btns');

    function handelClick() {

        if (button.classList.value == "active") {

            button.classList.remove = "active";

        } else {

            button.classList.remove = "add";

        }
    }

    const showCont = () => {
        if (window.scrollY > 80) {
            setshow(false)
        } else {
            setshow(true)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", showCont);
        return (() => window.removeEventListener("scroll", showCont))
    }, [])

    return (
        <div>
            <div className={show == true ? 'NavbarCont' : 'onScrollNav'}>
                <img src="./Assets/Logo.svg" className='logoImg' />
                <Stack className='cont' direction='horizontal' gap={3}>
                    <button className="active btns">Home</button>
                    <button className="btns">Order</button>
                    <button className="btns">Company</button>
                    <button className="btns">FAQ</button>
                    <button className="btns">Contact</button>
                    <button className="btn btn-info">
                        <FaCartArrowDown />
                        <Badge className='badge' bg="light">9</Badge>
                    </button>
                </Stack>
            </div>
            {/* <button>
                <MdOutlineArrowUpward />
            </button> */}
        </div>
    )
}

export default Navbar;