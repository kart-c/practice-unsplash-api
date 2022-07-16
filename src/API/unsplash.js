import axios from 'axios';

export default axios.create({
	baseURL: 'https://www.unsplash.com',
	headers: {
		Authorization: 'Client-ID wkqqkZYZlKZvcOCVkV7_tyl2-W1NQyaUz8ESh3nci24',
	},
});
