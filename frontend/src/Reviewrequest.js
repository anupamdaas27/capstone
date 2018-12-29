import React  , {Component} from 'react';


class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            review: this.props.reviewdata
        }
    }
   
    render(){ 
        return(
            <div>
               <div>{this.state.review.Trainee}</div>
               <div>{this.state.review.Reviewer}</div>
               <div>{this.state.review.Status}</div>
               <div>{this.state.review.Description}</div>
               <div>{this.state.review.Lastupdate}</div>
               <div>{this.state.review.ResolvedDate}</div>
            </div>
        );
    }
}

export default User;