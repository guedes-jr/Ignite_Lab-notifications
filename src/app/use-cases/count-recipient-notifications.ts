import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repositories";

interface CountRecipientNotificationstionRequest {
  recipientId: string;
}

interface CountRecipientNotificationstionResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotificationstion {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationstionRequest,
    ): Promise <CountRecipientNotificationstionResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}