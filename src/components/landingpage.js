import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://visaliaceramictile.com/wp-content/uploads/2016/03/avatar_smart_guy-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJs</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_black">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="http://github.com/WRCrys" rel="noopener noreferrer" target="_black">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Freecodecamp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_black">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                                {/* Youtube */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_black">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;