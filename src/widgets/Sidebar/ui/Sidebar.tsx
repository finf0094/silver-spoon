import React, {FC, useState} from 'react';

import {classNames} from "shared/lib/classNames/classNames"
import Button, {ThemeButton} from "shared/ui/Button/Button";

import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import LangSwitcher from "widgets/LangSwitcher/ui/LangSwitcher";


interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prevState => !prevState);
    }

    return (
        <div
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button theme={ThemeButton.CLEAR} onClick={onToggle}>toggle</Button>
            <div className={cls.switchers}>
                <LangSwitcher/>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

export default Sidebar;