import Organization from '#models/organization'
import { IorganizationService } from '#utils/interfaces/i_organization_service'

export class OrganizationService extends IorganizationService {
  /**
   *
   */
  constructor() {
    super()
  }
  async viewByUserId(userId: number) {
    const org = await Organization.findBy('userId', userId)
    return org
  }
}
