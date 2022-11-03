import { createActions, createAction } from 'redux-actions';

export const getType = (ReduxAction) => {
	return ReduxAction().type;
};

export const getPosts = createActions({
	getPostsRequest: undefined,
	getPostsSuccess: (payload) => payload,
	getPostsFailure: (err) => err,
});
/**
 * {
 * type: 'getPostsRequest'
 * }
 */
export const createPost = createActions({
	createPostRequest: (payload) => payload,
	createPostSuccess: (payload) => payload,
	createPostFailure: (err) => err,
});

export const updatePost = createActions({
	updatePostRequest: (payload) => payload,
	updatePostSuccess: (payload) => payload,
	updatePostFailure: (err) => err,
});
// export const deletePost = createActions({
// 	updatePostRequest: (payload) => payload,
// 	updatePostSuccess: (payload) => payload,
// 	updatePostFailure: (err) => err,
// });

export const showModal = createAction('SHOW_POST_MODAL');
export const hideModal = createAction('HIDE_POST_MODAL');
