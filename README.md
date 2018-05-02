 1. `console.log(<div>hello<span>world</span></div>)`;
    编译JSX会调用React.createElement();
    接收babel编译出来的三个参数：type, config, children
    *The type argument can be either a tag name string (such as 'div' or 'span'), a React component type (a class or a function), or a React fragment type.*

    React.createElement()执行两次；
    1.第一次：('span', null, 'world');
    2.第二次：('div', null, 'hello'); 但是arguments里面存在第四个参数为第一次返回的element
    
 2. Component
    基础类，定义了 props,context,refs,updater(类初始化的时候给一个默认的updater，定义了该对象的基本结构，为isMounted(),enqueueForceUpdate(),enqueueReplaceState(),enqueueSetState()。真正的updater是renderer给的)
    原型链上一个对象isReactComponent为{};
    两个方法：
        1.setState(); 调用updater的enqueueSetState()
        2.forceUpdate(); 调用updater的enqueueForceUpdate()
