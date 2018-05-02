 ### 1. `console.log(<div>hello<span>world</span></div>)`;
    编译JSX会调用React.createElement();
    接收babel编译出来的三个参数：type, config, children
    *The type argument can be either a tag name string (such as 'div' or 'span'), a React component type (a class or a function), or a React fragment type.*

    React.createElement()执行两次；
    1.第一次：('span', null, 'world');
    2.第二次：('div', null, 'hello'); 但是arguments里面存在第四个参数为第一次返回的element