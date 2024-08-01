import React from 'react'
import leftImg from '../assets/images/left.jpg';
import topImg from '../assets/images/right.png';

export default function HomeImage() {
    return (
        <>
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
                <div className='image-sec'>
                    <div className='left-sec'>
                        <img src={leftImg} style={{ height: "700px", width: "100%" }} alt='network error' />
                    </div>
                    <div className='right-sec'>
                        <div className='top-sec'>
                            <div className='top-left'>
                                <img src={topImg} style={{ height: "280xpx", width: "90%" }} alt='network error' />
                            </div>
                            <div className='top-right'>
                                <strong style={{ fontSize: " 32px", fontWeight: " 300" }}>Even more ways to mix and match</strong><br />
                                <span style={{ fontSize: " 22px", fontWeight: " 300" }}>Buy 3 luga get a 4th free</span> <br />
                                <span style={{ fontSize: " 16px" }}>Shop Here &gt;</span>
                            </div>
                        </div>
                        <div className='bottom-sec'>

                            <div className='bottom-info'>
                                <strong style={{ fontSize: " 32px", fontWeight: " 300" }}>Twice around, twice as nice</strong><br />
                                <span style={{ fontSize: " 22px", fontWeight: " 300" }}>Find conscientious, confy clothing in our eco-friendly collection</span> <br />
                                <span style={{ fontSize: " 16px" }}>Shop Eco-Friendly &gt;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
