import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* React Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '300px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }}>
                            React Project #1
                    </CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* React Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '300px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }}>
                            React Project #2
                    </CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* React Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '300px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }}>
                            React Project #3
                    </CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>


            );
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Angular Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#000', height: '300px', background: 'url(https://angular.io/assets/images/logos/angular/angular.png) center / cover' }}>
                            Angular Project #1
                    </CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Angular Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#000', height: '300px', background: 'url(https://angular.io/assets/images/logos/angular/angular.png) center / cover' }}>
                            Angular Project #2
                    </CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Angular Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#000', height: '300px', background: 'url(https://angular.io/assets/images/logos/angular/angular.png) center / cover' }}>
                            Angular Project #3
                    </CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* VueJS Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#000', height: '300px', background: 'url(https://neoteric.eu/wp-content/uploads/2018/05/Vue.js_Logo.svg.png) center / cover' }}>
                            VueJS Project #1
                    </CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* VueJS Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#000', height: '300px', background: 'url(https://neoteric.eu/wp-content/uploads/2018/05/Vue.js_Logo.svg.png) center / cover' }}>
                            VueJS Project #2
                    </CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* VueJS Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#000', height: '300px', background: 'url(https://neoteric.eu/wp-content/uploads/2018/05/Vue.js_Logo.svg.png) center / cover' }}>
                            VueJS Project #3
                    </CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;