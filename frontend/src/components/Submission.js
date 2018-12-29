import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSubmission } from '../actionCreators';

class Submission extends Component {
    constructor(props){
        super(props);
        this.state = {
            submission:{
                    "Empid":'157005',
                    "ILP":'ILP001',
                    "Comment":'',
                    "Link":'',
                    "Fileupload":''
                }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this); 
           
    }
    handleSubmit (e) {
        e.preventDefault();

        this.props.addSubmission(this.state.submission);
        //e.target.reset();
        //this.props.history.push("/");
    } 
    handleChange(e) {
        let value = e.target.value;
        let key = e.target.name;
        let {submission}  = this.state;
        submission[key] = value;
        this.setState({submission});
    }
    componentWillMount(){

    }
    componentDidMount(){

    }
    componentwillUnmount(){

    }
    componentDidUpdate(){
                
    }

    render(){

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="card card-primary mt-1  mb-1">
                    <div className="card-header text-white" style={{backgroundColor: "#6D7070"}}>
                        <h5>Submission</h5>
                    </div>
                    <div className="card-body" style={{backgroundColor: "#C2CACC"}}>  
                        <div className="row">   
                            <div className="form-group col-md-6">
                                <label htmlFor="EmpId">Employee ID</label>
                                <input className="form-control" id="Empid" name="Empid"  type="text" readOnly value={this.state.submission.Empid}  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="Comment" >Comment</label>
                                <textarea className="form-control form-control-label"  id="Comment" required name="Comment" type="text"  rows="3" onChange={this.handleChange} ></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="Link" >Link for code access</label>
                                <input className="form-control" id="Link" name="Link" type="text"  value={this.state.submission.Link} onChange={this.handleChange} />
                            </div>
                        </div>
                
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="ilp">ILP</label>
                                <div className="form-control" id="ILP">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="ilp1" name="ILP" value="ILP001" onChange={this.handleChange} />
                                        <label htmlFor="ilp1" className="form-check-label">ILP001</label>
                                    </div>                            
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="ilp2" name="ILP" value="ILP002" onChange={this.handleChange} />
                                        <label htmlFor="ilp2" className="form-check-label">ILP002</label>
                                    </div>                            
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="ilp3" name="ILP" value="ILP003" onChange={this.handleChange} />
                                        <label htmlFor="ilp3" className="form-check-label">ILP003</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="ilp4" name="ILP" value="ILP004" onChange={this.handleChange} />
                                        <label htmlFor="ilp1" className="form-check-label">ILP004</label>
                                    </div>                            
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" id="ilp5" name="ILP" value="ILP005" onChange={this.handleChange} />
                                        <label htmlFor="ilp2" className="form-check-label">ILP005</label>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="card-footer" style={{backgroundColor: "#D0D9DA"}}>
                        <input className="btn btn-primary"  type="submit" value="Save" />
                    </div>
                </div>
            </form>            
        )
    }
}

let mapStateToProps = (reduxState) => {

    return {
        submission: reduxState.submission
    }
  }

  export default connect(mapStateToProps, { addSubmission })(Submission);