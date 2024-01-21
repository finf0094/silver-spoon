import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation('navbar')

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('О нас')}</AppLink>
            </div>
        </div>
    )
}

export default Navbar
