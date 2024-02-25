import React from 'react';
import './index.css';
import './App.css';
import './resume.css';
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
                    <div className="personalia">
                        <p className="title">Contact</p>
                        <ul className="info-list">
                            <li>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                <path opacity="1" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                                </svg>
                            </div>
                            <p>Johan van Dongen</p>
                            </li>
                            <li>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>

                            </div>
                            <p>johanpvandongen@gmail.com</p>
                            </li>
                            <li>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                            </div>
                            +31 6 37281796
                            </li>
                            <li>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                            </svg>
                            </div>
                            <div>
                                <p>Willem van Hornestraat 22</p>
                                <p>5611PV Eindhoven</p></div>
                            </li>  
                            <li>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/>
                                </svg>

                            </div>
                            <p>March 9, 2002</p>
                            </li>
                            <li>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                            </div>
                            <p>Yes</p>
                            </li>
                            <li>
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                            </svg>

                            </div>
                            <a href="https://dingdangdongen.nl">dingdangdongen.nl</a>
                            </li>
                        </ul>
                    </div>
                    <div className="personalia">
                        <p className="title">Languages</p>
                        <ul>
                        <li className="language">
                            Dutch 
                            <div className="rating">
                            <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            </div>
                        </li>
                        <li className="language">
                            English
                            <div className="rating">
                            <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            </div>
                        </li>
                        <li className="language">
                            German
                            <div className="rating">
                            <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            <svg className="checked" width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            <svg width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            <svg width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            <svg width="12" height="12"><circle cx="6" cy="6" r="6"/></svg>
                            </div>
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
