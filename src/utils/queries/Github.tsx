import { useInfiniteQuery, UseInfiniteQueryOptions, useQuery, UseQueryOptions } from "react-query";
import { RepositoryBranch, RepositoryCommit } from "../types";

import { getRepositoryBranches, getRepositoryCommits } from "../api/Github";
import { commitsPerPage } from "../api/apiConsts";
import { useSnackbar } from "notistack";

export const useGetRepositoryCommits = (owner: string, repository: string, branch: string, queryOptions?: UseInfiniteQueryOptions<RepositoryCommit[]>) => {
    const { enqueueSnackbar } = useSnackbar();

    return useInfiniteQuery(['commits', owner, repository, branch], ({ pageParam: page = 1 }) => getRepositoryCommits({ owner, repository, branch, page }), {
        ...queryOptions,
        onSuccess: (posts) => {

            queryOptions?.onSuccess?.(posts);
        },
        onError: (err) => {
            enqueueSnackbar('Error loading commits', { variant: 'error' });
        },
        getNextPageParam: (lastPage, allPages) => lastPage.length === commitsPerPage ? allPages.length + 1 : undefined,
    });
};

export const useGetRepositoryBranches = (owner: string, repository: string, queryOptions?: UseQueryOptions<RepositoryBranch[]>) => {
    const { enqueueSnackbar } = useSnackbar();

    return useQuery(['branches', owner, repository], () => getRepositoryBranches({ owner, repository }), {
        ...queryOptions,
        onSuccess: (posts) => {

            queryOptions?.onSuccess?.(posts);
        },
        onError: (err) => {
            enqueueSnackbar('Error loading branches', { variant: 'error' });
        },
    });
};