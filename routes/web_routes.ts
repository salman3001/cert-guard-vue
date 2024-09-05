import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const CertificateController = () => import('#controllers/certificates_controller')

router
  .group(() => {
    router
      .get('/', ({ inertia }) => {
        return inertia.render('home')
      })
      .as('home')

    router
      .get('/faq', ({ inertia }) => {
        return inertia.render('faq')
      })
      .as('faq')

    router
      .get('/contact', ({ inertia }) => {
        return inertia.render('contact')
      })
      .as('contact')

    router
      .get('/about', ({ inertia }) => {
        return inertia.render('about')
      })
      .as('about')

    router.get('/verify-certificate/:id', [CertificateController, 'view']).as('verify-certificate')

    //with auth
    router
      .group(() => {
        router
          .get('/my-certificate', [CertificateController, 'myCertificates'])
          .as('my-certificates')

        router
          .get('/register-certificate', ({ inertia }) => {
            return inertia.render('register-certificate')
          })
          .as('register-certificate')

        router
          .post('/register-certificate', [CertificateController, 'create'])
          .as('register-certificate.post')
      })
      .use([middleware.auth()])
  })
  .as('web')
