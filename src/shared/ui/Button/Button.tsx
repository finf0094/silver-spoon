import React, { type FC, type ReactNode } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps {
    className?: string
    children: ReactNode
    theme?: ThemeButton

    [key: string]: any
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button className={classNames(cls.Button, { }, [className, cls[theme]])}
            {...otherProps}>
            {children}
        </button>
    )
}

export default Button
