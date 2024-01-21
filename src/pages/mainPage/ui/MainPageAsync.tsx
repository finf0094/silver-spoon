import { lazy } from 'react'

const MainPageAsync = lazy(async () => await import('./MainPage'))

export default MainPageAsync
