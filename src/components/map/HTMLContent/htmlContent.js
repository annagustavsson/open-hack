import React from 'react';

import classes from './htmlContent.module.css';
import { Html } from 'drei';

import {Section} from '../../utility/section';

const HTMLContent = (props) => {
    return (
        <Html fullscreen>
            <div className={classes.container}>
                <h1>Hej</h1>
            </div>
        </Html>
    )
}

export default HTMLContent;