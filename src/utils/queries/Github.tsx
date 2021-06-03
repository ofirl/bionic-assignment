import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import { RepositoryCommit } from "../types";

import { getRepositoryCommits } from "../api/Github";
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