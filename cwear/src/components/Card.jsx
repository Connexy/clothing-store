import React from 'react'
import shirtImage from '../assets/images/shirt.jpg';

export default function Card() {
    return (
        <>
            <div class="box">
                <div class="box-img">
                    <img src={shirtImage} style={{ height: "250px" }} alt="shirt" />
                </div>


                <div class="mall">Plane White T-shirt
                </div>
                <div class="icon">
                    <i class="fa-solid fa-star icon-yellow"></i>
                    <i class="fa-solid fa-star icon-yellow"></i>
                    <i class="fa-solid fa-star icon-yellow"></i>
                    <i class="fa-solid fa-star icon-yellow"></i>
                    <i class="fa-solid fa-star"></i> <span>5 Reviews</span>
                </div>
                <div class="last">
                    <p>As low as <span> $22.00</span></p>
                </div>
                <div class="size">
                    <div class="s">XS</div>
                    <div class="s">S</div>
                    <div class="s">M</div>
                    <div class="s">L</div>
                </div>
                <div class="colour">
                    <div class="s" style={{ backgroundColor: "yellow" }}></div>
                    <div class="s" style={{ backgroundColor: "pink" }}></div>
                    <div class="s" style={{ backgroundColor: "orange" }}></div>
                </div>
                <div class="cart">
                    <button onclick="addToCart()" class="atc-button">Add to Cart</button>
                </div>
            </div>

        </>
    )
}
