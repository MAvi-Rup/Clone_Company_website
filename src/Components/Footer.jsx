import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid' style={{backgroundImage:'linear-gradient(90deg, #0c58a4, #2d8fce)'}}>
            <div className='container pt-5 pb-5'>
                <img className='img-fluid mb-3' src="http://www.cloud360services.com/images/Cloud360_Logo-02-1.svg" alt=""  width={80}/>
                <p style={{ fontSize: '18px', fontFamily:'Outfit, sans-serif',fontWeight:'400' }} className='text-white'>Copyright © 2023 | Cloud 360 Services</p>

            </div>
            
        </div>
    );
};

export default Footer;