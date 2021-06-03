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
        commiter: {
            name: string,
            email: string,
            date: Date,
        }
        message: string,
    },
    sha: string,
};