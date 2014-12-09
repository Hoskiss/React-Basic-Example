/** @jsx React.DOM */

var ButtonGroup = ReactBootstrap.ButtonGroup;
var Button = ReactBootstrap.Button;

var NavBar = React.createClass({

    getInitialState: function(){
        return { focused: 0 };
    },

    clicked: function(index){
        // The click handler will update the state with
        // the index of the focused menu entry
        this.setState({focused: index});
    },

    render: function() {
        // Here we will read the items property, which was passed
        // as an attribute when the component was created
        var self = this;

        // TODO: remove hard-code, we know there're four elems
        return (
            <div>
                <ButtonGroup className="col-md-12">
                    {this.props.items.map( function(m){
                        return <Button bsStyle="primary" className="col-md-3">{m}</Button>;
                    })}
                </ButtonGroup>
            </div>
        );
    }
});

// Render the menu component on the page, and pass an array with menu options
React.renderComponent(
    <NavBar items={ ['Home', 'Services', 'About', 'Contact us'] } />,
    document.body
);
