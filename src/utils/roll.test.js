import { roll } from './roll'

test('roll', () => {
  const dice = roll()

  expect(Number.isInteger(dice)).toBe(true)
  expect(dice < 1).toBe(false)
  expect(dice > 6).toBe(false)
  expect(
    dice === 1 ||
      dice === 2 ||
      dice === 3 ||
      dice === 4 ||
      dice === 5 ||
      dice === 6,
  ).toBe(true)
})
