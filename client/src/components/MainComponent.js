import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents, postStudent } from '../redux/ActionCreators'
import { actions } from 'react-redux-form';

// map redux store state into props that will be available to the component by connecting this component to Redux store (wrap the component inside connect)
const mapStateToProps = state => {
    return{
      students: state.students
    }         
}

// receives dispatch as a parameter, addComment is a property that takes 4 parameter and dispatches the action (ActionCreator gives the object that is passed to dispatch)
const mapDispatchToProps = (dispatch) => ({
    resetForm: () => {dispatch(actions.reset('form'))},
    fetchStudents:  () => {dispatch(fetchStudents())},
    postStudent: (studentId, studentName) => dispatch(postStudent(studentId, studentName))
});

class Main extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
      this.props.fetchStudents();
  }

  render() {

    const HomePage = () => {
      return(
          <Home students={this.props.students.students} 
                isLoading={this.props.students.isLoading}
                errMess={this.props.students.errMess}
          />
      );
    }
    
    return (
      <div>
          <Header />        
              <Switch>
                  <Route path="/" component={HomePage} />
                  <Redirect to="/" />
              </Switch>
          <Footer />
      </div>
    );
  }
}

// connect takes mapStateToProps as a parameter, also takes mapDispatchToProps and makes them available in react component.
// if using react router, then we have to surrond connect with "withRouter"
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));  