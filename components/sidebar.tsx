import React, { ReactElement } from 'react'
import Drawer from '@mui/material/Drawer';
import styles from '@/styles/Home.module.css'

type Props = {

}

export default function Sidebar({ }: Props): ReactElement {
    return (
        <div>
            <Drawer
                anchor="right"
                variant="permanent"
            >
                <div className={styles['sidebar-container']}>
                    <li>Something</li>
                    <li>Something</li>
                    <li>Something</li>
                </div>
            </Drawer>
        </div>
    )
}
