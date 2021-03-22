import mongoose,{ Schema } from 'mongoose';
import { isEmail } from 'validator';
//import generatePasswordHash from '../libs/generatePasswordHash';

const UserSchema = new Schema ({
    email: {
        type: String,
        required: 'Email address is required',
        validate: [ isEmail, 'Invalid email' ],
        unique: true
    },
    full_name: {
        type: String,
        required: 'Full name is required'
    },
    password: {
        type: String,
        required: true
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    confirm_hash: String,
    avatar: String,
    last_seen: {
        type: Date,
        default: new Date()
    },
},
    {
        timestamps: true
});

/*
UserSchema.pre("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }

    user.password = await generatePasswordHash(user.password);
    user.confirm_hash = await generatePasswordHash(new Date().toString());
});
*/
const UserModel = mongoose.model('User', UserSchema)

export default UserModel;