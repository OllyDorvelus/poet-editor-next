import React, { ReactElement } from 'react'
import TextField from '@mui/material/TextField';

type Props = {
    handleChange: (e: React.BaseSyntheticEvent) => void;
}

export default function Editor({ handleChange }: Props): ReactElement {
    return (
        <TextField
            name="content"
            multiline={true}
            rows={50}
            fullWidth={true}
            onChange={handleChange}
        />
    )
}
