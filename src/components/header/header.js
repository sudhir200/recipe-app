import React, {Component} from 'react';
import {getCountries} from "../../apiCalls/login";
import {Card} from "@material-ui/core";

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            countries:[],
            name:''
        }
    }

    componentDidMount() {
      this.getAllCountries();
    }
    getAllCountries=()=>
    {
        let self=this;
        this.setState({name:self.props.name})
        console.log('....')
        getCountries().then(function (res){
            self.setState({countries: res.data})
            console.log(self.state.countries)
        }).catch((err)=>console.log(err))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({name:nextProps.name})
    }

    render() {
        return (
            <div align="center">
                {console.log(this.state.countries)}
                {this.state.countries.map((item)=><Card style={{padding:20,marginBottom:10,background:'#fefefe',width:200}}>{item.name}</Card>)}
                {/*{name.map((item)=><li key={Math.random()}>{item.name},{item.rollNo},{item.isGirl?'F':'M'}</li>)}*/}
            </div>
        );
    }
}
export default Header;
