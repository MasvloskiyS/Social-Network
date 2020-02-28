import React from 'react';
import preloader from '../../assets/preloader.svg';
import classes from './Preloader.module.css';

const Preloader = (props) => {
    return (
        <div className={classes.preloaderWrapped}>
            <img className={classes.preloader} src={`${preloader}`} alt=""/>
        </div>
    );
};

export default Preloader;