import './globals.css'
import '@/services/auth/firebase'
import { AuthUserProvider } from '@/context/auth/UserContext';

export const metadata = {
  title: 'auth-next-firebase',
  description: 'auth firebaseui',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AuthUserProvider>
          {children}
        </AuthUserProvider>
      </body>
    </html>
  )
}
