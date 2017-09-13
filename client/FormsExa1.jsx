import React from 'react';

class FormsExa1 extends React.Component{
    constructor(){
        super();
        this.state={
            data:""
        };

        this.updateState=this.updateState.bind(this);
    }
    updateState(e){
        this.setState({data: e.target.value})
    }
    render(){
        return(
            <div>
                <input type = "text" value = {this.state.data}
                       onChange = {this.updateState} />
                <h4>{this.state.data}</h4>
            </div>
        )
    }
}
export default FormsExa1;