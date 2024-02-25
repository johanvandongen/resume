import React from 'react';
import './index.css';
import './App.css';
import './resume.css';
import { Contact } from './Contact';
import { Rating } from './Rating';
// import Image from './output.JPG';

function App() {
  return (
    
        <div className='page'>
            <div className="container">
                <div className="leftPanel">
                    <div className="shape2">
                        <svg width="300" height="500">
                            <circle cx="150" cy="-100" r="250" fill="#395a87" />
                        </svg>
                    </div>
                    <div className="shape">
                        <svg width="2000" height="2000">
                            <circle cx="1000" cy="100" r="1000" fill="#e6e6e6" />
                        </svg>
                    </div>
                    <div className="content-box">
                    <div className="profile">
                        <p>Johan van Dongen</p>
                        <div className="profile-picture">
                        <img src={require('./output.JPG')} alt='da'></img>
                        </div>
                    </div>
                    <Contact/>
                    <div className="personalia">
                        <p className="title">Languages</p>
                        <ul>
                        <li className="language">
                            Dutch 
                            <Rating rating={5} maxRating={5}/>
                        </li>
                        <li className="language">
                            English
                            <Rating rating={5} maxRating={5}/>
                        </li>
                        <li className="language">
                            German
                            <Rating rating={2} maxRating={5}/>
                        </li>
                        </ul>

                    </div>
                    <div className="personalia">
                        <p className="title">Hobbies and interests</p>
                        <ul className="hobby-list">
                        <li><p>Technology</p></li>
                        <li><p>Programming</p></li>
                        <li><p>Video editing</p></li>
                        <li><p>Snowboarding</p></li>
                        </ul>

                    </div>
                    <div className="personalia">
                        <p className="title">Profile</p>
                        <p>I am a reliable, organized and hard working individual. I enjoy learning new technologies and creating helpful tools. I set goals for myself and work these out in hobby projects. Ultimately I would love to make these tools bigger and more impactful in a team and company that aligns with my vision.</p>
                        
                    </div>
                    </div>
                </div>
                <div className="rightPanel">
                <div className="personalia">
                    <p className="title">Education</p>
                    <div className="section">
                    <div className="section-title"><p className="bold-title">Bachelor Computer Science</p><p className="under-title">sep 2020 - heden</p></div>
                    <p className="under-title">TU eindhoven, Eindhoven</p>
                    <p>My bachelor computer science equipped me with a comprehensive skill set to develop and design maintainable software systems 
                        I gained proficiency in program architecture, unit testing, and optimizing algorithms for efficiency and correctness. 
                        This education instilled a problem-solving mindset, honed through collaborative projects, ensuring effective communication and teamwork.</p>
                    </div>
                    <div className="section">
                    <div className="section-title"><p className="bold-title">VWO</p><p className="under-title">sep 2014 - jun 2020</p></div>
                    <p className="under-title">GSR, Rotterdam</p>
                    </div>
                </div>
                <div className="personalia">
                    <p className="title">Work experience</p>
                    <div className="section">
                    <div className="section-title"><p className="bold-title">Author, Developer</p><p className="under-title">apr 2022 - aug 2023</p></div>
                    <p className="under-title">Algebrakit, Eindhoven</p>
                    <p>
                        I primarily served as an author, digitizing math exercises from high school textbooks. 
                        {/* <br><br> */}
                        Additionally, I played a pivotal role in a project exploring the feasibility of developing a graphing tool for plotting implicit functions and inequalities. 
                        As part of a two-person team, we analyzed a provided paper, implemented the described algorithms, and partially built a graphing tool. Our efforts included reporting on the tool's drawbacks, advantages, challenging points, and providing an estimate for the expected duration.
                        The project showcased its potential and demonstrated the viability of creating a powerful visualization tool for mathematical concepts.
                    </p>
                    </div>
                    <div className="section">
                    <div className="section-title"><p className="bold-title">Orderpicker</p><p className="under-title">jun 2020 - sep 2020</p></div>
                    <p className="under-title">Colorfone, Rotterdam</p>
                    <p>
                        I served as an order picker in a warehouse, responsible for loading and unloading trucks as well as picking orders and other related tasks. 
                        This role provided valuable insights into real-world warehouse logistics, enhancing my understanding of efficient inventory management and distribution processes. 
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
  );
}

export default App;
