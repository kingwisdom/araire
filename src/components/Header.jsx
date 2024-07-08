import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        {/* <a href="/"><img src="asset/images/logo.png" alt="Hair" /></a> */}
                        <p>ARAIRE</p>
                    </div>
                    <div className="col-lg-8 col-md-4 col-sm-12 col-xs-12">
                        <div className="navigation">
                            <div id="navigation">
                                <ul>
                                    <li className="active"><a href="/" title="Home">Home</a></li>

                                    {/* <li className="has-sub"><a href="#" title="Blog ">News</a> </li> */}

                                    <li><a href="/about" title="About Us">About</a> </li>
                                    <li><a href="https://forms.gle/inyCg2UT81ZMYqNW9" target='_blank' title="Book">Book Appointment</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header