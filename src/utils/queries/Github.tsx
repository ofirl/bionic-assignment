import { useInfiniteQuery, UseInfiniteQueryOptions } from "react-query";
import { RepositoryCommit } from "../types";

import { getRepositoryCommits } from "../api/Github";
import { commitsPerPage } from "../api/apiConsts";

export const useGetRepositoryCommits = (owner: string, repository: string, branch: string, queryOptions?: UseInfiniteQueryOptions<RepositoryCommit[]>) => {
    return useInfiniteQuery(['commits', owner, repository, branch], ({ pageParam: page = 1 }) => getRepositoryCommits({ owner, repository, branch, page }), {
        ...queryOptions,
        onSuccess: (posts) => {

            queryOptions?.onSuccess?.(posts);
        },
        getNextPageParam: (lastPage, allPages) => lastPage.length === commitsPerPage ? allPages.length + 1 : undefined,
    });
};