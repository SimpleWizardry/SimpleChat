export type ArgsType = {
    text: string,
    title: string,
    duration?: number,
    type: NotificationType
}

type NotificationType = 'info' | 'error' | 'success'