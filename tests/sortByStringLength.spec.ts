import fc from 'fast-check';

// Code under test
const sortByLength = (strings: string[]): string[] => strings.sort((a, b) => a.length - b.length);

// Property-based test
describe('sortByLength', () => {
  it('should sort strings by length in ascending order', () => {
    fc.assert(
      fc.property(fc.array(fc.string()), (strings: string[]) => {
        const sortedStrings = sortByLength(strings);
        // Check if each subsequent string has greater or equal length
        for (let i = 0; i < sortedStrings.length - 1; i++) {
          if (sortedStrings[i].length > sortedStrings[i + 1].length) {
            return false;
          }
        }
        return true;
      })
    );
  });
});
