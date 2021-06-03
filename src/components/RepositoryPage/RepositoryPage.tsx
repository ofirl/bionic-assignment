import React from 'react';

import { Cell, Grid } from 'styled-css-grid';

import { AppBar, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

import CommitList from './components/CommitList/CommitList';

import { useGetRepositoryCommits } from '../../utils/queries/Github';

import { useRepositoryDefinition } from '../../context/RepositoryDefinitionContext';

import { useMergeInfiniteQueryData } from '../customHooks/useMergeInfiniteQueryData';

const useStyles = makeStyles((theme: Theme) => createStyles({
    contentGrid: {
        padding: '2em',
    },
}));

const RepositoryPage = () => {
    const { owner, repository, branch } = useRepositoryDefinition();

    const { data, isLoading, isFetchingNextPage } = useGetRepositoryCommits(owner, repository, branch);

    const mergedData = useMergeInfiniteQueryData(data);

    console.log(mergedData);

    const classes = useStyles();

    return (
        <>
            <AppBar position="sticky">
                <Typography variant="h6">
                    {`${owner}/${repository}/${branch}`}
                </Typography>
            </AppBar>
            <Grid columns="1fr" rows="1fr" areas={[".", "commitList"]} className={classes.contentGrid}>
                <Cell area="commitList">
                    <CommitList />
                </Cell>
            </Grid>
        </>
    );
};

export default RepositoryPage;