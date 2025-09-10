import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Байкал Трансфер - Трансферы на Байкал из Иркутска | Заказать трансфер',
  description: 'Комфортные трансферы из Иркутска на Байкал, Ольхон, Листвянку, Аршан...',
  keywords: 'Транспорт Иркутск, Поездки Иркутск, Транспорт Байкал, ...',
  authors: [{ name: 'Байкал Трансфер' }],
  openGraph: {
    title: 'Байкал Трансфер - Трансферы на Байкал из Иркутска',
    description: 'Комфортные трансферы из Иркутска на Байкал...',
    type: 'website',
    locale: 'ru_RU',
  },
  robots: 'index, follow',
  other: {
    'yandex-verification': '98c231a3925142dc',
    'google-site-verification': 'aBH6xchWzBsaQuZrCQhEsYgnf85mT8fxryJC3L93sEQ'
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
     
      <body className={inter.className}>
          {/* Yandex Metrika */}
       <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              
              ym(104036892, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true,
                  ecommerce:"dataLayer"
              });
            `,
          }}
        />

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104036892"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {children}</body>
    </html>
  )
}
