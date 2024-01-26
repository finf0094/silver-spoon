import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import Button from 'shared/ui/Button/Button'

import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
    className?: string
}

const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
    const { t } = useTranslation()

    const reloadPage = (): void => { location.reload() }

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            {t('Что-то пошло не так')}
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>
    )
}

export default ErrorPage
