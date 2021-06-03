import React, { FormEvent } from 'react';
import { RepositoryDefinitionSetters } from '../../utils/types';

import { Cell, Grid } from 'styled-css-grid';

import { Button, createStyles, makeStyles, TextField, Theme } from '@material-ui/core';

import BranchPicker from './components/BranchPicker/BranchPicker';

import { useRepositoryDefinition } from '../../context/RepositoryDefinitionContext';

const useStyles = makeStyles((theme: Theme) => createStyles({
    mainForm: {
        width: '100%',
        maxWidth: '20em',
    },
}));

const gridLayoutMap: Record<RepositoryPickerVariant, { rows: string, columns: string }> = {
    appbar: {
        rows: '1fr',
        columns: '1fr 1fr 1fr auto',
    },
    fullpage: {
        rows: '1fr 1fr 1fr auto',
        columns: '1fr',
    },
};

export type RepositoryPickerVariant = 'fullpage' | 'appbar';
export interface RepositoryPickerProps extends RepositoryDefinitionSetters {
    variant?: RepositoryPickerVariant,
};
const RepositoryPicker = ({ setOwner, setRepository, setBranch, variant = 'appbar' }: RepositoryPickerProps) => {
    const { owner, repository, branch, toggleQueriesEnabled } = useRepositoryDefinition();

    const classes = useStyles();

    const generateInputHandler = (setFunc: (value: string) => void) => {
        return (e: FormEvent<HTMLDivElement>) => {
            setFunc((e.target as HTMLInputElement).value)
        };
    };

    const TrySubmitForm = () => {
        if (owner && repository && branch)
            toggleQueriesEnabled();
    };

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        TrySubmitForm();
    };

    return (
        <form onSubmit={onFormSubmit} className={classes.mainForm}>
            <Grid {...gridLayoutMap[variant]}>
                <Cell>
                    <TextField required variant="outlined" label="Owner" value={owner} onInput={generateInputHandler(setOwner)} />
                </Cell>
                <Cell>
                    <TextField required variant="outlined" label="Repository" value={repository} onInput={generateInputHandler(setRepository)} />
                </Cell>
                <Cell>
                    <BranchPicker required branch={branch} onChange={setBranch} />
                </Cell>
                <Cell className="center-vertical">
                    <Button type="submit" variant="contained" color="primary" onClick={TrySubmitForm}>
                        {`Sumbit`}
                    </Button>
                </Cell>
            </Grid>
        </form>
    );
};

export default RepositoryPicker;