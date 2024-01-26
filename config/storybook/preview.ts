import type { Preview } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/storybook/styleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/themeDecorator/themeDecorator'
import { Theme } from '../../src/app/providers/themeProvider'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT)
    ]
}

export default preview
