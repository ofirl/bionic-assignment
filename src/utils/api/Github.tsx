import { RepositoryCommit } from '../types';

import { baseGithubApiUrl, commitsPerPage } from './apiConsts';

import { simpleGetRequest } from './apiHelpers';

export type getRepositoryCommitsParams = {
    owner: string,
    repository: string,
    branch: string,
    page?: number
};
export const getRepositoryCommits = ({ owner, repository, branch, page = 1 }: getRepositoryCommitsParams) => {
    return simpleGetRequest<RepositoryCommit[]>(`${baseGithubApiUrl }/repos/${owner}/${repository}/commits?per_page=${commitsPerPage}&sha=${branch}&page=${page}`);
};