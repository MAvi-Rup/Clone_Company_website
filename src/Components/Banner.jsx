import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade ">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner" style={{background:'black',overflow:'hidden'}}>
                    <div class="carousel-item active">
                        <img src="./banner1.jpg" class="d-block w-100" style={{ marginTop: '-240px',opacity:'0.4' }} alt="..." />
                        <div class="carousel-caption d-none d-md-block" style={{ paddingBottom: '200px' }}>
                            <h1 className='text-white' style={{ fontSize: '42px' }}>A Customer First Approach <br />
                                to Cloud Transformation</h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./banner2.jpg" class="d-block w-100" style={{ marginTop: '-110px',opacity:'0.4' }} alt="..." />
                        <div class="carousel-caption d-none d-md-block" style={{ paddingBottom: '200px' }}>
                            <h1 className='text-white' style={{ fontSize: '42px' }}>We move beyond ideas to digital innovation using cloud <br />technology
                            </h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="./banner3.jpg" class="d-block w-100" style={{ marginTop: '-420px',opacity:'0.4' }} alt="..." />
                        <div class="carousel-caption d-none d-md-block" style={{ paddingBottom: '200px' }}>
                            <h1 className='text-white' style={{ fontSize: '42px' }}>Migrate, Modernize<br/>
                                and Optimize on AWS</h1>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;