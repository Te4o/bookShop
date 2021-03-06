"use strict"
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';
import { Grid, Col, Row, Button } from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './booksForm';


class BookList extends React.Component {
    componentDidMount() {
        //Dispatch an action
        this.props.getBooks();
    }
    render() {
        const booksList = this.props.books.map(function (booksArr) {
            return (
                <Col xs={12} sm={6} md={4} key={booksArr.id}>
                    <BookItem
                        id={booksArr.id}
                        title={booksArr.title}
                        discription={booksArr.discription}
                        price={booksArr.price} />
                </Col>
            )
        })
        return (
            <Grid>
                <Row style={{ marginTop: '15px' }}>
                    <Col xs={12} sm={6}>
                        <BooksForm />
                    </Col>
                    {booksList}
                </Row>
            </Grid>
        )
    }
}
function mapStateToProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBooks: getBooks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);