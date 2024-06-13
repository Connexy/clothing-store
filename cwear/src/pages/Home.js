import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <>
            <nav class="navbar">
                <div class="container-fluid">
                    <div className='logo'>
                        <h1>LUMA</h1>
                    </div>
                    <div class="search-container">
                        <div class="input-container">
                            <input type="text" placeholder="Search entire store here..." class="search-input" />
                            <span class="search-icon">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                        <a href="#" class="cart-icon">
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                    </div>
                </div>
            </nav>
            <Navbar />
        </>
    )
}
