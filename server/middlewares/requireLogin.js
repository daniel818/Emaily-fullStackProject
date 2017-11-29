/**
 * Created by Daniel on 29/11/2017.
 */
module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: " You must log in!" });
    }


    next();
};
