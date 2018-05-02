import React from './React';
import ReactDOM from 'react-dom';

class A extends React.Component {
    render () {
        return (<div>hello<span>world</span></div>);
    }
}
console.log(new A);
console.log(<A />);
// ReactDOM.render(<div>hello<span>world</span></div>, document.getElementById('id'));
