import React from 'react';
import './index.css';
import './App.css';
import './resume.css';
import { RatingItem } from './RatingItem';
import { SubSectionHeader } from './SubSectionHeader';
import { Section } from './Section';
import { SideCard } from './SideCard';
import { SimpleList } from './SimpleList';

function App() {
  return (
    <>
        <div className='page'>
            <div className="container">
                <SideCard/>
                <div className="rightPanel">
                <Section title={'Profile'} children={[
                        <div>
                            <p>I am a <b>reliable</b>, <b>organized</b> and <b>hard working</b> individual. <b>I enjoy learning</b> new technologies and creating helpful tools. I set goals for myself and work these out in hobby projects. Ultimately I would love to make these tools bigger and more impactful in a team and company that aligns with my vision.</p>
                            <br></br>
                            <p>
                                Beyond my passion for programming, I am an avid <b>sports enthusiast </b>
                                actively involved in various activities and currently contributing to two
                                futsal teams. Snowboarding holds a special place in my heart, and my
                                enthusiasm led me to join Avalanche Boarders. Not only do I enjoy
                                regular snowboarding sessions, but I am also an <b>integral part of the
                                Snow Committee</b>, where I organize events like the Dutch Freestyle
                                Snowboard Championship and a large-scale snow trip for 120 people.
                            </p>
                        </div>
                    ]}/>
                    <Section title={'Education'} children={[
                        <div>
                            <SubSectionHeader title={'Master Computer Science'} subtitle={'TU eindhoven, Eindhoven'} date={'feb 2024 - current'}/>
                            <SimpleList items={['Big Data Management']}/>
                        </div>,
                        <div>
                            <SubSectionHeader title={'Bachelor Computer Science'} subtitle={'TU eindhoven, Eindhoven'} date={'sep 2020 - feb 2024'}/> 
                            <p>Grade: <i>Cum Laude</i></p>
                            <p>
                            This education instilled a problem-solving mindset and helped me develop and design maintainable software systems.
                            <br></br>
                            Courses I found interesting:
                            <SimpleList items={['Datamodeling and Databases', 'Data-intensive systems and applications', 'Data structures']}/>
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
                            </p>
                            <br></br>
                            {/* <p>
                                Additionally, I played a pivotal role in a project exploring the feasibility of developing a graphing tool for plotting implicit functions and inequalities. 
                                As part of a two-person team, we analyzed a provided paper, implemented the described algorithms, and partially built a graphing tool. Our efforts included reporting on the tool's drawbacks, advantages, challenging points, and providing an estimate for the expected duration.
                                The project showcased its potential and demonstrated the viability of creating a powerful visualization tool for mathematical concepts.
                            </p> */}
                            <p>
                                Additionally, I played a pivotal role in a project exploring the feasibility of developing a <b>graphing tool</b> for plotting implicit functions and inequalities using <i>TypeScript</i>. 
                            </p>
                        </div>,
                        <div>
                            <SubSectionHeader title={'Orderpicker'} subtitle={'Colorfone, Rotterdam'} date={'jun 2020 - sep 2020'}/>
                            <p>
                                I served as an order picker in a warehouse, responsible for loading and unloading trucks and other related tasks. 
                                This role provided valuable insights into real-world warehouse logistics, enhancing my understanding of efficient inventory management and distribution processes. 
                            </p>
                        </div>
                    ]}/>
                    
                    <Section title={'Certificates'} children={[
                        <div>
                            <SubSectionHeader title={'Goethe-Zertificat'} subtitle={''} date={'feb 2019'}/>
                            <p>German language course including a final exam for certificate.</p>
                        </div>
                    ]}/>
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
