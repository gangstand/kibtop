
import '../styles/app.css'
import '../styles/header.css'
import '../styles/slider.css'
import '../styles/home.css'
import '../styles/registration.css'
import '../styles/login.css'
import '../styles/recovery.css'


import React, { Suspense } from 'react';
import { store } from '../store/store';
import {Provider} from 'react-redux'
import { CurrencyProvider } from '../locales/CurrencyContext';
import Head from 'next/head';
import { LocationProvider } from '../locales/LocationContext'
import {SessionProvider} from 'next-auth/react'



function MyApp({ Component, pageProps, session }) {
  

  return (
    <>
      <SessionProvider {...{session}}>
        <Provider store={store}>
            <LocationProvider>
              <CurrencyProvider>
                <Component {...pageProps} />
              </CurrencyProvider>
            </LocationProvider>
        </Provider>
      </SessionProvider>
    </>
  )
}

export default MyApp
