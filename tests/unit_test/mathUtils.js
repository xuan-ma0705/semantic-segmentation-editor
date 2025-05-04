// 加法函数
export const add = (a, b) => a + b;

// 生成指定范围的随机整数
export const randomInt = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('参数必须是数字');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};