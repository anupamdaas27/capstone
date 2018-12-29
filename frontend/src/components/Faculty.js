import React  , {Component} from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import  {  getReviews, addSubmission } from '../actionCreators';
import { connect } from 'react-redux';
import Reviewrequest from '../Reviewrequest';



class Faculty extends Component{
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

                <form>
                    <div className="form-row">
                        <div className="col">
                            <label for="inputState">State</label>
                            <select id="inputState" className="form-control">
                                <option selected>All Batches</option>
                                <option>007</option>
                                <option>008</option>
                            </select>                         
                        </div>
                        <div className="col">
                        <label for="inputState">ILP</label>
                            <select id="inputState" className="form-control">
                                <option selected>All ILPs</option>
                                <option>ILP001</option>
                                <option>ILP002</option>
                                <option>ILP003</option>
                                <option>ILP004</option>
                                <option>ILP005</option>
                            </select>
                        </div>
                    </div>
                </form>

                <div>Submissions</div>        
                <div className="col" key="1">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">SNo</th>
                                <th scope="col">Batch No.</th>
                                <th scope="col">ILP</th>
                                <th scope="col">Submitter</th>
                                <th scope="col">Reviewer</th>
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
                                <td>Ajmal</td>
                                <td>Anupam</td>
                                <td>In progress</td>
                                <td>25/12/2018</td>
                                <td>25/12/2018</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>007</td>
                                <td>ILP002</td>
                                <td>Ajmal</td>
                                <td>Anupam</td>
                                <td>In progress</td>
                                <td>26/12/2018</td>
                                <td>26/12/2018</td>
                            </tr>
                        </tbody>
                    </table> 
                </div>
                <form name="" id="" className="">
                    <div className="form-group row">
                        <label for="example-text-input" className="col-2 col-form-label">Batch</label>
                        <div className="col-10">
                            <input className="form-control" type="text" value="007" id="example-text-input" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="example-text-input" className="col-2 col-form-label">ILP</label>
                        <div className="col-10">
                            <input className="form-control" type="text" value="ILP002" id="example-text-input" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="example-text-input" className="col-2 col-form-label">Author</label>
                        <div className="col-10">
                            <input className="form-control" type="text" value="Anupam Das" id="example-text-input" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="example-email-input" className="col-2 col-form-label">Author Email</label>
                        <div className="col-10">
                            <input className="form-control" type="email" value="bootstrap@example.com" id="example-email-input" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="example-url-input" className="col-2 col-form-label">Github URL</label>
                        <div className="col-10">
                            <input className="form-control" type="url" value="https://github.com/anupamdaas27/" id="example-url-input" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputState" className="col-2 col-form-label">Reviewer</label>
                        <div className="col-10">
                            <select id="inputState" className="form-control">
                                <option selected>All Batches</option>
                                <option>Ajmal</option>
                                <option>Gokul</option>
                                <option>Mahesh</option>
                            </select> 
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="example-datetime-local-input" className="col-2 col-form-label">Due Date</label>
                        <div className="col-10">
                            <input className="form-control" type="datetime-local" value="2019-01-19T13:45:00" id="datetime-local-input" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="example-datetime-local-input" className="col-2 col-form-label">Avialable From</label>
                        <div className="col-10">
                            <input className="form-control" type="datetime-local" value="2019-01-19T13:45:00" id="datetime-local-input" />
                        </div>
                    </div>


                    <div className="form-group row">
                        <label for="example-email-input" className="col-2 col-form-label">Reviewer Email</label>
                        <div className="col-10">
                            <input className="form-control" type="email" value="bootstrap@example.com" id="example-email-input" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="example-tel-input" className="col-2 col-form-label">Reviewer Telephone</label>
                        <div className="col-10">
                            <input className="form-control" type="tel" value="9998887776" id="example-tel-input" />
                        </div>
                    </div>
                </form>

                <form method="post" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <textarea
                        onChange=""
                        value=""
                        className="form-control"
                        placeholder=""
                        name="message"
                        rows="5"
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Comment</button>
                    </div>
                </form>


                <div className="commentList">
                    <h5 className="text-muted mb-4">
                        <span className="badge badge-success">9 Comments</span>
                    </h5>
                    <div className="media mb-3">
                        <div className="media-body p-2 shadow-sm rounded bg-light border">
                            <small className="float-right text-muted">15 secs ago</small>
                            <h6 className="mt-0 mb-1 text-muted">Anupam</h6>
                            First comment at the time of review assignment
                        </div>
                    </div>
                    <div className="media mb-3">
                        <div className="media-body p-2 shadow-sm rounded bg-light border">
                            <small className="float-right text-muted">15 mins ago</small>
                            <h6 className="mt-0 mb-1 text-muted">Faculty</h6>
                            First comment at the time of review assignment
                        </div>
                    </div>
                    <div className="media mb-3">
                        <div className="media-body p-2 shadow-sm rounded bg-light border">
                            <small className="float-right text-muted">55 mins ago</small>
                            <h6 className="mt-0 mb-1 text-muted">Ajmal</h6>
                            Second comment at the time of submission
                        </div>
                    </div>
                    <div className="media mb-3">
                        <div className="media-body p-2 shadow-sm rounded bg-light border">
                            <small className="float-right text-muted">1 day ago</small>
                            <h6 className="mt-0 mb-1 text-muted">Ajmal</h6>
                            First comment at the time of submission
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}

let mapStateToProps = (reduxState) => {

    return {
        reviews: reduxState.reviews
    }
  }

  export default connect(mapStateToProps, { getReviews, addSubmission })(Faculty);
