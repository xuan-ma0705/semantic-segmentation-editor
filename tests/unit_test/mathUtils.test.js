import { add, randomInt } from './mathUtils';

// 测试加法函数
describe('add 函数', () => {
  it('正确计算 2 + 3 = 5', () => {  // it是jest的一个函数，用于定义一个测试用例
    expect(add(2, 3)).toBe(5);
  });

  it('处理负数加法 (-1) + (-2) = -3', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it('处理小数加法 0.1 + 0.2 ≈ 0.3', () => { // 浮点数相加时，可能会出现精度问题，所以使用toBeCloseTo
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

// 测试随机整数函数
describe('randomInt 函数', () => {
  it('生成的数字在 1-5 范围内', () => {
    const result = randomInt(1, 5);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(5);
  });

  it('参数非数字时抛出错误', () => {
    expect(() => randomInt('a', 5)).toThrow('参数必须是数字');
    expect(() => randomInt(1, 'b')).toThrow('参数必须是数字');
  });

  // 多次测试随机性
  it('多次调用应覆盖范围', () => {
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(randomInt(1, 5));
    }
    expect([...results].sort()).toEqual([1, 2, 3, 4, 5]);
  });
});