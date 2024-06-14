import React from 'react'

export default function NavHeader() {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <div className='logo'>
                        <h1>LUGA</h1>
                    </div>
                    <div className="search-container">
                        <div className="input-container">
                            <input type="text" placeholder="Search entire store here..." className="search-input" />
                            <span className="search-icon">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                        <a href="/" className="cart-icon">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}
