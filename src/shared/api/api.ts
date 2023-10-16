import axios from 'axios';

export const $api = axios.create({
	baseURL:  __API__,
	params: {
		key: import.meta.env.VITE_API_KEY
	}
});
