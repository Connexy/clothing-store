import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" style={{ backgroundColor: "#e1e1e1" }}>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link ml-30" aria-current="page" href="/">What's New</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link  dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Women
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Tops</a></li>
                                    <li><a className="dropdown-item" href="/">Bottoms</a></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Men
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Tops</a></li>
                                    <li><a className="dropdown-item" href="/">Bottoms</a></li>

                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link hover:dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Gear
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Bags</a></li>
                                    <li><a className="dropdown-item" href="/">Fitness Equipments</a></li>
                                    <li><a className="dropdown-item" href="/">Watches</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Training
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Video Download</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Sale</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
