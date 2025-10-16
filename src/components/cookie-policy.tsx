"use client";

import Script from "next/script";
import { useTranslations } from "next-intl";

export default function CookiePolicy() {
  const t = useTranslations("footer");
  
  return (
    <>
      <a 
        href="https://www.iubenda.com/privacy-policy/40104380/cookie-policy" 
        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" 
        title={t("cookiePolicy")}
      >
        {t("cookiePolicy")}
      </a>
      <Script 
        id="iubenda-cookie-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (w,d) {
              var loader = function () {
                var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; 
                s.src="https://cdn.iubenda.com/iubenda.js"; 
                tag.parentNode.insertBefore(s,tag);
              }; 
              if(w.addEventListener){
                w.addEventListener("load", loader, false);
              }else if(w.attachEvent){
                w.attachEvent("onload", loader);
              }else{
                w.onload = loader;
              }
            })(window, document);
          `
        }}
      />
    </>
  );
}

