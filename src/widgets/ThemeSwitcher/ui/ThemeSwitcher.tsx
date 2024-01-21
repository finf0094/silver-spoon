import React, {FC} from 'react';

import {classNames} from 'shared/lib/classNames/classNames';

import cls from './ThemeSwitcher.module.scss';
import {useTheme} from 'app/providers/themeProvider';

import ThemeIcon from 'shared/assets/icons/theme_switcher.svg'
import Button, {ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {toggleTheme} = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}>
            <ThemeIcon/>
        </Button>
    );
};

export default ThemeSwitcher;