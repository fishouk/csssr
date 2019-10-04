import React, { Component } from 'react';
import { Container } from 'react-bootstrap/';
import { NavLink  } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <Container className="top_navigation">
                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item large">
                        <NavLink exact className="nav-link" to='/'>Home</NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink  className="nav-link" to='/news'>News</NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink  className="nav-link" to='/profile'>Profile</NavLink >
                    </li>
                </ul>
            </Container>
            
        );
    }
}

export default Navigation;
