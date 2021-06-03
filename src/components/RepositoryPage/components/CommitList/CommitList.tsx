import React, { useEffect } from 'react';

import { Cell, Grid } from 'styled-css-grid';

import Loader from '../../../Loader/Loader';

import { useGetRepositoryCommits } from '../../../../utils/queries/Github';

import { useRepositoryDefinition } from '../../../../context/RepositoryDefinitionContext';

import { useInView } from 'react-intersection-observer';
import { useMergeInfiniteQueryData } from '../../../customHooks/useMergeInfiniteQueryData';
import CommitDetails from './components/CommitDetails/CommitDetails';

const CommitList = () => {
    const { owner, repository, branch } = useRepositoryDefinition();
    const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetRepositoryCommits(owner, repository, branch);
    const mergedData = useMergeInfiniteQueryData(data);

    console.log(data);
    console.log(mergedData);

    const { ref: moreCommitsCellRef, inView: moreCommitsCellInView } = useInView({
        initialInView: true,
    });

    useEffect(() => {
        if (moreCommitsCellInView && hasNextPage && !isFetchingNextPage)
            fetchNextPage();
    }, [fetchNextPage, hasNextPage, isFetchingNextPage, moreCommitsCellInView]);

    return (
        <Grid columns="1fr" //className={classes.newsfeedPageGrid}
        >
            <Cell>
                <Grid columns="1fr">
                    {
                        isLoading ?
                            <Loader />
                            :
                            mergedData?.map(commit => (
                                <CommitDetails key={commit.sha} commit={commit} />
                            ))
                    }
                </Grid>
            </Cell>
            <Cell ref={moreCommitsCellRef}>
                {
                    isFetchingNextPage &&
                    <Loader />
                }
            </Cell>
        </Grid>
    );
};

export default CommitList;