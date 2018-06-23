import * as React from "react";
import * as ReactDOM from "react-dom";
import {TodoList} from './TodoList';

class TestCom extends React.Component {
    render() {
        const { name, age } = this.props;
        return (
            <div>
                <p>name: {name}</p>
                <p>name: {age}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <h1>a todo list example (no redux)</h1>
        <TodoList/>

        <h1>a todo list example (redux)</h1>
    </div>,
    document.getElementById("app")
);
