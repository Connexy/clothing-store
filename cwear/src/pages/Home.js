import React from 'react';
import Navbar from '../components/Navbar';
import NavHeader from '../components/NavHeader';
import HomeImage from '../components/HomeImage';
import Card from '../components/Card';






export default function Home() {
    return (
        <>
            <NavHeader />
            <Navbar />
            <HomeImage />

            <div className='container-fluid'>
                <div className='Main-content-header'>
                    <h2 style={{ fontWeight: "300" }}>Hot Sellers</h2>
                    <p style={{ fontSize: "18px", fontWeight: "400" }}>Here is what's trending on Luga right now</p>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='Main-Content'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />


                </div>
            </div>
        </>
    )
}
