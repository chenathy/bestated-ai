import React from 'react';
import { useMediaQuery } from 'react-responsive';
import TextAndBtn from '../../components/Text-and-Btn';
import CTA from '../../components/CTA';
import AboutLogo from '../../assets/images/about.jpg';
import JamesHeadshot from '../../assets/images/James-headshot.jpeg';
import TJHeadshot from '../../assets/images/TJ-headshot.jpeg';
import NishaHeadshot from '../../assets/images/Nisha-headshot.jpg';
import './About.css';


const About = () => {

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <div className='about'>

            <div className='story'>
                <div className='img-container'>
                    <img 
                        src={AboutLogo}
                        alt='About'
                    />
                </div>
                
                {/* Text and Button */}
                <TextAndBtn 
                    title={<h2>The Bestated Story</h2>}
                    passage={<p>
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
                    </p>}
                    buttons={[{ textDisplay: 'Learn more', onClickDestination: 'employers' }]}
                />

            </div>

            <div className='usage'>
                <TextAndBtn 
                    title={<h2>How genAI and LLMs play their part</h2>}
                    passage={<p>
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
                    </p>}
                />
            </div>

            <hr/>
        
            {/* CTA */}
            <CTA 
                h1Message={<h1>Ready to explore Bestated?</h1> }
                buttonInfo={{textDisplay: 'Get in contact', destinationPage: 'contact'}}
            />

        </div>
    );
};

export default About;