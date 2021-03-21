import { UserModel } from "../models";

export default  (req, res, next) => {
    /*
    return UserModel.updateOne(
        { _id: req.user.id },
        { $set:{last_seen: new Date() }},
        );
    */
    UserModel.updateOne(
        { _id: '6051e14fd07c07174b17c03a' },
        { $set:{last_seen: new Date() }},
        () => {}
    );
    next();
}