import React from 'react';

import { Cell, Grid } from 'styled-css-grid';

import { AppBar, createStyles, IconButton, makeStyles, Theme, Typography } from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';

import { useRepositoryDefinition } from '../../../../context/RepositoryDefinitionContext';

const useStyles = makeStyles((theme: Theme) => createStyles({
    topBarGrid: {
        paddingLeft: '1em',
        '&[class*="Grid"]': {
            height: '3em',
        }
    },
    editRepositoryButton: {
        width: '2em',
    },
}));

const TopBar = () => {
    const { owner, repository, branch, toggleQueriesEnabled } = useRepositoryDefinition();

    const classes = useStyles();

    return (
        <AppBar position="sticky">
            <Grid rows="1fr" columns="auto 1fr" className={classes.topBarGrid}>
                <Cell className="center-vertical">
                    <Typography variant="h6">
                        {`${owner}/${repository}/${branch}`}
                    </Typography>
                </Cell>
                <Cell className="center-vertical">
                    <IconButton className={classes.editRepositoryButton} onClick={toggleQueriesEnabled}>
                        <EditIcon />
                    </IconButton>
                </Cell>
            </Grid>
        </AppBar>
    );
};

export default TopBar;