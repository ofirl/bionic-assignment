import { Card, CardContent, CardHeader } from '@material-ui/core';
import React, { useMemo } from 'react';
import { RepositoryCommit } from '../../../../../../utils/types';

export interface CommitDetailsProps {
    commit: RepositoryCommit,
};
const CommitDetails = ({ commit }: CommitDetailsProps) => {
    const commitMessage = useMemo(() => {
        const newLineIndex = commit.commit.message.indexOf('\n');
        if (newLineIndex !== -1)
            return commit.commit.message.substring(0, commit.commit.message.indexOf('\n'));

        return commit.commit.message;
    }, [commit.commit.message]);

    return (
        <Card>
            <CardHeader title={commitMessage} />
            <CardContent>
                {commit.commit.author.date}
            </CardContent>
        </Card>
    );
};

export default CommitDetails;