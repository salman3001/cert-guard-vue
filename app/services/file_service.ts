import env from '#start/env'
import { IfileService } from '#utils/interfaces/i_file_service'
import { Image } from '#utils/types/image'
import { MultipartFile } from '@adonisjs/core/bodyparser'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

export class FileService extends IfileService {
  constructor() {
    super()
  }

  async uploadFile(file: MultipartFile, folder: string = '') {
    const buffer = readFileSync(file.tmpPath!)
    return await this.writeFile(folder, buffer, file.extname || '')
  }

  async uploadImage(file: MultipartFile, folder: string = '') {
    const url = await this.resizeImageAndSave(file, folder)
    const thumbnailUrl = await this.resizeImageAndSave(file, folder, 320, 240)
    return {
      url,
      thumbnailUrl,
    }
  }

  async deleteImage(image: Image): Promise<void> {
    await this.deleteFile(image.url)
    await this.deleteFile(image.thumbnailUrl)
  }

  async deleteFile(fileUrl: string): Promise<void> {
    // Check if the file exists
    if (fileUrl) {
      const filePath = path.join(app.makePath(env.get('UPLOADS_PATH')), fileUrl)
      if (existsSync(filePath)) {
        // Delete the file
        unlinkSync(filePath)
      }
    }
  }

  private async resizeImageAndSave(
    file: MultipartFile,
    folder: string = '',
    width?: number,
    height?: number
  ): Promise<string> {
    // Resize the image
    const resizedBuffer = await sharp(file.tmpPath)
      .resize(width, height, { fit: 'cover' })
      .toFormat('webp')
      .toBuffer()

    return await this.writeFile(folder, resizedBuffer, 'webp')
  }

  private async writeFile(folder: string = '', buffer: NodeJS.ArrayBufferView, extName: string) {
    // Ensure the output directory exists
    const fileName = Date.now() + cuid() + `.${extName}`
    const url = path.join(folder, fileName)
    const outputDir = path.join(app.makePath(env.get('UPLOADS_PATH')), folder)
    const outputPath = path.join(outputDir, fileName)
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true })
    }

    // Write the resized image buffer to the file system
    writeFileSync(outputPath, buffer)

    return path.posix.normalize(url).replace(/\\/g, '/')
  }
}
