import React, { type FC } from 'react'

import { useTheme } from 'app/providers/themeProvider'

import { classNames } from 'shared/lib/classNames/classNames'
import Button, { ThemeButton } from 'shared/ui/Button/Button'

import ThemeIcon from 'shared/assets/icons/theme_switcher.svg'

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { toggleTheme } = useTheme()
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}>
            <ThemeIcon/>
        </Button>
    )
}

export default ThemeSwitcher
