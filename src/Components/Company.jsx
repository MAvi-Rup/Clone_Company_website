import React from 'react';
import Wave from 'react-wavify';

const Company = () => {
    return (
        <>
            <div id='company' className='container-fluid pt-5 pb-5 mt-5' style={{ backgroundImage: 'linear-gradient(90deg, #0c58a4, #2d8fce)' }}>
                <div className='container pt-5 pb-5'>
                    <div className='row'>
                        <div className='col-md-5 d-flex align-items-center '>
                            <div>
                                <h1 className='text-white mb-4' style={{ fontSize: '42px', fontFamily: 'Outfit, sans-serif', fontWeight: '600' }}>Company</h1>
                                <p className='text-white pb-4' style={{ fontSize: '18px', fontFamily: 'Outfit, sans-serif', fontWeight: '400' }}>Cloud 360 Services is a provider of AWS cloud solutions, software engineering and managed services, supported by a strong leadership team with combined experience of 40+ years. Cloud 360 Services is an AWS Consulting Partner with its own development centre in Dhaka, Bangladesh</p>
                            </div>

                        </div>
                        <div className='col-md-7'>
                            <img src="./company.jpg" alt="" className='img-fluid ms-4 ps-5' width='90%' loading='lazy' />

                        </div>

                    </div>

                </div>



            </div>
            <Wave style={{marginTop:'-50px'}} fill='white'
                paused={false}
                options={{
                    height: 20,
                    amplitude: 20,
                    speed: 0.45,
                    points: 3
                }}
            />

        </>
    );
};

export default Company;