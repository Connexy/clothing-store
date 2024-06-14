import React from 'react';
import Navbar from '../components/Navbar';
import NavHeader from '../components/NavHeader';



export default function Home() {
    return (
        <>
            <NavHeader />
            <Navbar />
            <div className='container-fluid'>
                <div className='main-1-yg'>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="p-3 mb-2 bg-light d-flex flex-column justify-content-evenly" style={{ height: "250px" }}>
                                <span style={{ fontSize: "20px", color: "grey", fontWeight: "100" }}>New Luma Yoga Collection</span>
                                <p style={{ fontSize: "30px", color: "#575757" }}>Get fit and look fab in new <br />
                                    seasonal styles</p>
                                <button class="btn btn-primary ybtn">Shop New Yoga</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
