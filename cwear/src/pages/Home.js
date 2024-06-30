import React from 'react';
import Navbar from '../components/Navbar';
import NavHeader from '../components/NavHeader';
import left from '../assets/images/left.jpg';
import right from '../assets/images/right.png'



export default function Home() {
    return (
        <>
            <NavHeader />
            <Navbar />
            <div className='container-fluid'>
                <div className='main-1-yg'>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="p-3 mb-2 bg-light d-flex flex-column justify-content-evenly" style={{ height: "250px" }}>
                                <span style={{ fontSize: "20px", color: "grey", fontWeight: "100" }}>New Luma Yoga Collection</span>
                                <p style={{ fontSize: "30px", color: "#575757" }}>Get fit and look fab in new <br />
                                    seasonal styles</p>
                                <button className="btn btn-primary ybtn">Shop New Yoga</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className="main-2 bg-light">
                    <div className="left-col"><img src={left} alt='network error' style={{ height: "700px", width: "400px", marginRight: "20px" }} /> </div>
                    <div className="middle-col"><img src={right} alt='network error' style={{ height: "300px", width: "550px", padding: "50px" }} /></div>
                    <div className="right-col"><span>Even more ways<br /> to mix and match</span> <p>Buy 3 Luga get a 4th<br />free</p><a href="/" class="spar">Shop Tees &gt;</a></div>
                </div>


            </div>



        </>
    )
}
