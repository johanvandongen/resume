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
                            Hi! I'm Johan, a computer science student from Eindhoven. I love programming, but this year I decided to take a break and follow my passion for snowboarding! I've always loved snowboarding and will be moving to Austria with a friend to spend the winter in Mayrhofen. I especially enjoy freestyle snowboarding, and my goal is to land a 1080 by the end of the season.
                            <br></br><br></br>
                            I genuinely enjoy teaching. This season, <b>I'd love to become a snowboard instructor</b> so I can share my passion and enjoy teaching others.
                            <br></br>
                            On top of that, I'm motivated to become fluent in German during this time.
                            </p>
                        </div>
                    ]}/>
                    <Section title={'Snowboarding experience'} children={[
                        <SimpleListComp items={[
                            <p>7 Years Snowboarding experience <span className='sdetail'>(age 14-23)</span>; Skiing <span className='sdetail'>(age 8-14)</span></p>,
                            <p>Biweekly indoor snowboarding in the Netherlands</p>,
                            <p>Scheduled to obtain <b>Anwärter</b> certification (SBSSV, Kaprun, 10-19 Nov 2025)</p>,
                            <div>
                                Member of ESSV Avalanche Boarders <span className='sdetail'>(Dutch student freestyle snowboard association)</span>
                                <SimpleListComp items={[
                                    <p>Taught informal basic snowboarding and freestyle lessons at club level (non-certified)</p>,
                                    <p>Board year (Secretary), Snow Committee</p>,
                                    <p>Organized 2 large snowtrips to Risoul with freestyle coaching for 120+ participants</p>,
                                    <p>Organized a Dutch Freestyle Snowboarding Championship in cooperation with NSKIV</p>,
                                    <p>Organized smaller jam events, including designing and building our own indoor park</p>
                                    ]}/>
                            </div>
                        ]} />
                    ]}/>
                    <Section title={'Education'} children={[
                        <div>
                            <SubSectionHeader title={'Master Computer Science'} subtitle={'TU eindhoven, Eindhoven'} date={'feb 2024 - current'}/>
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
                            <SubSectionHeader title={'Shinto Labs'} nextTitle={'Developer'} subtitle={''} date={'june 2025 - current'}/>
                            <p>
                                Data migration of 100+ municipalities to a new housing project data model (100-hour business case).
                            </p>
                        </div>,
                        <div>
                            <SubSectionHeader title={'CleverMobi'} nextTitle={'Developer'} subtitle={''} date={'july 2024 - current'}/>
                            <p>
                                Developing a CRM system for 50+ Mobiel, a Dutch network provider.
                            </p>
                        </div>,
                        <div>
                            <SubSectionHeader title={'Algebrakit'} nextTitle={'Author, Developer'} subtitle={''} date={'apr 2022 - aug 2023'}/>
                            <p>
                                Worked on an educational platform for high school math, digitizing exercises and developing a separate graphing tool.
                            </p>
                        </div>,
                        <div>
                            <SubSectionHeader title={'Colorfone'} nextTitle={'Order picker'} subtitle={''} date={'jun 2020 - sep 2020'}/>
                            <p>
                                Picked and packed orders, loaded/unloaded trucks, and handled other warehouse tasks.
                            </p>
                        </div>
                    ]}/>
                    
                    <Section title={'Certificates'} children={[
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
