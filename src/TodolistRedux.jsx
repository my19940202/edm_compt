import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'


class TodoList extends React.Component {
    render() {
        // 使用redux抽象之后 状态和状态处理函数 到放到redux和action去处理
        const {name, todoList, change, add, toggle } = this.props
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
        //
        return (
            <div>
                <input type="text" value={name}
                    onChange={e => change(e.target.value)} 
                    onKeyPress={e => this.handleAdd(e.which, e.target.value)}
                    />
                <p>this is name: {name}</p>
                <ul style={ulStyle} onClick={(e) => toggle(e.target.attributes.data.value)}>
                    {
                        todoList && todoList.map((item, idx) => {
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
    handleAdd(keycode, words) {
        const {add} = this.props
        if (keycode === 13) {
            add(words);
        }
    }

}


// Action: 啥不做什么只是，表意（表达action的发生）
const addAction = (words) => {
    return {
        type: 'add',
        name: words
    };
};
const changeAction = (words) => { 
    return {
        type: 'change',
        name: words
    }
}

const toggleAction = (idx) => {
    return  {type: 'toggle',idx}
}

// Reducer: reducer 接收 state action 处理数据
function reducer(state = { name: '',todoList: [] }, action) {
    console.log(state, action);
    let name = action.name;
    switch (action.type) {
        case 'add':
            return {
                name: '',
                // 在原来 state上继续concat todoList
                todoList: state.todoList.concat({
                    done: false,
                    content: name
                })
            }
        case 'change':
            return { name, todoList: state.todoList}
        case 'toggle':
            // 不管何时更新了一个嵌套的值，都必须同时返回上层的任何数据副本给 state 树
            // 直接修改 state 因为框架问题 不能判断出 diff
            state.todoList[action.idx].done = !state.todoList[action.idx].done;
            return {name: state.name, todoList: state.todoList.concat([]) }
        default:
            return state;
    }
}

// Store
const store = createStore(reducer)

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    name: state.name,
    todoList: state.todoList
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    add: (words) => dispatch(addAction(words)),
    change: (words) => dispatch(changeAction(words)),
    toggle: (idx) => dispatch(toggleAction(idx))
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);


export let TodoListRedux = (
    <Provider store={store}>
      <App />
    </Provider>
);