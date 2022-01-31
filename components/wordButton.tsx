import React, { ReactElement } from 'react'
import Button from '@mui/material/Button';


type Props = {
    text: String;
    variant: "text" | "outlined" | "contained" | undefined
}

export default function WordButton({ text, variant = 'text' }: Props): ReactElement {
    return (
        <Button variant={variant}>{text}</Button>
    )
}
