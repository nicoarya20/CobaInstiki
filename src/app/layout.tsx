import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'Kampus IT Bisnis dan Desain Terbaik di Bali',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: never }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme='light' />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider defaultColorScheme='light'>{children}</MantineProvider>
      </body>
    </html>
  );
}