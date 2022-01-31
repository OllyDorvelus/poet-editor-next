import React, { ReactElement } from 'react'
import Drawer from '@mui/material/Drawer';
import styles from '@/styles/Home.module.css'

type Props = {
    anchor?: "bottom" | "left" | "right" | "top" | undefined
    variant?: "permanent" | "persistent" | "temporary" | undefined
}

export default function Sidebar({ anchor = "right", variant = "permanent" }: Props): ReactElement {
    return (
        <div>
            <Drawer
                anchor={anchor}
                variant={variant}
            >
            </Drawer>
        </div>
    )
}
