import React from 'react';

import {postService} from "../../services";
import {Post} from "../../components";
import css from './PostPage.module.css'

class PostsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        postService.getAll().then(({data}) => this.setState({posts: data}))
    }

    render() {
        return (
            <div>
                <div>Posts:</div>
                <div className={css.PostPage}>
                    {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
                </div>
            </div>
        );
    }
}

export {PostsPage};