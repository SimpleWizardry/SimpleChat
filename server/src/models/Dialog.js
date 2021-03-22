import mongoose,{ Schema } from 'mongoose';

const DialogSchema = new Schema ({
    partner: { type: Schema.Types.ObjectId, ref: "User" },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message" },
},
{
    timestamps: true,
});
    /*
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    partner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    text: { type: String, require: true },
    last_message: {
        type: Schema.Types.ObjectId,
        ref: 'Dialog'
    },
    unread: Boolean
},
    {
        timestamps: true
    }
*/

const DialogModel = mongoose.model('Dialog', DialogSchema)

export default DialogModel;