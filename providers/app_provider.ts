import type { ApplicationService } from '@adonisjs/core/types'
import { IAuthService } from '../app/utils/interfaces/i_auth_service.js'
import { IfileService } from '#utils/interfaces/i_file_service'
import { IprofileService } from '#utils/interfaces/i_profile_service'
import { IorganizationService } from '#utils/interfaces/i_organization_service'
import { IcertificateService } from '#utils/interfaces/i_certificate_service'

export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {}

  /**
   * The container bindings have booted
   */
  async boot() {
    await import('../bin/extensions.js')
    // imports
    const { AuthService } = await import('#services/auth_service')
    const { FileService } = await import('#services/file_service')
    const { ProfileService } = await import('#services/profile_service')
    const { OrganizationService } = await import('#services/organization_service')
    const { CertificateService } = await import('#services/certificate_service')

    // bindings
    this.app.container.bind(IAuthService, () => {
      return this.app.container.make(AuthService)
    })
    this.app.container.bind(IfileService, () => {
      return this.app.container.make(FileService)
    })
    this.app.container.bind(IprofileService, () => {
      return this.app.container.make(ProfileService)
    })
    this.app.container.bind(IorganizationService, () => {
      return this.app.container.make(OrganizationService)
    })
    this.app.container.bind(IcertificateService, () => {
      return this.app.container.make(CertificateService)
    })
  }

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
