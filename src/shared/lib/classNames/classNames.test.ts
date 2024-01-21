import { classNames } from './classNames'

describe('classNames', () => {
    test('with only one param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable'
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected)
    })

    test('with many mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable cursor'
        expect(classNames('someClass', { hovered: true, scrollable: true, cursor: true }, ['class1', 'class2'])).toBe(expected)
    })

    test('with false mode', () => {
        const expected = 'someClass class1 class2 scrollable'
        expect(classNames('someClass', { hovered: false, scrollable: true }, ['class1', 'class2'])).toBe(expected)
    })

    test('with false mods', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', { hovered: false, scrollable: undefined }, ['class1', 'class2'])).toBe(expected)
    })
})
