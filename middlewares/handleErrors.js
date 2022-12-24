const ERROR_HANDLERS = {
	CastError: response => response.status(400).send({ error: 'id used is malformed' }),

	ValidationError: (response, { message }) =>
		response.status(409).send({ error: message }),

	JsonWebTokenError: response => response.status(401).json({ error: 'token missing or invalid' }),

	TokenExpirerError: response => response.status(401).json({ error: 'token expired' }),

	defaultError: response => response.status(500).end()

}

const handleErrors = (error, request, response) => {

	console.error(error.name)

	const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError

	handler(response, error)
}

export default handleErrors