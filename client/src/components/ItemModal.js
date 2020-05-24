import  React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


class ItemModal extends Component {
    state = {
        modal: false,
        name: '',
        expiry_date: new Date(),
    }
    
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        console.log(this.state);
        this.setState({[e.target.name]: e.target.value });
    }

    onDateChange = (date) => {
        this.setState({expiry_date: date});
        console.log(this.state);
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name,
            expiry_date: this.state.expiry_date
        }

        // Add item vis addItem action
        this.props.addItem(newItem);

        //Close Modal
        this.toggle();
    }

    render(){
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Add Item
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                  <ModalHeader toggle={this.toggle}>Add to Item List</ModalHeader> 
                  <ModalBody>
                      <Form onSubmit={this.onSubmit}>
                          <FormGroup>
                              <Label for="item">Item</Label>
                              <Input
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add item to list"
                                onChange={this.onChange} />
                              <Label for="item" style={{ marginTop:'1rem'}}>Date</Label>
                              <br></br>
                              <DatePicker
                                name="expiry_date"
                                id="item"
                                style={{ marginTop:'2rem'}}
                                selected={this.state.expiry_date}
                                onChange={this.onDateChange} /> 

                                <Button
                                    color="dark"
                                    style={{ marginTop:'2rem'}}
                                    block
                                >
                                    Add Item
                                </Button>
                          </FormGroup>
                      </Form>
                  </ModalBody>     
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);