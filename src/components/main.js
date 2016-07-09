
import React from 'react';
import Navbar from './navbar';

class Main extends React.Component {
    render() {
        return(
            <div className="app">
                <Navbar number={this.props.articles.length} />
                <div className="main-container">
                    {React.cloneElement(this.props.children, this.props)}
                 </div>
            </div>
        )
    }
}

Main.propTypes = {
    children: React.PropTypes.object.isRequired,
    articles: React.PropTypes.array.isRequired
};

export default Main;
