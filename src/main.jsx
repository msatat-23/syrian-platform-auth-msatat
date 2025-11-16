import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Register from './pages/auth/register/register.jsx';
import Login from './pages/auth/login/login.jsx';
import NewPassword from './pages/auth/newpassword/new-password.jsx';
import ForgotPassword from './pages/auth/forgotpassword/forgot-password.jsx';
import Layout from './layout/layout.jsx'
const client = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<App />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='new-password' element={<NewPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
