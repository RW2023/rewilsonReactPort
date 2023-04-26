import React from 'react';
import './Projects.css';
import qrcodeImage from './qrcode.png';
import tippImage from './tipp.png';
import femImage from './FEM.png';


class Projects extends React.Component {
    render() {
        return (
            <div className='project_container' id='projects'>
                <h2>Projects</h2>
                <ul className="cards">
                    <li className="cards_item">
                        <div className="card">
                          {/* project 1 Start. Will likely end up splitting these into own component */}
                                <a href="https://rw2023qrcode.netlify.app/" target='_blank'>
                                <div className="card_image  img-fluid"><img src={qrcodeImage} alt="QR Code Screenshot" /></div>
                                </a>
                           

                            <div className="card_content project">
                                <h3 className="card_title">Project 1</h3>
                                <a href="https://github.com/RW2023/qrCode" target='_blank'>
                                    <button className="btn card_btn" id='readMore'>Read More</button>
                                </a>
                                <p className="card_text">QrCode Challenge from Front End Mentor</p>
                                <p>This was my very first challenge. I learned a lot of the fundamentals of CSS building it.</p>
                                
                            </div>

                            {/* Project 2 Start */}
                            <a href="https://femtipcalculator2023.netlify.app/" target='_blank'>
                                <div className="card_image  img-fluid"><img src={tippImage} alt="Tipp Calculator Screenshot" /></div>
                            </a>
                            <div className="card_content project">
                                <h3 className="card_title">Project 2</h3>
                                <a href="https://github.com/RW2023/tip-calculator-app" target='_blank'>
                                    <button className="btn card_btn" id='readMore'>Read More</button>
                                </a>
                                <p className="card_text">Tip Calculator Challenge from Front End Mentor</p>
                                <p>This was my very first JavaScript challenge. I learned a lot about conditionals and the basics of working with functions.</p>
                               
                            </div>
                            {/* Project 2 End and Project 3 Start */}
                            <a href="https://devopsdiscord.netlify.app/" target='_blank'>
                                <div className="card_image  img-fluid"><img src={femImage} alt="Tipp Calculator Screenshot" /></div>
                            </a>
                            <div className="card_content project">
                                <h3 className="card_title">Project 3</h3>
                                <a href="https://github.com/RW2023/Dev-Ops-Community" target='_blank'>
                                    <button className="btn card_btn" id='readMore'>Read More</button>
                                </a>
                                <p className="card_text">Front End Collab Discord Community</p>
                                <p>This is the Landing page to my Discord Server. Front End Collab is a community of beginner front end developers, like myself.</p>
                                <p>We have over 90 members at the time of this writing . </p>
                               
                            </div>
                            {/* Project 3 End */}
                        </div>
                    </li>
                    {/* ... (all other cards) */}
                </ul>
            </div>
        );
    }
}

export default Projects;
