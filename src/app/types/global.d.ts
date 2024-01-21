declare module '*.scss' {
    type IClassNames = Record<string, string>
    const classNames: IClassNames
    export = classNames
}

declare module '*.svg' {
    import type React from 'react'
    const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare const __IS_DEV__: boolean
