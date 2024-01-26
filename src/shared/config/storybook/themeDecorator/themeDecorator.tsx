import { type Theme } from 'app/providers/themeProvider'
import React from 'react'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    )
}
