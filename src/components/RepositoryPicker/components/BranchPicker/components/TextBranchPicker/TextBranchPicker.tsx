import { TextField } from '@material-ui/core';
import React, { FormEvent } from 'react';

export interface TextBranchPickerProps {
    branch: string,
    onChange: (value: string) => void,
    required?: boolean,
};
const TextBranchPicker = ({ branch, onChange, required }: TextBranchPickerProps) => {
    const handleInput = (e: FormEvent<HTMLDivElement>) => {
        onChange((e.target as HTMLInputElement).value)
    };

    return (
        <TextField required={required} variant="outlined" label="Branch" value={branch} onInput={handleInput} />
    );
};

export default TextBranchPicker;