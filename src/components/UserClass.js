import React from "react";
import PersonClass from "./PersonClass";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count1: 0,
            count2: 0,
        }
        console.log(this.props.username + " Child Constructor");
    }

    componentDidMount() {
        console.log(this.props.username + " Child ComponentDidMount")
    }

    count1Handaler() {
        this.setState({ count1: this.state.count1 + 1 })
    }

    count2Handaler() {
        this.setState({ count2: this.state.count2 + 1 })
    }

    render() {
        console.log(this.props.username + " Child Render")
        const { username, location } = this.props;
        const { count1, count2 } = this.state;

        return (
            <div className="usercard">
                <h3>{username}</h3>
                <h4>{location}</h4>
                <p>
                    <button onClick={() => {
                        this.count1Handaler()
                    }}>
                        Count 1
                    </button>
                    <b> {count1} </b>
                </p>
                <p>
                    <button onClick={() => {
                        this.count2Handaler()
                    }}>
                        Count 2
                    </button>
                    <b> {count2}</b>
                </p>
                <PersonClass name={this.props.username} />
            </div>
        )
    }
}

export default UserClass