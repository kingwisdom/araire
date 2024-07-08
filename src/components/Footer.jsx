import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            {/* footer*/}
            <div className="container">
                <div className="footer-block">
                    {/* footer block */}
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="footer-widget">
                                <h2 className="widget-title">Address</h2>
                                <ul className="listnone contact">
                                    <li><i className="fa fa-map-marker" /> 56, De Lacy Street, Preston </li>
                                    <li><i className="fa fa-phone" /> +44 7876 108770</li>
                                    <li><i className="fa fa-envelope-o" /> oluwadunsijanet@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div className="footer-widget footer-social">
                                {/* social block */}
                                <h2 className="widget-title">Social Feed</h2>
                                <ul className="listnone">
                                    <li>
                                        <a href="#"> <i className="fa fa-facebook" /> Facebook </a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-twitter" /> Twitter</a></li>
                                </ul>
                            </div>
                            {/* /.social block */}
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            {/* <div className="footer-widget widget-newsletter">
                                {/* newsletter block *
                                <h2 className="widget-title">Newsletters</h2>
                                <p>Enter your email address to receive new patient information and other useful information right to your inbox.</p>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Email Address" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">Subscribe</button>
                                    </span>
                                </div>
                            </div> */}
                            {/* newsletter block */}
                        </div>
                    </div>
                    <div className="tiny-footer">
                        {/* tiny footer block */}
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="copyright-content">
                                    <p>© Araire 2024 | all rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.tiny footer block */}
                </div>
                {/* /.footer block */}
            </div>
        </div>
    )
}

export default Footer