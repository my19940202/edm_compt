import * as React from "react";
import * as ReactDOM from "react-dom";

export class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            todoList: []
        };
        this.todoList = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.doneToggle = this.doneToggle.bind(this);
    }

    render() {
        let styleDone = {
            textDecoration: 'line-through'
        };
        let styleUnDone = {
            textDecoration: 'underline'
        };
        let ulStyle= {
            userSelect: 'none'
        }
        let me = this;
        return (
            <div>
                <input type="text" value={me.state.name} onChange={me.handleChange} onKeyPress={me.handleAdd} />
                <p>this is name: {me.state.name}</p>
                <ul style={ulStyle} onClick={me.doneToggle}>
                    {
                        me.state.todoList.map((item, idx) => {
                            let style = styleUnDone;
                            if (item.done) {
                                style = styleDone;
                            }
                            return <li style={style} key={idx} data={idx}>{item.content}</li>
                        })
                    }
                </ul>
            </div>
        );
    }

    doneToggle(event) {
        let idx = null;
        if (event.target  && event.target.attributes.data) {
            idx = event.target.attributes.data.value;
            this.todoList[idx].done = !this.todoList[idx].done;
        }
        this.setState({
            todoList: this.todoList
        });
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleAdd(event) {
        if (event.which === 13) {
            this.todoList.push({
                done: false,
                content: this.state.name
            })
            this.setState({
                name: '',
                todoList: this.todoList
            });
        }
    }
}
