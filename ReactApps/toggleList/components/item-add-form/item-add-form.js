import React from "react";
import "./item-add-form.css";

export default class ItemAddForm extends React.Component {
    constructor() {
        super();
        this.state = {
            label: '',
        }
        this.onLabelChange = (e) => {
            this.setState({
                label: e.target.value,
            })

        }
        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.onItemAdded(this.state.label);
            this.setState({
                label: '',
            })
        }
    }
    render() {
        return (
            <form className="item-add-form"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="what needs to be done"
                    value={this.state.label} />
                <button>Add</button>
            </form >
        )
    }
}