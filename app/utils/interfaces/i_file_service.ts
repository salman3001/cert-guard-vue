import { Image } from '#utils/types/image'
import { MultipartFile } from '@adonisjs/core/bodyparser'

export abstract class IfileService {
  abstract uploadFile(file: MultipartFile, folder?: string): Promise<string>
  abstract uploadImage(file: MultipartFile, folder?: string): Promise<Image>
  abstract deleteImage(image: Image): Promise<void>
  abstract deleteImage(image: Image): Promise<void>
  abstract deleteFile(fileUrl: string): Promise<void>
}
