import React, {Component} from 'react';
import {getCountries} from "../../apiCalls/login";
import {Card, Typography} from "@material-ui/core";

class Header extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            countries: [],
            name: ''
        }
    }

    componentDidMount() {
        this.getAllCountries();
    }

    getAllCountries = () => {
        let self = this;
        this.setState({name: self.props.name})
        console.log('....')
        getCountries().then(function (res) {
            self.setState({countries: res.data})
            console.log(self.state.countries)
        }).catch((err) => console.log(err))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({name: nextProps.name})
    }

    render() {
        return (
            <div align="center" style={{gridTemplateColumns: "repeat(4,1fr)",columnGap:10, display: "grid"}}>
                {console.log(this.state.countries)}
                {this.state.countries.map((item) =>
                    <Card style={{ marginBottom: 10, background: 'beige',}}>
                       <div style={{height:150,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundImage:`url(${item.flag})`}}/>
                       <div style={{padding:20,borderRadius:10,width: "auto"}}>
                           <div>
                               <Typography variant={"h6"}>{item.name}</Typography>
                               <Typography style={{fontSize: 12}}  variant={"h6"}>{item.subregion||'-'}</Typography>
                           </div>
                           <div align="left" style={{marginTop:20,display: "flex", justifyContent: "space-between"}}>
                               <b>Population: </b> <Typography style={{fontSize: 12}} variant={"h6"}>{item.population}</Typography>
                           </div>
                           <div align="left" style={{marginTop:20,display: "flex", justifyContent: "space-between"}}>
                               <b>Area: </b> <Typography style={{fontSize: 12}} variant={"h6"}>{item.area}</Typography>
                           </div>
                           <div align="left" style={{marginTop:20,display: "flex", justifyContent: "space-between"}}>
                               <b>Languages: </b> <div align="right" style={{display:'grid'}}>{item.languages.map((data,index)=><Typography style={{fontWeight:700,fontSize: 12}} variant={"h6"}>{data.name}</Typography>)}</div>
                           </div>
                           <div align="left" style={{marginTop:20,display: "flex", justifyContent: "space-between"}}>
                               <b>Currencies: </b> <div align="right" style={{display:'grid'}}>{item.currencies.map((data,index)=><Typography style={{fontWeight:700,fontSize: 12}} variant={"h6"}>{data.code} ({data.symbol})</Typography>)}</div>
                           </div>
                       </div>

                    </Card>)}
                {/*{name.map((item)=><li key={Math.random()}>{item.name},{item.rollNo},{item.isGirl?'F':'M'}</li>)}*/}
            </div>
        );
    }
}

export default Header;
