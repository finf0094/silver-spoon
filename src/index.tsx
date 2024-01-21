import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from 'app/App'
import ThemeProvider from 'app/providers/themeProvider/ui/ThemeProvider'

import 'shared/config/i18n/i18n'

import 'app/styles/index.scss'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
)
