import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import type { Image } from '../utils/types/image.js'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ prepare: (v) => JSON.stringify(v), consume: (v) => JSON.parse(v) })
  declare avatar: Image

  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
