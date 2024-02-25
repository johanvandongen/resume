import React from 'react';
import './index.css';
import './App.css';
import './resume.css';
import { RatingItem } from './RatingItem';
import { SubSectionHeader } from './SubSectionHeader';
import { Section } from './Section';
import { SideCard } from './SideCard';

function App() {
  return (
    <>
        <div className='page'>
            <div className="container">
                <SideCard/>
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
                            </p>
                            <br></br>
                            <p>
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
                    <Section title={'Skills'} children={[
                        <ul>
                            <RatingItem label={'Javascript'} rating={10} maxRating={10}/>
                            <RatingItem label={'Typescript'} rating={10} maxRating={10}/>
                            <RatingItem label={'Python'} rating={8} maxRating={10}/>
                            <RatingItem label={'Java'} rating={3} maxRating={10}/>
                            <RatingItem label={'HTML'} rating={8} maxRating={10}/>
                            <RatingItem label={'CSS'} rating={8} maxRating={10}/>
                            <RatingItem label={'SQL'} rating={9} maxRating={10}/>
                            <RatingItem label={'React'} rating={9} maxRating={10}/>
                            <RatingItem label={'Version control (git)'} rating={8} maxRating={10}/>
                            <RatingItem label={'Problem solving'} rating={8} maxRating={10}/>
                            <RatingItem label={'Scrum'} rating={7} maxRating={10}/>
                        </ul>   
                    ]}/>
                </div>
            </div>
        </div>
        <div className='page'>
            <div className="container">
                <div className="rightPanel">
                    <Section title={'Certificates'} children={[
                        <div>
                            <SubSectionHeader title={'Goethe-Zertificat'} subtitle={''} date={'feb 2019'}/>
                            <p>German language course including a final exam for certificate.</p>
                        </div>
                    ]}/>
                    <Section title={'About'} children={[
                        <div>
                            <p>
                                Beyond my passion for programming, I am an avid sports enthusiast
                                actively involved in various activities and currently contributing to two
                                futsal teams. Snowboarding holds a special place in my heart, and my
                                enthusiasm led me to join Avalanche Boarders. Not only do I enjoy
                                regular snowboarding sessions, but I am also an integral part of the
                                Snow Committee, where I organize events like the Dutch Freestyle
                                Snowboard Championship and a large-scale snow trip for 120 people.
                            </p>
                            <br></br>
                            <p>
                                In the realm of programming, I find immense joy in leveraging my
                                skills to tackle challenges and create practical solutions. The
                                satisfaction derived from transforming an idea into a tangible
                                application is unparalleled. Whether it's developing a leaderboard
                                website for a fun activity with friends, crafting a sleek Q&A platform
                                for new hires, or creating custom maps for board games, I thrive on
                                turning concepts into impactful tools. My drive to keep learning and
                                building more powerful solutions fuels my commitment to excellence
                                in both programming and my diverse array of interests.
                            </p>
                        </div>
                    ]}/>
                </div>
                <SideCard/>
            </div>
        </div>
    </>
  );
}

export default App;
