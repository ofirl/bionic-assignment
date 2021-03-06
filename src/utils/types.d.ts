export type RepositoryDefinition = {
    owner: string,
    repository: string,
    branch: string,
};

export type RepositoryDefinitionSetters = {
    setOwner: (value: string) => void,
    setRepository: (value: string) => void,
    setBranch: (value: string) => void,
};

export type RepositoryCommit = {
    commit: {
        author: {
            name: string,
            email: string,
            date: Date,
        },
        committer: {
            name: string,
            email: string,
            date: Date,
        }
        message: string,
    },
    sha: string,
};

export type RepositoryBranch = {
    name: string,
};

export type CommitWeeklyStatistic = {
    days: number[],
    total: number,
    week: Date,
};