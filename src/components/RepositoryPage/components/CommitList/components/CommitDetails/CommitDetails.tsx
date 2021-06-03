import React, { useMemo } from 'react';
import { RepositoryCommit } from '../../../../../../utils/types';

import { Cell, Grid } from 'styled-css-grid';

import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';

import { format } from 'date-fns';

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
            <CardHeader title={commitMessage} subheader={`sha: ${commit.sha}`} />
            <CardContent>
                <Grid columns="auto 1fr">
                    <Cell>
                        <Typography variant="body1">
                            {`Author: `}
                        </Typography>
                    </Cell>
                    <Cell>
                        <Typography variant="body1">
                            {commit.commit.author.name}
                        </Typography>
                    </Cell>
                    <Cell>
                        <Typography variant="body1">
                            {`Commiter: `}
                        </Typography>
                    </Cell>
                    <Cell>
                        <Typography variant="body1">
                            {commit.commit.committer.name}
                        </Typography>
                    </Cell>
                    <Cell>
                        <Typography variant="body1">
                            {`Date: `}
                        </Typography>
                    </Cell>
                    <Cell>
                        <Typography variant="body1">
                            {format(commit.commit.author.date, 'dd/MM/yyyy HH:mm')}
                        </Typography>
                    </Cell>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CommitDetails;