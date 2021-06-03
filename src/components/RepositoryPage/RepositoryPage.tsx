import React from 'react';

import { Cell, Grid } from 'styled-css-grid';

import { createStyles, makeStyles, Theme } from '@material-ui/core';

import CommitList from './components/CommitList/CommitList';

import TopBar from './components/TopBar/TopBar';
import CommitStatistics from './components/CommitStatistics/CommitStatistics';

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
            <Grid columns="1fr" rows="20em 1fr" areas={["heatmap", "commitList"]} className={classes.contentGrid}>
                <Cell area="heatmap">
                    <CommitStatistics />
                </Cell>
                <Cell area="commitList">
                    <CommitList />
                </Cell>
            </Grid>
        </>
    );
};

export default RepositoryPage;