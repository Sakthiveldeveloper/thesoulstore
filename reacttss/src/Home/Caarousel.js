import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Appmove = () => {
    return(
        <div class="container-fluid">
            <div class="row">
                <div  class="carouselfront">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            <li data-target="#myCarousel" data-slide-to="4"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="item active">
                                <a href="#">
                                    <img src="https://i.ibb.co/2vLDBfr/homepage05.webp" alt="Chania"/>
                                </a>                       
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="https://i.ibb.co/k1VfPkm/homepage06.webp" alt="co-ord set"/>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="https://i.ibb.co/9GZrbx1/homepage09.webp" alt="super Hero"/>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="https://i.ibb.co/9s16Vhr/homepage07.webp" alt="super Hero"/>
                                </a>
                            </div>
                            <div class="item">
                                <a href="#">
                                    <img src="https://i.ibb.co/DpBcSTT/homepage08.webp" alt="super Hero"/>
                                </a>
                            </div>
                        </div>
                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                <span class="sr-only">Next</span>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appmove;
