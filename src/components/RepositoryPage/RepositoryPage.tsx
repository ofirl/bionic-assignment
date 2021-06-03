import React from 'react';

import { Cell, Grid } from 'styled-css-grid';

import { createStyles, makeStyles, Theme } from '@material-ui/core';

import CommitList from './components/CommitList/CommitList';

import TopBar from './components/TopBar/TopBar';

const useStyles = makeStyles((theme: Theme) => createStyles({
    contentGrid: {
        padding: '2em',
    },
}));

const RepositoryPage = () => {
    const classes = useStyles();

    return (
        <>
            <TopBar />
            <Grid columns="1fr" rows="1fr" areas={[".", "commitList"]} className={classes.contentGrid}>
                <Cell area="commitList">
                    <CommitList />
                </Cell>
            </Grid>
        </>
    );
};

export default RepositoryPage;