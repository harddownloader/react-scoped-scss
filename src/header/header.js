import React, {Component} from 'react';

import './header.scoped.scss'

class Header extends Component{
    constructor() {
        super();
    }

    render() {
        return(
            <div className="header">
                <h2 className="header-title">Header</h2>
            </div>
        )
    }
}

export default Header;