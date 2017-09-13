import React from 'react';

class AppPropsExa extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.headerProps}</h1>
                <h1>{this.props.contantProps}</h1>
            </div>
        )
    }
}

AppPropsExa.defaultProps={
    headerProps:"This is header props....",
    contantProps:"This is contant props...."
};

export default AppPropsExa;
