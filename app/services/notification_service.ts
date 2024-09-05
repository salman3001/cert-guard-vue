import Notification from '#models/notification'
import env from '#start/env'
// @ts-ignore
import { DateTime } from 'luxon'

export class NotificationService {
  async getByUserId(userId: number, query: Record<string, any>) {
    const page = query?.page || 1
    const perPage = query?.perPage || env.get('RECORDS_PER_PAGE')
    const notificationsQuery = Notification.query().where('user_id', userId)

    if (query?.type) {
      if (query.type === 'read') {
        notificationsQuery.andWhereNotNull('read_at')
      }

      if (query.type === 'unread') {
        notificationsQuery.andWhereNull('read_at')
      }
    }

    const notifications = await notificationsQuery.paginate(page, perPage)
    return notifications
  }

  async getMenuNotifications(userId: number) {
    const notifications = await Notification.query()
      .where('user_id', userId)
      .orderBy('createdAt', 'desc')
      .limit(10)
    const count = await Notification.query().where('user_id', userId).count('* as total')
    return { notifications, count }
  }

  async removeOneForUser(id: number, userId: number) {
    const notification = await Notification.query()
      .where('id', id)
      .where('user_id', userId)
      .firstOrFail()
    await notification.delete()
  }

  async removeReadForUser(userId: number) {
    await Notification.query().where('user_id', userId).whereNotNull('read_at').delete()
  }

  async removeAllForUser(userId: number) {
    await Notification.query().where('user_id', userId).delete()
  }

  async markAsRead(id: number, userId: number) {
    const notification = await Notification.query()
      .where('id', id)
      .where('user_id', userId)
      .firstOrFail()

    notification.readAt = DateTime.now()
    await notification.save()
    return notification
  }

  async markAsUnRead(id: number, userId: number) {
    const notification = await Notification.query()
      .where('id', id)
      .where('user_id', userId)
      .firstOrFail()

    notification.readAt = null
    await notification.save()
    return notification
  }
}
