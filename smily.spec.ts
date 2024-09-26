const { countSmileys } = require('./smily');

describe('countSmileys function', () => {
  it('should return 2 when input is [":)", ";(", ";}", ":-D"]', () => {
    expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2);
  });

  it('should return 3 when input is [";D", ":-(", ":-)", ";~)"]', () => {
    expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3);
  });

  it('should return 1 when input is [";]", ":[", ";*", ":$", ";-D"]', () => {
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
  });

  it('should return 4 when input is [":)"," :D", ";-D", ":~)"]', () => {
    expect(countSmileys([':)',' :D', ';-D', ':~)'])).toBe(4);
  });

  it('should return 4 when input is [":)"," :D", ";-D", ":~)"]', () => {
    expect(countSmileys(['))',' D', '-D', 'l)'])).toBe(4);
  });
});
