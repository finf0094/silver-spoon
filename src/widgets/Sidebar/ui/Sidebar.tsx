import React, { type FC, useState } from 'react'

import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

import { classNames } from 'shared/lib/classNames/classNames'
import Button, { ThemeButton } from 'shared/ui/Button/Button'

import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button theme={ThemeButton.CLEAR} onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <LangSwitcher/>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}

export default Sidebar
