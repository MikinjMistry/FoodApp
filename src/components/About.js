import UserContext from "../utils/UserContext";
import PersonClass from "./PersonClass";
import UserClass from "./UserClass"
import React from "react"
import UserContext from "../utils/UserContext";

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent ComponentDidMount")
        setTimeout(() => {
            this.setState({ count: 5 })
        }, 5000)
        setTimeout(() => {
            this.setState({ count: 10 })
        }, 10000)
    }

    componentDidUpdate(a, preState) {
        console.log("a", a)
        console.log("preState", preState)

    }

    componentWillUnmount() {
        console.log("Parent Component Will Unmount")
    }

    render() {
        console.log("Parent Render");
        return (
            <div className="min-h-screen mt-20 px-11">
                <h1 className="text-2xl font-bold">About Us</h1>
                <UserContext.Consumer>
                    {({ user }) => <b>{user}</b>}
                </UserContext.Consumer>
                {/* <h3>Count:{this.state.count}</h3> */}
                {/* <UserClass username="First " location="Surat" />
                <UserClass username="Second " location="Surat" /> */}
            </div>
        )
    }
}

export default About

/*
 
-   Parent Constructor
-   Parent Render
    -   First Child Constructor
    -   First Child Render
        -   First Person Constructor
        -   First Person Render
    -   Second Child Constructor
    -   Second Child Render
        -   Second Person Constructor
        -   Second Person Render
    
        -   First Person Component Did Mount
    -   First Child Component Did Mount
        -   Second Person Component Did Mount
    -   Second Child Component Did Mount
- Parent Compnent did Mount







 */ 