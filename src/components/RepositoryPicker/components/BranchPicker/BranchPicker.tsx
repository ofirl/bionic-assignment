import React, { useMemo, useState } from 'react';

import { createStyles, IconButton, makeStyles, Theme, Tooltip } from '@material-ui/core';
import { Cell, Grid } from 'styled-css-grid';

import ListIcon from '@material-ui/icons/List';
import TextFieldsIcon from '@material-ui/icons/TextFields';

import TextBranchPicker from './components/TextBranchPicker/TextBranchPicker';
import SelectBranchPicker from './components/SelectBranchPicker/SelectBranchPicker';

type BranchPickerVariant = 'text' | 'select';

const useStyles = makeStyles((theme: Theme) => createStyles({
    pickerInputCell: {
        '& > div': {
            width: '100%',
        },
    },
}));

const pickerVariantDefinition: Record<BranchPickerVariant, {
    toggleTooltip: string,
    toggleIcon: React.ReactNode,
    PickerComp: React.ComponentType<BranchPickerProps>,
}> = {
    select: {
        toggleTooltip: 'Change to text',
        toggleIcon: <TextFieldsIcon />,
        PickerComp: SelectBranchPicker,
    },
    text: {
        toggleTooltip: 'Change to list',
        toggleIcon: <ListIcon />,
        PickerComp: TextBranchPicker,
    },
};

export interface BranchPickerProps {
    branch: string,
    onChange: (value: string) => void,
    required?: boolean,
};
const BranchPicker = ({ branch, onChange, required }: BranchPickerProps) => {
    const [variant, setVariant] = useState<BranchPickerVariant>('text');

    const pickerVariant = useMemo(() => pickerVariantDefinition[variant],
        [variant]
    );

    const classes = useStyles();

    const togglePickerVariant = () => {
        if (variant === "text")
            setVariant('select');
        else
            setVariant('text');
    };

    return (
        <Grid columns="1fr auto" rows="1fr">
            <Cell className={classes.pickerInputCell}>
                <pickerVariant.PickerComp required={required} branch={branch} onChange={onChange} />
            </Cell>
            <Cell className="center-vertical">
                <Tooltip title={pickerVariant.toggleTooltip}>
                    <IconButton onClick={togglePickerVariant}>
                        {pickerVariant.toggleIcon}
                    </IconButton>
                </Tooltip>
            </Cell>
        </Grid>
    );
};

export default BranchPicker;