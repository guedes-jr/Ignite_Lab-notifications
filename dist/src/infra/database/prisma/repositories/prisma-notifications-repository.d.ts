import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notifications-repositories";
import { PrismaService } from "../prisma.service";
export declare class PrismaNotificationsRepository implements NotificationsRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(notification: Notification): Promise<void>;
    findById(notificationId: string): Promise<Notification | null>;
    save(notification: Notification): Promise<void>;
}
