import React from 'react';
import { RepositoryDefinitionSetters } from '../../utils/types';

import clsx from 'clsx';

import { createStyles, makeStyles, Theme } from '@material-ui/core';

import RepositoryPicker from '../RepositoryPicker/RepositoryPicker';

const useStyles = makeStyles((theme: Theme) => createStyles({
    mainContainer: {
        height: '100%',
    },
}));

export interface LandingPageProps extends RepositoryDefinitionSetters {

};
const LandingPage = ({ setOwner, setRepository, setBranch }: LandingPageProps) => {
    const classes = useStyles();

    return (
        <div className={clsx("center-horizontal center-vertical", classes.mainContainer)}>
            <RepositoryPicker setOwner={setOwner} setRepository={setRepository} setBranch={setBranch} variant="fullpage" />
        </div>
    );
};

export default LandingPage;