exports.errorHandler = (err, req, res, next) => {
    console.error('CUSTOM ERROR HANDLER', err);
    if (err) {
        res.status(500).send(err.message);
    }
};
