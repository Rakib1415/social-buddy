import React from 'react';
import {Link} from 'react-router-dom'

import Button from '@material-ui/core/Button'

const Header = () => {
    return (
        <div>
             <h1>Social Buddy</h1>
             <Link to="/posts"><Button variant="contained" color="primary">See All Post</Button></Link>
        </div>
    );
};

export default Header;