import { lazy } from 'react'

const AboutPageAsync = lazy(async () => await import('./AboutPage'))

export default AboutPageAsync
