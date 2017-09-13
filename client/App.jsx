
import React from 'react';

class App extends React.Component {
    render() {
        var i=1;
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        };

        return (
            <div>
                <div>
                    <h1>Header</h1>
                    <h2>Content</h2>
                    <p data-myattribute = "somevalue">This is the content!!!</p>
                    <h1>{1+1}</h1>

                    {/*React if-else condition*/}
                    <h1>{i == 1 ? 'True!' : 'False'}</h1>

                    {/*React styling*/}
                    <h1 style={myStyle}>Inline styling</h1>

                </div>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <h2>Header</h2>
        )
    }
}

class Content extends React.Component{
    render(){
        return(
           <div>
               <h3>Content</h3>
               <p>Content Text!!!!!</p>
           </div>

        )
    }
}
export default App;
