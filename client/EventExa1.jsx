import React from 'react';

class EventExa1 extends React.Component{
    constructor(props){
        super(props);

        this.state={
            data:"initial...."
        };

        this.updateState=this.updateState.bind(this);
    }
    updateState(){
        console.log("coming here or not");

        this.setState({data:"State updated from the child"});
    }

    render(){
        return(
            <Content myDataProps={this.state.data} updateStateProps={this.updateState}/>
        )
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <input type="button" onClick={this.props.updateStateProps} value="Click Me"/>
                <h1>{this.props.myDataProps}</h1>
            </div>
        )
    }

}

export default EventExa1;



