import { RepositoryBranch, RepositoryCommit } from '../types';

import { baseGithubApiUrl, commitsPerPage } from './apiConsts';

import { simpleGetRequest } from './apiHelpers';

const parseCommitData = (commit: RepositoryCommit) => {
    commit.commit.author.date = new Date(commit.commit.author.date);

    return commit;
};

const parseCommits = (commits: RepositoryCommit[]) => {
    commits.forEach(c => {
        parseCommitData(c);
    });

    return commits;
}

export type GetRepositoryCommitsParams = {
    owner: string,
    repository: string,
    branch: string,
    page?: number
};
export const getRepositoryCommits = ({ owner, repository, branch, page = 1 }: GetRepositoryCommitsParams) => {
    return simpleGetRequest<RepositoryCommit[]>(`${baseGithubApiUrl}/repos/${owner}/${repository}/commits?per_page=${commitsPerPage}&sha=${branch}&page=${page}`, {
        dataParser: parseCommits,
    });
};

export type GetRepositoryBranchesParams = {
    owner: string,
    repository: string,
};
export const getRepositoryBranches = ({ owner, repository }: GetRepositoryBranchesParams) => {
    return simpleGetRequest<RepositoryBranch[]>(`${baseGithubApiUrl}/repos/${owner}/${repository}/branches?per_page=100`,);
};