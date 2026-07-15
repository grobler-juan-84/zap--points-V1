import { createBrowserRouter } from 'react-router-dom'
import { LandingPage } from '@/features/landing/LandingPage'
import { MarketingLayout } from '@/layouts/MarketingLayout' 

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
    element: <MarketingLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: '/signup',
    element: <MarketingLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
])
