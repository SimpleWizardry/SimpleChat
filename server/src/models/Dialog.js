import mongoose,{ Schema } from 'mongoose';

const DialogSchema = new Schema ({
    /*
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    partner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
     */
    text: { type: String, required: true },
    last_message: {
        type: Schema.Types.ObjectId,
        ref: 'Dialog'
    },
    unread: Boolean
},
    {
        timestamps: true
    }
);



const DialogModel = mongoose.model('Dialog', DialogSchema)

export default DialogModel;