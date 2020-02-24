import React, { Component } from 'react';

class Credit extends Component {
    constructor(props){
        super(props)
this.state = {
    code:"",
    name:"",
    date:""

}
}

handelChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}



    render() {

        var patt = /[0-9]$/
        var vatt = /[a-zA-Z]{1,20}$/

        return (
            <div className="main">
            <div> 
        <form>           
            <div>
                <label>Code: </label> 
                <input className="inpu" type="text" name="code" maxlength="16" onChange={this.handelChange}/>
            </div>
            <div>
                <label>Date: </label>
                <input className="inpu" type="text" name="date" maxlength="4" onChange={this.handelChange}/>
            </div>

            <div>
                <label>Name: </label> 
                <input className="inpu" type="text" name="name" onChange={this.handelChange}/> 
            </div>
        </form>          
            </div>
            <div className="head"> 
            <p>Credit Card</p>
                <h5 className="sect">{patt.test(this.state.code) ? this.state.code.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '') : "**** **** **** ****"}</h5>   
                <h5 className="sect">{patt.test(this.state.date) ? this.state.date.replace(/^(\d{2})/, '$1 / ') : "**/**"}</h5> 
                <h5 className="sect">{vatt.test(this.state.name.toUpperCase())? this.state.name.toUpperCase() : "****"}</h5>
            </div>
        </div>
                
                
        );
    }
}

export default Credit;


        
