export class Routes {
  auth = {
    sigin: () => '/auth/signin',
    sigout: () => '/auth/signout',
    sigin_post: () => '/auth/signin',
    signup: () => `/auth/signup`,
    signup_post: () => `/auth/signup`,
    confirm_email: (email: string) => `/auth/confirm-email/${email}`,
    forget_password: () => `/auth/forget-password`,
    forget_password_post: () => `/auth/forget-password`,
    reset_password: (email: string) => `/auth/reset-password/${email}`,
    reset_password_post: () => `/auth/reset-password/`,
  }

  profile = {
    me: {
      view: () => `/profile/me`,
      update: () => `/profile/me`,
      getAvatar: () => `/profile/me/avatar`,
      updatePassword: () => `/profile/me/update-password`,
      updateUserDetails: () => `/profile/me/update-user-details`,
      updateOrganization: () => `/profile/me/update-organization`,
    },
  }

  web = {
    home: () => '/',
    contact: () => '/contact',
    faq: () => '/faq',
    about: () => '/about',
    myCertificate: () => '/my-certificate',
    verifyCertificate: (id: string) => `/verify-certificate/${id}`,
    registerCertificate: () => '/register-certificate',
    registerCertificate_post: () => '/register-certificate',
  }
}

export const routes = new Routes()
