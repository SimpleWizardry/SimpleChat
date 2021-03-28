import { notification } from 'antd';
import {ArgsType} from "../../types/libs/helpers/notification";

export default ({text, title, duration = 3, type = 'info'} : ArgsType) =>
    notification[type]({
        message: title,
        description: text,
        duration,
    });