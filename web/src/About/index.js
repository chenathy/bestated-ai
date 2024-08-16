import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import StoryIcon from './Story.png';
import JamesIcon from './James.png';
import TJIcon from './TJ.png';
import ChenIcon from './Chen.png';
import Nisha from './Nisha.png';


const About = () => {

    const navigate = useNavigate();
    const handlePageNavigation= (page) => {
        const pagePrefix = `/${page}`
        navigate(pagePrefix);
        window.scrollTo(0, 0);
    }

    return (
        <div className='About'>
            
            <div className='Story'>

                <img
                    src={StoryIcon}
                    alt='StoryIcon'
                />

                <div className='text-btn'>
                    <h1>The Bestated Story</h1>

                    <p>
                        After the untimely death of a family member, our founder James Koester encountered a challenge many American families face: navigating legal complexities amid the grief of loss. 
                        This difficult experience thrust his family into the probate process, leaving James determined to find a better way.
                        <br/><br/>  
                        James discovered that a significant number of people still lack access to or education about estate planning. 
                        In fact, 72% of adults under the age of 50 don’t have a will.
                        <br/><br/> 
                        While some competitors offer solutions to help individuals be more self-sufficient and rely less on lawyers, the responsibility still falls on the individual to find these solutions.
                        <br/><br/> 
                        In James’ mind, wills are essential documents–right beside birth certificates, driver’s licenses, and passports. 
                        He envisioned a world in which estate planning could be as straightforward as signing up for a life insurance policy, funded or subsidized by employers just like other benefits.
                        <br/><br/> 
                        <span>Harnessing the power of cutting-edge generative AI and Large Language Model (LLM) technologies, the idea for Bestated was born.</span>
                    </p>

                    <button 
                        className='contact-btn'
                        onClick={() => handlePageNavigation('employers')}
                    >
                        Learn more
                    </button>
                </div> 
            </div>


            <div className='Usage'>
                <div className='text-btn'>
                    <h2>How genAI and LLMs play their part</h2>
                    <p>
                        The problem with the current estate planning process is that legal documents are complex, 
                        and many “do-it-yourself” solutions fall off the rails when a family’s unique circumstances don't fit the template. 
                        However, engaging an attorney significantly increases costs.
                        <br/><br/>  
                        <span>
                            Bestated aims to solve these issues by: 
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;1) increasing accessibility and 
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;2) reducing costs. 
                        </span>
                        <br/><br/>
                        We make estate planning more accessible by having employers offer our plans to their employees. 
                        We lower costs by using generative AI and Large Language Models (LLMs) to draft legal documents, involving our attorney partners only to verify accuracy.
                    </p>
                    <button 
                        className='contact-btn'
                        onClick={() => handlePageNavigation('employers')}
                    >
                        Learn more
                    </button>
                </div>
            </div>  
            
            <hr/>

            <div className='Team'>
                <h2>The Bestated Team</h2>
                <div className='members'>

                    <div className='member'>
                        <img
                            src={JamesIcon}
                            alt='CEO Icon'
                        />
                        <a href='https://www.linkedin.com/in/jameskoester/' target='_blank'>James Koester</a>
                        <p>Founder & CEO</p>

                    </div>

                    <div className='member'>
                        <img
                            src={TJIcon}
                            alt='Sales Icon'
                        />
                        <a>TJ Wolfe</a>
                        <p>VP, Sales</p>

                    </div>

                    <div className='member'>
                        <img
                            src={ChenIcon}
                            alt='Technology Icon'
                        />
                        <a>Chen Yukai</a>
                        <p>VP, Technology</p>

                    </div>

                    <div className='member'>
                        <img
                            src={Nisha}
                            alt='Design Icon'
                        />
                        <a>Nisha Katti</a>
                        <p>VP, Design</p>

                    </div>

                </div>
            </div>
            

            <div className='CTA'>
                <h1>Ready to explore Bestated?</h1> 
                <div className='btn'>
                    <button 
                        className='contact-btn'
                        onClick={() => handlePageNavigation('contact')}
                    >
                        Get in contact
                    </button>
                </div>
            </div>

        </div>


    )
};

export default About;
