import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoot from './app-root.tsx';
import './styles/resume-page.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
);
