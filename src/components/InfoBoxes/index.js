import React from 'react';
import usePageNavigation from '../../hooks/usePageNavigation';
import './InfoBoxes.css';


const InfoBoxes = ({ label1, label2, title1, title2, p1, p2, learnMore = true, contact = true,  ...props }) => {

    const handlePageNavigation = usePageNavigation();

    return (
        <div className='info'>
                
                <div className='box box1'>

                    <div className='group'>
                        <label>{label1}</label>
                        <h2>{title1}</h2>
                    </div>

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
                        <label>{label2}</label>
                        {/* <h2></h2> */}
                        <h2>{title2}</h2>
                    </div>

                    {/* */}
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