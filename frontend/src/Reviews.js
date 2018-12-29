import React  , {Component} from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import  {  getReviews, addSubmission } from './actionCreators';
import { connect } from 'react-redux';
import Reviewrequest from './Reviewrequest';



class Reviews extends Component{
    constructor(props){
        super(props);
        this.state = {
            reviews: this.props.reviews
        }

    }

    componentDidMount(){        
        this.props.getReviews();
    }

  
    render(){          

        let reviewArr = [], reviews = [];
        if(this.props.reviews !== undefined){
            reviewArr = this.props.reviews;
        
            if(reviewArr.length === 0){
                reviews = "";
            } else{
                reviews = reviewArr.reviews.map((val, index) => (
                    <Reviewrequest reviewdata={val} key={val._id}  />
                ));
            }
        }

        return(
            <div className="container">
               <div>     
                    <div className="card-group">
                        <div>{reviews}</div>
                    </div>
                </div>
   
                <ul className="nav nav-tabs">
                <li className="nav-item" role="tablist">
                    <a role="tab" className="nav-link" data-toggle="tab" href="#reviewrequest">Review Request</a>        
                </li>
                <li className="nav-item" role="tablist">
                    <a role="tab" className="nav-link" data-toggle="tab" href="#reviews">Reviews</a>        
                </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane container" id="reviewrequest">          
                        <div className="col" key="1">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">SNo</th>
                                        <th scope="col">Batch No.</th>
                                        <th scope="col">ILP</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Last Update</th>
                                        <th scope="col">Resolved Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>007</td>
                                        <td>ILP001</td>
                                        <td>In progress</td>
                                        <td>25/12/2018</td>
                                        <td>25/12/2018</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>007</td>
                                        <td>ILP002</td>
                                        <td>In progress</td>
                                        <td>26/12/2018</td>
                                        <td>26/12/2018</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div className="tab-pane container" id="reviews">          
                        <div className="col" key="1">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">SNo</th>
                                        <th scope="col">ILP</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Created Update</th>
                                        <th scope="col">Lastupdate Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>ILP002</td>
                                        <td>In progress</td>
                                        <td>26/12/2018</td>
                                        <td>26/12/2018</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>ILP003</td>
                                        <td>In progress</td>
                                        <td>26/12/2018</td>
                                        <td>26/12/2018</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <Link className="nav-link btn btn-primary float-right" to="/review/submission">Submission for review</Link>
            </div>
        );
    }
}

let mapStateToProps = (reduxState) => {

    return {
        reviews: reduxState.reviews
    }
  }

  export default connect(mapStateToProps, { getReviews, addSubmission })(Reviews);
