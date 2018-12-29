import React  , {Component} from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import  {  getUsers } from './actionCreators';
import { connect } from 'react-redux';
import User from './User';

class Userlist extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: this.props.users
        }
    }

    componentDidMount(){        
        this.props.getUsers();
    }
   
    render(){          
        
        let usersArr = [], users = [];
        usersArr = this.props.users;
       
        if(usersArr.length === 0){
            users = "";
        } else{
            users = usersArr.users.map((val, index) => (
                <User userdata={val} key={val._id}  />
            ));
        }

        return(
            <div className="container">
               <div>     
                    <div className="card-group">
                        <div> {users}</div>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (reduxState) => {
    
    return {
        users: reduxState.users
    }
  }
  export default connect(mapStateToProps, { getUsers })(Userlist);