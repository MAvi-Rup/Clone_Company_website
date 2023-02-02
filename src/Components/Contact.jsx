import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='container mt-5 pt-5 mb-5 pb-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h2 style={{ color: '#0c58a5', fontSize: '42px', fontFamily: 'Outfit, sans-serif', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} className='mb-3'>Contact Us</h2>
                    <p>
                        <strong className='mb-2'>Address</strong> <br />
                        <a href="https://goo.gl/maps/vZXwH6aHxArcuavFA" className='text-decoration-none'>1st Floor, House 41, <br />Road 7, Block F Banani, <br />Dhaka-1213</a>
                    </p>
                    <p className='mt-5'>
                        <strong className='mb-2'>Email</strong> <br />
                        <a href="cloud360services@gmail.com" className='text-decoration-none'>cloud360services@gmail.com</a>
                    </p>

                </div>
                <div className='col-md-6'>
                    <form action="">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder='Enter Your Name'/>
                           
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"   placeholder='Enter Your Email'/>
                            
                        </div>
                        <div class="mb-3">
                            <label  class="form-label">Phone Number</label>
                            <input type="text" class="form-control" id="exampleInputEmail1"   placeholder='Enter Your Phone Number'/>
                            
                        </div>
                        <div class="mb-3">
                            <label  class="form-label">Your Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            
                        </div>
                        <button type="submit" class="btn btn-dark border-rounded">Submit</button>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Contact;