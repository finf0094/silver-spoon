import { screen } from '@testing-library/react'

import { renderWithTranslation } from 'shared/lib/tests'

import Sidebar from './Sidebar'

describe('Sidebar', () => {
    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        screen.debug()
    })
})
