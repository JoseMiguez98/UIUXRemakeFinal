import React, { Component } from 'react';
import SimpleBar from 'simplebar-react';
import { connect } from 'react-redux';
import { times } from 'lodash';
import {
    fetchCommentsRequest
} from '../../redux/actions';
import LoaderBox from '../LoaderBox';

const Comment = ({img, username, comment}) => (
    <div className="comment">
        <div className="comment__avatar">
            <img src={img} alt="user-avatar"/>
        </div>
        <div className="comment__text">
            <h3>{username}</h3>
            {comment}
        </div>
    </div>
);

class Comments extends Component {
    constructor(props) {
        super(props);
        this.simpleBarRef = React.createRef();
        this.buildComment = this.buildComments.bind(this);
    }

    componentDidMount() {
        const { fetchRequest, amount } = this.props;
        fetchRequest(amount);
    }

    buildComments() {
        const { SUCCESS, PENDING, ERROR, elems, amount } = this.props;

        return SUCCESS ?
        elems.map((comment, index) => (
            <Comment key={index} img={comment.picture} username={comment.username} comment={comment.comment}/>
        )) : PENDING ?
            times(amount, () => <LoaderBox/>) : ERROR ?
            <center><h4>Se produjo un error intente de nuevo mas tarde...</h4></center>:""
    }

    render() {
        const { amount } = this.props;
        return (
            <div className="comments-wrapper">
                <h2 className="comments-wrapper__title">Comentarios ({amount})</h2>
                <SimpleBar className="comments-wrapper__comments" ref={this.simpleBarRef}>
                    {this.buildComments()}
                </SimpleBar>
                <div className="comments-wrapper__leave-comment">
                    <span>Déjanos tu comentario:</span>
                    <div className="comments-wrapper__leave-comment__form">
                        <form id="sumbit-comment-form" onSubmit={e => e.preventDefault()}>
                            <div className="comment-wrapper">
                                <textarea name="comment"/>
                            </div>
                            <div className="submit-wrapper">
                                <button type="submit">Comentar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ comments }) => {
    const { elems, SUCCESS, ERROR, PENDING } = comments;
    return { elems, SUCCESS, ERROR, PENDING }
}

const mapDispatchToProps = dispatch => ({
    fetchRequest: ammount => dispatch(fetchCommentsRequest(ammount))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
