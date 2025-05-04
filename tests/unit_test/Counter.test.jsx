import React from 'react'; 
import { render, screen, fireEvent } from '@testing-library/react';  // screen指的是屏幕window吗？： 
import Counter from './Counter';

describe('Counter Component', () => {  // describe用于分组相关的测试用例
  test('renders initial count of 0', () => {  // 测试Counter组件初始渲染, test是jest的一个函数，用于定义一个测试用例
    render(<Counter />); 
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();  // 断言屏幕上显示"Count: 0"， /i表示忽略大小写， screen是一个测试库提供的对象，用于查询DOM元素
                                                                // toBeInTheDocument()是jest-dom提供的匹配器，用于判断元素是否在文档中
                                                                // jset-dom是一个扩展库，提供了一些用于测试DOM节点的匹配器，
                                                                // jset-dom都有哪些测试匹配器：
                                                                  // 1. toBeInTheDocument 这是最常用的匹配器之一，用于判断元素是否在文档中
                                                                  // 2. toHaveTextContent 用于判断元素的文本内容是否符合预期
                                                                  // 3. toHaveAttribute 用于判断元素是否具有指定的属性
                                                                  // 4. toHaveClass 用于判断元素是否具有指定的类名
                                                                  // 5. toHaveStyle 用于判断元素的样式是否符合预期
                                                                  // 6. toHaveFocus 用于判断元素是否获得了焦点
                                                                  // 7. toHaveValue 用于判断元素的值是否符合预期
                                                                  // 8. toBeVisible 用于判断元素是否可见
                                                                  // 9. toBeEmptyDOMElement 用于判断元素是否为空的DOM元素
                                                                  // 10. toBeChecked 用于判断复选框或单选框是否被选中
                                                                  // 11. toBeDisabled 用于判断元素是否被禁用
                                                                  // 12. toBeEnabled 用于判断元素是否可用
                                                                  // 13. toBeEmpty 用于判断元素是否为空
                                                                  // 14. toBeRequired 用于判断元素是否是必填的
                                                                  // 15. toBeValid 用于判断元素是否有效
                                                                  // 16. toBeInvalid 用于判断元素是否无效
                                                                  // 17. toHaveFormValues 用于判断表单元素的值是否符合预期
                                                                  // 18. toHaveDisplayValue 用于判断表单元素的显示值是否符合预期
                                                                  // 19. toHaveStyleRule 用于判断元素的样式规则是否符合预期
                                                                  // 20. toHaveLength 用于判断元素的数量是否符合预期
                                                                  // 21. toHaveValue 用于判断元素的值是否符合预期
                                                                  // 22. toHaveText  用于判断元素的文本内容是否符合预期
                                                                  // 23. toHaveProperty 用于判断元素的属性值是否符合预期
                                                                // expect是jest的一个函数，用于断言
                                                                // screen.getByText是一个查询函数，用于获取屏幕上显示的文本
  });

  test('increments count when button is clicked', () => {  // 测试点击按钮功能
    render(<Counter />);  // 
    const button = screen.getByText(/Increment/i);  // 获取按钮元素
    fireEvent.click(button);  // 模拟点击按钮
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();  // 断言计数变为1
  });
});