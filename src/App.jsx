import React from 'react';
import './App.css'
import "./index.css"
import { UserProvider } from './providers/UserProvider';
import { Router } from "./router/Router";
import { RecoilRoot } from 'recoil';

export default function App() {
  return (
  <RecoilRoot>
    <UserProvider>
      <Router />
    </UserProvider>
  </RecoilRoot>
  )
}