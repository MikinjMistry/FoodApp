import React from "react";

class PersonClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.name+" Person Constructor")
    }

    componentDidMount(){
        console.log(this.props.name+" Person componentDidMount")
    }

    render() {
        console.log(this.props.name+" Person render")
        return (<div>
            <h1>Person Class</h1>
        </div>)
    }
}

export default PersonClass