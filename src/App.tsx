import React from 'react';
import './index.css';
import './App.css';
import './resume.css';
import { RatingItem } from './RatingItem';
import { SubSectionHeader } from './SubSectionHeader';
import { Section } from './Section';
import { SideCard } from './SideCard';
import { SimpleList, SimpleListComp } from './SimpleList';
import { WordGrid } from './WordGrid';

function App() {
  return (
    <>
        <div className='page'>
            <div className="container">
                <SideCard/>
                <div className="rightPanel">
                <Section title={'Profile'} children={[
                        <div>
                            <p>
                                I am a reliable, organized and hard working individual. <b>I enjoy learning
new technologies</b> and creating helpful tools. I set goals for myself and work
these out in hobby projects. Ultimately I would love to make these tools
bigger and more impactful in a team and company that aligns with my
vision.

                            </p>
                            {/* <p>
                            Hi! I'm Johan, a computer science student from Eindhoven. I love programming, but this year I decided to take a break and follow my passion for snowboarding! I've always loved snowboarding and will be moving to Austria with a friend to spend the winter in Mayrhofen. I especially enjoy freestyle snowboarding, and my goal is to land a 1080 by the end of the season.
                            <br></br><br></br>
                            I genuinely enjoy teaching. This season, <b>I'd love to become a snowboard instructor</b> so I can share my passion and enjoy teaching others.
                            <br></br>
                            On top of that, I'm motivated to become fluent in German during this time.
                            </p> */}
                        </div>
                    ]}/>    
                    <Section title={'Education'} children={[
                        <div>
                            <SubSectionHeader title={'Master Computer Science'} subtitle={'TU eindhoven, Eindhoven'} date={'feb 2024 - current'}/>
                            <p>Courses that interested me:</p>
                                <SimpleList items={[
                                    'Language Virtual Machines Design and Implementation',
                                    'Engineering data-intensive systems',
                                    'Big Data Management',]}/>
                        </div>,
                        <div>
                            <SubSectionHeader title={'Bachelor Computer Science'} subtitle={'TU eindhoven, Eindhoven'} date={'sep 2020 - feb 2024'}/> 
                            <p>Grade: <i>Cum Laude</i></p>
                        </div>,
                        <div>
                            <SubSectionHeader title={'VWO'} subtitle={'GSR, Rotterdam'} date={'sep 2014 - jun 2020'}/>
                        </div>
                    ]}/>

                    <Section title={'Work experience'} children={[
                        <div>
                            <SubSectionHeader title={'Sport Schiestl'} nextTitle={'Snowboard instructor'} subtitle={''} date={'dec 2025 - apr 2026'}/>
                        </div>,
                        <div>
                            <SubSectionHeader title={'Shinto Labs'} nextTitle={'Developer'} subtitle={''} date={'june 2025 - sep 2025'}/>
                            <p>
                                Data migration of 100+ municipalities to a new housing project data model (100-hour business case).
                            </p>
                        </div>,
                        <div>
                            <SubSectionHeader title={'CleverMobi'} nextTitle={'Developer'} subtitle={''} date={'july 2024 - sep 2025'}/>
                            <p>
                                {/* Developing a CRM system for 50+ Mobiel, a Dutch network provider. */}
                                Software developer (Symfony/Vue) creating a <b>CRM system for 50+mobiel</b>. Including improving the pipeline, creating new pages, adding test cases and adding new features such as <b>reCAPTCHA</b>.
                            </p>
                        </div>,
                        <div>
                            <SubSectionHeader title={'Algebrakit'} nextTitle={'Author, Developer'} subtitle={''} date={'apr 2022 - aug 2023'}/>
                            <p>
                                Digitizing math exercises from high school textbooks.
Additionally, I worked on a project exploring the feasibility of developing a
 <b> graphing tool</b> for plotting implicit functions and inequalities using
TypeScript.

                                {/* Worked on an educational platform for high school math, digitizing exercises and developing a separate graphing tool. */}
                            </p>
                        </div>,
                        <div>
                            <SubSectionHeader title={'Colorfone'} nextTitle={'Order picker'} subtitle={''} date={'jun 2020 - sep 2020'}/>
                            <p>
                                Picked and packed orders, loaded/unloaded trucks, and handled other warehouse tasks.
                            </p>
                        </div>
                    ]}/>

                    <Section title={'Hobby projects'} children={[
                        <div>
                            <SubSectionHeader title={'Sudoku solver'} subtitle={''} date={'2024'} titleLink='https://boardassist.dingdangdongen.nl/'/>
                            <p>A web-based game assistant for solving Sudoku's, generating catan maps and other logic puzzles.</p>
                                {/* <a href='https://boardassist.dingdangdongen.nl/'>a</a></p> */}
                        </div>,
                        <div>
                            <SubSectionHeader title={'Avalanche Drinking Leaderboard'} subtitle={''} date={'2023'} titleLink='https://www.dingdangdongen.nl/projects/leaderboard/leaderboard.html'/>
                            <p>A web-based leaderboard for my snowboard association, tracking the number of drinks consumed over the year.</p>
                            {/* <a href='https://www.dingdangdongen.nl/projects/leaderboard/leaderboard.html'>a</a> */}
                        </div>,
                        <div>
                            <SubSectionHeader title={'Algebrakit Q&A platform'} subtitle={''} date={'2023'} titleLink='https://www.dingdangdongen.nl/projects/authorQuestions/authorQuestions.html'/>
                            <p>A web-based project for reading in google documents and loading it into a database to solve a problem at work.</p>
                            {/* <a href='https://www.dingdangdongen.nl/projects/authorQuestions/authorQuestions.html'>a</a> */}
                        </div>,
                        // <div>
                        //     <SubSectionHeader title={'Algorithm visualiser'} subtitle={''} date={'nov 2025'}/>
                        //     <p>A web-based tool for visualizing and understanding various algorithms, such as sorting algorithms, pathfinding algorithms, and more.</p>
                        // </div>,
                        // <div>
                        //     <SubSectionHeader title={'NEAT Evolution Simulation'} subtitle={''} date={'2022'} titleLink='https://www.youtube.com/watch?v=rhjgI3oPEO0'/>
                        //     <p>An evolutionary simulation using a generic algorithm (NEAT).</p>
                        //     {/* <a href='https://www.dingdangdongen.nl/projects/authorQuestions/authorQuestions.html'>a</a> */}
                        // </div>,
                        // <p><br></br>and many more!</p>
                    ]}/>
                    
                    <Section title={'Certificates'} children={[
                        <div>
                            <SubSectionHeader title={'Snowboardlehrer Anwärter'} subtitle={''} date={'nov 2025'}/>
                            <p>Certificate to work as a snowboard instructor in Austria.</p>
                        </div>,
                        <div>
                            <SubSectionHeader title={'European First Aid Certificate (EFAC)'} subtitle={''} date={'july 2024'}/>
                            <p>Certificate based on European First Aid guidelines.</p>
                        </div>,
                        <div>
                            <SubSectionHeader title={'Goethe-Zertificat B1'} subtitle={''} date={'feb 2019'}/>
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
