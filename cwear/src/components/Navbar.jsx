import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid" style={{ backgroundColor: "#e1e1e1" }}>

                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link ml-30" aria-current="page" href="#">What's New</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Women
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Tops</a></li>
                                    <li><a class="dropdown-item" href="#">Bottoms</a></li>

                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Men
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Tops</a></li>
                                    <li><a class="dropdown-item" href="#">Bottoms</a></li>

                                </ul>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link hover:dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Gear
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Bags</a></li>
                                    <li><a class="dropdown-item" href="#">Fitness Equipments</a></li>
                                    <li><a class="dropdown-item" href="#"></a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Training
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Video Download</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Sale</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
