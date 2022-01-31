import React, { ReactElement, Children } from 'react'
import Drawer from '@mui/material/Drawer';
import styles from '@/styles/Home.module.css'

type Props = {
    anchor?: "bottom" | "left" | "right" | "top" | undefined
    variant?: "permanent" | "persistent" | "temporary" | undefined
    children: React.ReactNode;
}

export default function Sidebar({ anchor = "right", variant = "permanent", children }: Props): ReactElement {
    return (
        <Drawer
            anchor={anchor}
            variant={variant}
        >
            {children}
        </Drawer>
    )
}
