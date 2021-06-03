import { RepositoryCommit } from '../types';

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

export type getRepositoryCommitsParams = {
    owner: string,
    repository: string,
    branch: string,
    page?: number
};
export const getRepositoryCommits = ({ owner, repository, branch, page = 1 }: getRepositoryCommitsParams) => {
    return simpleGetRequest<RepositoryCommit[]>(`${baseGithubApiUrl}/repos/${owner}/${repository}/commits?per_page=${commitsPerPage}&sha=${branch}&page=${page}`, {
        dataParser: parseCommits,
    });
};