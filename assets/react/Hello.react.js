var React = require('react');

var Hello = React.createClass({
    render : function () {
        return (
            <h1>{this.props.who}</h1>  
        );
    }      
});
