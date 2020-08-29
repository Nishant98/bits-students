import React, { Component } from 'react';
import {  Table, Button, Modal, ModalBody, ModalHeader, Row, Col, Label } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Control, Form } from 'react-redux-form';
import { InitialForm } from '../redux/forms.js';

function RenderStudent({studentId, studentName}){
    
    return(
        <tr>
            <td>{studentId}</td>
            <td>{studentName}</td>
        </tr>
    );
}

class Home extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            isModalOpen: true,
        };
    }

    toggleModal = (modalProps = '', studentId = '', studentName = '') => {
        this.props.resetForm();
        InitialForm.studentId = studentId;
        InitialForm.studentName = studentName;
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });        
    }

    handleSubmit = (values) => {

            this.toggleModal();
            this.props.callAddStudent(values.studentId, values.studentName)
            this.props.resetForm();    
    }


    render() {
        const students = this.props.students.map(student => {
            return (
                <RenderStudent key={student.studentId} studentName={student.studentName} studentId={student.studentId} toggleModal={this.toggleModal} /> 
            );
        })
        
        if(this.props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(this.props.errMess){
            return(
                <div className="container offset-4 mt-5">
                    <div className="row offset-1 mb-3">
                        <h4>{this.props.errMess}</h4>
                    </div>
                    <div className="row">
                        <img width="40%" src="assets/images/cancel.svg" alt="" />
                    </div>
                </div> 
            );
        }
        else{
            return(
                <div className="container">                 
                    <div className="row">
                        <div className="col-md-12">
                            <Button onClick={() => this.toggleModal}>Add Student</Button>
                            <Table dark bordered responsive hover>
                                <thead>
                                    <tr className="text-center">
                                    <th>Student ID</th>
                                    <th>Student Name</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {students}
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div className="row">
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Add Student</ModalHeader>
                            <ModalBody>
                                <Form model="form" onSubmit={(values) => this.handleSubmit(values)}>
                                    <Row className="form-group">
                                        <Label htmlFor="studentId" md={12}>Student Id</Label>
                                        <Col md={12}>
                                            <Control.text noValidate model=".studentId" id="studentId" name="studentId" placeholder="Student ID" className="form-control" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Label htmlFor="studentName" md={12}>Student Name</Label>
                                        <Col md={12}>
                                            <Control.text noValidate model=".studentName" id="studentName" name="studentName" placeholder="Student Name" className="form-control" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <Col md={{size:12}}>
                                            <Button type="submit" color="primary">Add</Button>
                                        </Col>
                                    </Row>
                                </Form> 
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            );
        }
    }
}

export default Home;