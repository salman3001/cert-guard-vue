import type User from '#models/user'
import { PageProps } from '@adonisjs/inertia/types'

export interface IpageProps extends PageProps {
  summary?: Record<string, string>
  message?: { type: 'success' | 'Error' | 'warning' | ',info'; message: string }
  appName: string
  user?: User
  query?: Record<string, string>
}
