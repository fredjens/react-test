
import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id + 1,
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
        this.props.onSubmit({
            id: this.state.id,
            title: this.state.title.trim(),
            text: this.state.text.trim(),
        });
        this.setState({ title: '', text: '', id: this.state.id + 1 });
    }

    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
                <input
                  type="text"
                  placeholder="Title here.."
                  value={this.state.title}
                  onChange={this.handleTitleChange.bind(this)}
                />
                <input
                  type="text"
                  placeholder="Say something..."
                  value={this.state.text}
                  onChange={this.handleTextChange.bind(this)}
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
    id: React.PropTypes.number.isRequired,
};

export default Add;
