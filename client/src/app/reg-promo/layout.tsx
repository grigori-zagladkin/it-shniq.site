import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import YandexMetrika from "@/components/YandexMetrika";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Промокод reg.ru",
  description: "Промокод и реферальные ссылки для reg.ru",
  keywords:
    "ssl-сертификат, ssl-certificate, промокод, regru, promocode, хостинг, домен, vps, vds, впс, вдс, ссл, reg ru, 2024, ssl, хостинг, домены, покупка, domain, hosting, впс, вдс, сервер, server, arenda",
};

export default function RegPromoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script id="metrika-counter" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
        ym(111111111, "init", {
              defer: true,
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
        });`}
        </Script>
        <Suspense fallback={<div>Loading...</div>}>
          <YandexMetrika />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
