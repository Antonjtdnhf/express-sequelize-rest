exports.errorHandler = (err, req, res) => {
    console.error('CUSTOM ERROR HANDLER', err);
    if (err) {
        res.status(500).send(err.message);
    }
};
