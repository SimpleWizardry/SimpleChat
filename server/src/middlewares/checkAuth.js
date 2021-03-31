import { verifyJWTToken } from "../libs";

export default (req, res, next) => {
    if (
        req.path === "/user/signin" ||
        req.path === "/user/signup" ||
        req.path === "/user/verify"
    )
    {
        console.log(req.path)
        return next();
    }

    const token = "token" in req.headers ? (req.headers.token) : null;
    if (token) {
        verifyJWTToken(token)
            .then((user) => {
                if (user) {
                    req.user = user.data._doc;
                }
                next();
            })
            .catch(() => {
                res.status(403).json({ message: "Invalid auth token provided." });
            });
    }
};