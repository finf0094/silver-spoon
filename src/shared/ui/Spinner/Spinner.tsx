import React, { type FC } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import cls from './Spinner.module.scss'

interface SpinnerProps {
    className?: string
}

const Spinner: FC<SpinnerProps> = ({ className }) => {
    return (
        <div className={classNames(cls.loader, {}, [className])}></div>
    )
}

export default Spinner
