import { type FC, Suspense } from 'react'
import { useTheme } from 'app/providers/themeProvider'

import { AppRouter } from 'app/providers/router'

import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import { classNames } from 'shared/lib/classNames/classNames'

const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
