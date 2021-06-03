import React, { FormEvent, useEffect, useMemo, useRef, useState } from 'react';

import { Cell, Grid } from 'styled-css-grid';

import Loader from '../../../Loader/Loader';

import { TextField } from '@material-ui/core';

import CommitDetails from './components/CommitDetails/CommitDetails';

import { useGetRepositoryCommits } from '../../../../utils/queries/Github';

import { useRepositoryDefinition } from '../../../../context/RepositoryDefinitionContext';

import { useInView } from 'react-intersection-observer';
import { useMergeInfiniteQueryData } from '../../../../customHooks/useMergeInfiniteQueryData';


const CommitList = () => {
    const { owner, repository, branch } = useRepositoryDefinition();
    const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetRepositoryCommits(owner, repository, branch);
    const mergedData = useMergeInfiniteQueryData(data);

    const { ref: moreCommitsCellRef, inView: moreCommitsCellInView } = useInView({
        initialInView: true,
    });

    const [filter, setFilter] = useState('');
    const filterDebounceRef = useRef<NodeJS.Timeout>();

    const filteredData = useMemo(() => {
        const filterReg = new RegExp(filter);
        return mergedData.filter(commit => filterReg.test(commit.commit.author.name));
    }, [mergedData, filter]);

    useEffect(() => {
        if (moreCommitsCellInView && hasNextPage && !isFetchingNextPage)
            fetchNextPage();
    }, [fetchNextPage, hasNextPage, isFetchingNextPage, moreCommitsCellInView]);

    const handleFilterInput = (e: FormEvent<HTMLDivElement>) => {
        if (filterDebounceRef.current)
            clearTimeout(filterDebounceRef.current);

        filterDebounceRef.current = setTimeout(() => {
            setFilter((e.target as HTMLInputElement).value);
        }, 500);
    };

    return (
        <Grid columns="1fr" >
            <Cell>
                <TextField variant="outlined" onInput={handleFilterInput} />
            </Cell>
            <Cell>
                <Grid columns="1fr">
                    {
                        isLoading ?
                            <Loader />
                            :
                            filteredData?.map(commit => (
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