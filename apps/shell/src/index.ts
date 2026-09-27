// Indirection required by Module Federation: the federation runtime must boot
// before any shared dependency (React, react-dom) is evaluated.
import('./bootstrap');

export { AppShell } from './components/Shell';
export { Header } from './components/Header';
export { Sidebar } from './components/Sidebar';
