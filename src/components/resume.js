import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://dividendinvestorweb.files.wordpress.com/2017/08/male3-512.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Crystyano Almeida</h2>
                        <h4 style={{ color: 'grey' }}>Software Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ligula
                            nec quam posuere, et ultrices enim ultricies. Interdum et malesuada fames ac ante
                            ipsum primis in faucibus. Praesent quis dictum libero, vitae viverra ex. In semper
                            arcu eros, vel malesuada felis porta eu. Duis porttitor, leo quis cursus tempor,
                            urna dolor interdum tellus, at porta purus elit eu erat.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Hacker Way Menlo Park</p>
                        <h5>Phone</h5>
                        <p>(12) 34567-8900</p>
                        <h5>E-mail</h5>
                        <p>crystyano-95@live.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2002}
                            endYear={2006}
                            schoolName="Havart"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />

                        <Education
                            startYear={2007}
                            endYear={2009}
                            schoolName="University of British Columbia"
                            schoolDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>
                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="University of British Columbia"
                            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />

                        <Experience
                            startYear={2012}
                            endYear={2016}
                            jobName="University of British Columbia"
                            jobDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Skills</h2>
                        <Skills
                            skill="Javascript"
                            progress={100}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={70}
                        />
                        <Skills
                            skill="CSS"
                            progress={20}
                        />
                        <Skills
                            skill="React"
                            progress={20}
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;