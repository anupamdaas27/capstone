import React  , {Component} from 'react';


class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: this.props.userdata
        }
    }
   
    render(){ 
        return(
            <div>
               <div>{this.state.user.Empid}</div>
               <div>{this.state.user.Name}</div>
               <div>{this.state.user.Email}</div>
               <div>{this.state.user.Phone}</div>
               <div>{this.state.user.Type}</div>
            </div>
        );
    }
}

export default User;