class ClientError extends Error {
  constructor(message, statusCode = 404) {
    super(message);

    if (this.constructor.name === 'ClientError') {
      throw new Error('cannot instantiate abstract class');
    }

    this.statusCode = statusCode;
    this.name = 'ClientError';
  }
}

module.exports = ClientError;
