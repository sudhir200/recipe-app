import React, {Component} from 'react';
import "./login.css"
import {Button, Container, TextField} from "@material-ui/core";
import {addData} from "../../apiCalls/login";

class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            name:'',
            job:'',
            user: {},
        }
    }

    componentDidMount() {
    }
    handleChange=(event)=>
    {
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=()=>
    {
        console.log(this.state.name)
        console.log(this.state.job)
        addData(this.state.name,this.state.job,3).then((res)=>console.log(res))
    }
    render() {
        return (
            <div>
                <Container style={{display:"grid"}}>
                    <TextField value={this.state.name} name="name"  onChange={(e)=>this.handleChange(e)} />
                    <TextField value={this.state.job} name="job" onChange={(e)=>this.handleChange(e)} />
                    <Button variant="outlined" disabled={!this.state.name.length||!this.state.name.length} onClick={this.handleSubmit}>Submit</Button>
                </Container>

            </div>
        );
    }
}

export default Login;
