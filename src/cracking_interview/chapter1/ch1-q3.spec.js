import * as funcs from './ch1-q3';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch1-q3: ' + key, function () {
    it('works with null/undefined as input', function () {
      expect(func(undefined)).toBeUndefined();
      expect(func(null)).toBeNull();
    });

    it('works with an empty array as input', function () {
      expect(func([])).toEqual([]);
    });
    [
      'nospaces',
      ' ',
      '   ',
      ' firstSpace',
      'lastSpace ',
      '  surroundedBySpaces  ',
      'middle  spaces',
      ' l o t s   o f   s p a c e ',
      'http://www.google.com/',
      'http://www.google.com/search?q=something really really funny',
    ].forEach((arg) => {
      it(`returns true for unique string: '${arg}'`, function () {
        let expected = arg.replace(/ /g, '%20').split('');
        expect(func(arg.split(''))).toEqual(expected);
      });
    });
  });
}
