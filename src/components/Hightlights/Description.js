import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import CollapsibleTable from '../Hightlights/Dataform';



class Description extends Component  {
    state={
        loading:true,
        contacts:0
    };
    async componentDidMount(){
        const url="https://jsonplaceholder.typicode.com/users";
        const response=await fetch(url);
        const data=await response.json()
        console.log(typeof(data.results))
        console.log(data)
        console.log("11111")
        console.log(typeof(this.state.contacts))
        // data.map((each)=>{
        //     console.log(each)
        // })
        // this.createData(data)
        console.log("data type"+typeof(data))
        // let conarray=[]
        // console.log(typeof(conarray))
        // data.map((each)=>{
        //     conarray.push(each)
        // }
        // )
        // console.log(conarray)
        
        // this.setState({contacts:data,loading:false})
        // console.log("contacts type"+typeof(this.state.contacts))
        this.setState({loading:false})
        // console.log(this.state.contacts)
        
        // this.state.contacts.map((each)=>{
        //     console.log(each)
        //     console.log(typeof(each))
        // })

    };
  
    render(){
        return (
            <Fade>
                <div className="center_wrapper">
                    <h2>HIGHLIGHTS</h2>
                </div>
                <div className="highlight_description">
                    {/* content */}
        {this.state.loading?(<div>loading...</div>)
            :
            (<CollapsibleTable />)
            // (0)
        }
                </div>
            </Fade>
            
        );
    }
    
};
export default Description; 