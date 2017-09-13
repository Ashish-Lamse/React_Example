import React from 'react';

class StateAndProps extends React.Component{
    constructor(props){
        super(props);

        this.state={
            header:"This is header...",
            content:"This is content..."
        }
    }
    render() {
        return(

            <div>
                <Header headerProps={this.state.header}/>
                <Content contentProps={this.state.content}/>
            </div>
        )

    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.headerProps}</h1>
            </div>
        )
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.contentProps}</h1>
            </div>
        )
    }
}

export default StateAndProps;