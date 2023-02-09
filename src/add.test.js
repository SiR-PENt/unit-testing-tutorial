import * as math from './add';

test('adds numbers passed as argument', () => {
const sum = math.doAdd(1, 2);
expect(sum).toBe(3);
});
