import React from 'react';

import {commentService} from "../../services";
import {Comment} from "../../components";
import css from './CommentsPage.module.css';

class CommentsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        commentService.getAll().then(({data}) => this.setState({comments: data}));
    }

    render() {
        return (
            <div>
                <div>Comments:</div>
                <div className={css.Comments}>
                    {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
                </div>
            </div>
        );
    }
}

export {CommentsPage};