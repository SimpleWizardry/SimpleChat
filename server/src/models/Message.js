import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema(
    {
        text: { type: String, required: true },
        dialog: { type: Schema.Types.ObjectId, ref: "Dialog", required: true },
        user: { type: Schema.Types.ObjectId, ref: "User", required: true },
        read: {
            type: Boolean,
            default: false,
        },
        attachments: [{ type: Schema.Types.ObjectId, ref: "UploadFile" }],
    },
    {
        timestamps: true,
        usePushEach: true,
    }
);

const MessageModel = mongoose.model("Message", MessageSchema);

export default MessageModel;