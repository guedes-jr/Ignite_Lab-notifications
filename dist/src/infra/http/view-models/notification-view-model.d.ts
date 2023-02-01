import { Notification } from "@app/entities/notification";
export declare class NotificationViewModel {
    static toHTTP(notification: Notification): {
        id: string;
        content: string;
        category: string;
        recipientId: string;
    };
}
