import Organization from '#models/organization'

export abstract class IorganizationService {
  abstract viewByUserId(userId: number): Promise<Organization | null>
}
