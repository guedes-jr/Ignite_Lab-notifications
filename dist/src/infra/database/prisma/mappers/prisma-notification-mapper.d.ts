import { Notification } from "@app/entities/notification";
import { Notification as RawNotification } from '@prisma/client';
export declare class PrismaNotificationMapper {
    static toPrisma(notification: Notification): {
        id: string;
        category: string;
        content: string;
        recipientId: string;
        readAt: Date | null | undefined;
        createdAt: Date;
    };
    static toDomain(raw: RawNotification): Notification;
}
