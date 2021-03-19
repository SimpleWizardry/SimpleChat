import mongoose,{ Schema } from 'mongoose';
import { isEmail } from 'validator';

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
    last_seen: Date,
},
    {
        timestamps: true
});


const UserModel = mongoose.model('User', UserSchema)

export default UserModel;