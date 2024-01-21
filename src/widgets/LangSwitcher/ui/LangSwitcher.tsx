import React, {FC} from 'react';

import {classNames} from "shared/lib/classNames/classNames"
import Button, {ThemeButton} from "shared/ui/Button/Button";

import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";


interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const {t,i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggle}
        >
            {t('Перевести')}
        </Button>
    );
};

export default LangSwitcher;