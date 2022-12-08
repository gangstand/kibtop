import '../public/fonts/SFPro/stylesheet.css'
import '../styles/app.css'
import '../styles/header.css'
import '../styles/slider.css'
import '../styles/home.css'


import React, { Suspense } from 'react';
import { store } from '../store/store';
import {Provider} from 'react-redux'
import { CurrencyProvider } from '../locales/CurrencyContext';
import Head from 'next/head';
import { LocationProvider } from '../locales/LocationContext'


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
      </Head>
      <Provider store={store}>
        <LocationProvider>
          <CurrencyProvider>
            <Component {...pageProps} />
          </CurrencyProvider>
        </LocationProvider>
      </Provider>
    </>
  )
}

export default MyApp
