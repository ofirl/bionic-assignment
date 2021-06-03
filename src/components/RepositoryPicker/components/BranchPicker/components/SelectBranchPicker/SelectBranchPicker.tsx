import React, { ChangeEvent } from 'react';

import { createStyles, makeStyles, MenuItem, Select, Theme } from '@material-ui/core';

import Loader from '../../../../../Loader/Loader';

import { useGetRepositoryBranches } from '../../../../../../utils/queries/Github';

import { useRepositoryDefinition } from '../../../../../../context/RepositoryDefinitionContext';

const useStyles = makeStyles((theme: Theme) => createStyles({
    selectRoot: {
        width: '100%',
    },
}));

export interface SelectBranchPickerProps {
    branch: string,
    onChange: (value: string) => void,
    required?: boolean,
};
const SelectBranchPicker = ({ branch, onChange, required }: SelectBranchPickerProps) => {
    const { owner, repository } = useRepositoryDefinition();

    const { data: branchesData, isLoading } = useGetRepositoryBranches(owner, repository, {
        enabled: owner && repository ? true : false,
    });

    const classes = useStyles();

    const handleChange = (e: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
        onChange(e.target.value as string);
    };

    return (
        <Select required={required} value={branch} variant="outlined" classes={{ outlined: classes.selectRoot }} onChange={handleChange}>
            {
                branchesData || isLoading ?
                    (
                        branchesData?.map(b => (
                            <MenuItem key={b.name} id={b.name} value={b.name}>
                                {b.name}
                            </MenuItem>
                        ))
                    )
                    :
                    (
                        <Loader />
                    )
            }
        </Select>
    );
};

export default SelectBranchPicker;