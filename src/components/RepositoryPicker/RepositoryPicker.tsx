import React, { FormEvent } from 'react';
import { RepositoryDefinitionSetters } from '../../utils/types';

import { Cell, Grid } from 'styled-css-grid';

import { Button, TextField } from '@material-ui/core';

import { useRepositoryDefinition } from '../../context/RepositoryDefinitionContext';

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

    const generateInputHandler = (setFunc: (value: string) => void) => {
        return (e: FormEvent<HTMLDivElement>) => {
            setFunc((e.target as HTMLInputElement).value)
        };
    };

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        toggleQueriesEnabled();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <Grid {...gridLayoutMap[variant]}>
                <Cell>
                    <TextField variant="outlined" label="Owner" value={owner} onInput={generateInputHandler(setOwner)} />
                </Cell>
                <Cell>
                    <TextField variant="outlined" label="Repository" value={repository} onInput={generateInputHandler(setRepository)} />
                </Cell>
                <Cell>
                    <TextField variant="outlined" label="Branch" value={branch} onInput={generateInputHandler(setBranch)} />
                </Cell>
                <Cell className="center-vertical">
                    <Button type="submit" variant="contained" color="primary" onClick={toggleQueriesEnabled}>
                        {`Sumbit`}
                    </Button>
                </Cell>
            </Grid>
        </form>
    );
};

export default RepositoryPicker;