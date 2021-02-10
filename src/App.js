// create your App component here
import React from 'react'
export default class App extends React.Component{
    state={
        number: '',
        person: ''
    }
    render(){

        return <div>{this.state.number}
        <br></br>
        {this.state.person[0]}
        <br></br>
        {this.state.person[1]}
        </div>

    }

    componentDidMount(){
        fetch(`http://api.open-notify.org/astros.json`).then(resp => resp.json()).then(json => {
            console.log(json)
            this.setState({
                number: json.number,
                person: json.people.map(person=> [person.craft, person.name])
            })
        })
    }



}