import React, { ReactElement } from 'react'
import TextField from '@mui/material/TextField';

type Props = {

}

export default function Editor({ }: Props): ReactElement {
    return (
        <TextField
            multiline={true}
            rows={50}
            fullWidth={true}
        />
    )
}
