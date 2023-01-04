import checkPhoneNumber from '../src/checkPhoneNumber';

test('should change phone number', () => {
  const result = checkPhoneNumber('8 (927) 000-00-00');
  const expected = '+79270000000';

  expect(result).toBe(expected);
});

test('should change phone number', () => {
  const result = checkPhoneNumber('+7 960 000 00 00');
  const expected = '+79600000000';

  expect(result).toBe(expected);
});

test('should change phone number', () => {
  const result = checkPhoneNumber('+86 000 000 0000');
  const expected = '+860000000000';

  expect(result).toBe(expected);
});
