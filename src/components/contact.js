import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Crystyano Almeida</h2>
                        <img
                            src="https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ligula
                            nec quam posuere, et ultrices enim ultricies. Interdum et malesuada fames ac ante
                            ipsum primis in faucibus. Praesent quis dictum libero, vitae viverra ex. In semper
                            arcu eros, vel malesuada felis porta eu. Duis porttitor, leo quis cursus tempor,
                urna dolor interdum tellus, at porta purus elit eu erat.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (12) 34567-8900
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    crystyano-95@live.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    crystrnuh
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>

                </Grid>

            </div>
        );
    }
}

export default Contact;