import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InfoBoxes.css';


const InfoBoxes = ({ label1, label2, title1, title2, p1, p2, learnMore = true, contact = true,  ...props }) => {

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

    return (
        <div className='info'>
                
                <div className='box box1'>

                    <div className='group'>
                        {/* <label>OUR MODEL</label> */}
                        <label>{label1}</label>
                        {/* <h2>Revenue-share model</h2> */}
                        <h2>{title1}</h2>
                    </div>

                    {/* <p>
                        Bestated keeps things simple. 
                        We partner with our attorneys in a revenue share by which you receive a flat percentage of the fee from each new customer. 
                        Reach out to learn more!
                    </p> */}
                    {p1}

                    {learnMore ? (
                        <p 
                            id='link-learn-more'
                            onClick={() => handlePageNavigation('employers')}
                        >
                            Learn more &gt;
                        </p>
                    ) : (
                        <></>
                    )}

                    {contact ? (
                        <p 
                            id='link-contact'
                            onClick={() => handlePageNavigation('contact')}
                        >
                            Get in contact &gt;
                        </p>
                    ) : (<></>)}

                    
                    {/* <a href='temp'>Learn more &gt;</a> */}
                </div>

                <div className='box box2'>
                    <div className='group'>
                        {/* <label>ELIGIBILITY</label> */}
                        <label>{label2}</label>
                        {/* <h2>Who should apply?</h2> */}
                        <h2>{title2}</h2>
                    </div>

                    {/* <p>
                        We are currently active in Texas and Missouri. 
                        <br/><br/>
                        If you are an attorney outside of these states and are interested in helping us expand to your state, please don’t hesitate to reach out!
                    </p> */}
                    {p2}
                    {/* <a href='temp'>Learn more &gt;</a> */}

                    {learnMore ? (
                        <p 
                        id='link-learn-more'
                            onClick={() => handlePageNavigation('employers')}
                        >
                            Learn more &gt;
                        </p>
                    ) : (<></>)}

                    {contact ? (
                        <p 
                            id='link-contact'
                            onClick={() => handlePageNavigation('contact')}
                        >
                            Get in contact &gt;
                        </p>
                    ) : (<></>)}


                </div>

            </div>
    );
};

export default InfoBoxes;