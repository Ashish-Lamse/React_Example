import React from 'react';

class AppExa2 extends React.Component{
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        "id":1,
                        "name":"Ramanuj Shahu",
                        "age":"20"
                    },

                    {
                        "id":2,
                        "name":"Vinay Kumar",
                        "age":"30"
                    },

                    {
                        "id":3,
                        "name":"Saket Sharma",
                        "age":"40"
                    }
                ]
        }
    }
    render(){
        return (
            <div>
                <Header/>
                <table>
                    <thead>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Age</td>
                    </thead>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key = {i}
                                                                  data = {person} />)}
                    </tbody>
                </table>
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

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}
export default AppExa2;