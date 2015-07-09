var React = require('react'),
    Hello = require('jsx!./Hello.react');


React.renderComponent(
    <Hello who='world'/>,
    document.body
);
