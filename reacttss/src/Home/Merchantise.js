import React from 'react'
import './Merchantise.css'

const merchandise =() =>{
    return(
        <div>
            <div class="row" id="officialmerchandise">
                <div class="officialmerchandise1">
                    <span>
                        OFFICIAL MERCHANDISE
                    </span>
                </div>
                <div class="officialmerchandise2">
                    <div class="officialmerchandise2a">
                        <a href="#">
                            <img src="https://i.ibb.co/7ttfrDp/officalmerchandise1.webp" type="image/webp" alt="Marvel"/>
                        </a>
                    </div>
                    <div class="officialmerchandise2b">
                        <a href="#">
                            <img src="https://i.ibb.co/n35TF3L/officalmerchandise2.webp" type="image/webp" alt="Marvel"/>
                        </a>
                    </div>
                    <div class="officialmerchandise2c">
                        <a href="#">
                            <img src="https://i.ibb.co/Cs6pyyX/officalmerchandise3.webp" type="image/webp" alt="Marvel"/>
                        </a>
                    </div>
                    <div class="officialmerchandise2d">
                        <a href="#">
                            <img src="https://i.ibb.co/Kb7yH8x/officalmerchandise4.webp" type="image/webp" alt="Marvel"/>
                        </a>
                    </div>
                </div>
            </div>
            <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
        </div>
    )
    
}
export default merchandise;