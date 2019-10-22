import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {
    constructor() {
        super();

    }

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

        let classNames = "todo-list-item";
        if (done) {
            classNames = classNames + " done";
        }
        if (important) {
            classNames = classNames + " important";
        }
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={onToggleDone}>
                    {label}
                </span>

                <button type="button"

                    className="btn btn-outline-success btn-sm float-right"
                    onClick={onToggleImportant}>

                    <i className="fa fa-exclamation" />

                </button>

                <button type="button"

                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={this.props.onDeleted}>

                    <i className="fa fa-trash-o" />

                </button>
            </span>
        );
    };
}



