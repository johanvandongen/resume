import React from 'react';
import './index.css';
import './App.css';
import './resume.css';
import { Contact } from './Contact';
import { RatingItem } from './RatingItem';
import { SubSectionHeader } from './SubSectionHeader';
import { Section } from './Section';
import { SimpleList } from './SimpleList';

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
                        <Section title={'Languages'} children={[
                            <ul>
                                <RatingItem label={'Dutch'} rating={5} maxRating={5}/>
                                <RatingItem label={'English'} rating={5} maxRating={5}/>
                                <RatingItem label={'German'} rating={2} maxRating={5}/>
                            </ul>
                        ]}/>
                        <Section title={'Hobbies and interests'} children={[
                            <SimpleList items={['Technology', 'Programming', 'Video editing', 'Snowboarding']}/>
                        ]}/>
                        <Section title={'Profile'} children={[<p>I am a reliable, organized and hard working individual. I enjoy learning new technologies and creating helpful tools. I set goals for myself and work these out in hobby projects. Ultimately I would love to make these tools bigger and more impactful in a team and company that aligns with my vision.</p>]}/>
                    </div>
                </div>
                <div className="rightPanel">
                    <Section title={'Education'} children={[
                        <div>
                            <SubSectionHeader title={'Bachelor Computer Science'} subtitle={'TU eindhoven, Eindhoven'} date={'sep 2020 - heden'}/>
                            <p>
                                My bachelor computer science equipped me with a comprehensive skill set to develop and design maintainable software systems 
                                I gained proficiency in program architecture, unit testing, and optimizing algorithms for efficiency and correctness. 
                                This education instilled a problem-solving mindset, honed through collaborative projects, ensuring effective communication and teamwork.
                            </p>
                        </div>,
                        <div>
                            <SubSectionHeader title={'VWO'} subtitle={'GSR, Rotterdam'} date={'sep 2014 - jun 2020'}/>
                        </div>
                    ]}/>

                    <Section title={'Work experience'} children={[
                        <div>
                            <SubSectionHeader title={'Author, Developer'} subtitle={'Algebrakit, Eindhoven'} date={'apr 2022 - aug 2023'}/>
                            <p>
                                I primarily served as an author, digitizing math exercises from high school textbooks. 
                                {/* <br><br> */}
                                Additionally, I played a pivotal role in a project exploring the feasibility of developing a graphing tool for plotting implicit functions and inequalities. 
                                As part of a two-person team, we analyzed a provided paper, implemented the described algorithms, and partially built a graphing tool. Our efforts included reporting on the tool's drawbacks, advantages, challenging points, and providing an estimate for the expected duration.
                                The project showcased its potential and demonstrated the viability of creating a powerful visualization tool for mathematical concepts.
                            </p>
                        </div>,
                        <div>
                            <SubSectionHeader title={'Orderpicker'} subtitle={'Colorfone, Rotterdam'} date={'jun 2020 - sep 2020'}/>
                            <p>
                                I served as an order picker in a warehouse, responsible for loading and unloading trucks as well as picking orders and other related tasks. 
                                This role provided valuable insights into real-world warehouse logistics, enhancing my understanding of efficient inventory management and distribution processes. 
                            </p>
                        </div>
                    ]}/>
                </div>
            </div>
        </div>
  );
}

export default App;
