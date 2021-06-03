import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

export interface LoaderStyleProps {
    height: string,
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        loaderContainer: {
            display: 'flex',
            justifyContent: 'center',
            height: ({ height }: LoaderStyleProps) => height,
        },
        loaderBar: {
            width: '0.25em',
            height: '100%',
            marginRight: '0.25em',
            borderRadius: '200px',
            '-webkit-transform': 'scaleY(.2)',
            transform: 'scaleY(.2)',
            '-webkit-animation': 'loader-bars .5s ease-in infinite alternate',
            animation: 'loader-bars .5s ease-in infinite alternate',
            '&:nth-child(1)': {
                backgroundColor: '#41d04f',
            },
            '&:nth-child(2)': {
                backgroundColor: '#50d551',
                animationDelay: '0.1s',
            },
            '&:nth-child(3)': {
                backgroundColor: '#67dc55',
                animationDelay: '0.2s',
            },
            '&:nth-child(4)': {
                backgroundColor: '#7de358',
                animationDelay: '0.3s',
            },
            '&:nth-child(5)': {
                backgroundColor: '#99eb5c',
                animationDelay: '0.4s',
            },
            '&:nth-child(6)': {
                backgroundColor: '#b1f35f',
                animationDelay: '0.5s',
            },
            '&:nth-child(7)': {
                backgroundColor: '#c7f962',
                animationDelay: '0.6s',
            },
            '&:nth-child(8)': {
                backgroundColor: '#d6fe65',
                animationDelay: '0.7s',
            },
        },
    })
);

export interface LoaderProps {
    height?: string,
};
const Loader = ({ height = '3em' }: LoaderProps) => {
    const classes = useStyles({ height });

    return (
        <div className={classes.loaderContainer}>
            <div className={classes.loaderBar} />
            <div className={classes.loaderBar} />
            <div className={classes.loaderBar} />
            <div className={classes.loaderBar} />
            <div className={classes.loaderBar} />
            <div className={classes.loaderBar} />
            <div className={classes.loaderBar} />
            <div className={classes.loaderBar} />
        </div>
    );
};

export default Loader;