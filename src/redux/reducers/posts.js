import { INIT_STATE } from '../../constants';
import { getPosts, getType, createPost, updatePost } from '../actions';

export default function postsReducers(state = INIT_STATE.posts, action) {
	switch (action.type) {
		case getType(getPosts.getPostsRequest): // case 'getPostsRequest'
			return {
				...state,
				isLoading: true,
			};
		case getType(getPosts.getPostsSuccess): // case 'getPostsSuccess'
			return {
				...state,
				isLoading: false,
				data: action.payload,
			};
		case getType(getPosts.getPostsFailure): // case 'getPostsFailures'
			return {
				...state,
				isLoading: false,
			};
		case getType(createPost.createPostRequest):
			return {
				...state,
				data: [...state.data, action.payload],
			};

		case getType(updatePost.updatePostRequest):
			return {
				...state,
				data: state.data.map((post) =>
					post._id === action.payload._id ? action.payload : post
				),
			};
		default:
			return state;
	}
}
