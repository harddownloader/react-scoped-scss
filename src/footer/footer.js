import React, {Component} from 'react';

import './footer.scoped.scss'

class Footer extends Component{
    constructor() {
        super();
    }

    render() {
        return(
            <div className="footer">
                <h2 className="footer-title">Footer</h2>
            </div>
        )
    }
}

export default Footer;