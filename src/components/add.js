
import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
        };
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ title: '', text: '', id: this.props.number + 1 });
        this.props.onSubmit({
            id: this.props.number,
            title: this.state.title.trim(),
            text: this.state.text.trim(),
        });
    }

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                <input
                  type="text"
                  placeholder="Title here.."
                  value={this.state.title}
                  onChange={this.handleTitleChange.bind(this)}
                  className="form-control"
                />
                <input
                  type="text"
                  placeholder="Text here..."
                  value={this.state.text}
                  onChange={this.handleTextChange.bind(this)}
                   className="form-control"
                />
                <button
                    className="btn btn-primary"
                    disabled={!this.state.title || !this.state.text}>
                    Publish
                </button>
            </form>
        );
    }
}

Add.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    number: React.PropTypes.number.isRequired,
};

export default Add;
