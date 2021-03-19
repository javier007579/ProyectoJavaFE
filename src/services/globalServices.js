

export const buildAuthorization = (accessToken) => `Bearer ${accessToken}`;

export const buildDefaultOptions = (accessToken, responseType='json') => {
	return {
		headers: {
			Authorization: buildAuthorization(accessToken)
		},
		responseType
	};
};

export const mapToHttpBody = data => {
	return Object.keys(data)
		.map(key =>
			encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
};