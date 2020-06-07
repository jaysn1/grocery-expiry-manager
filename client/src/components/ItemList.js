import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions'; 
import propTypes from 'prop-types';
import Moment from 'react-moment';


class ItemList extends Component{

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }
 
    
    render(){
        
        const { items } = this.props.item;

        return(
            <Container>
                    <ListGroup>
                        <TransitionGroup className="item-list">
                            { items.map(({ _id, name, expiry_date }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)} //passing the id to delete using the bind method.
                                            >
                                                &times;
                                        </Button>
                                        {name}
                                        <Button 
                                            className="date-btn"
                                            // color={console.log(expiry_date) ? "danger":"info"}
                                            >
                                                <Moment>{expiry_date}</Moment>
                                        </Button>
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
            </Container>
        )
    }
}

ItemList.propTypes = {
    getItems: propTypes.func.isRequired,
    item: propTypes.object.isRequired
}



const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ItemList);