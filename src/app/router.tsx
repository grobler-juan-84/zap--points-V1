import { createBrowserRouter } from 'react-router-dom'
import { LandingPage } from '@/features/landing/LandingPage'
import { MarketingLayout } from '@/layouts/MarketingLayout'
import { AuthLayout } from '@/layouts/AuthLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MarketingLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: '/signup',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
])
