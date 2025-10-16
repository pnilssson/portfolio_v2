"use client";

import Script from "next/script";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
  const t = useTranslations("footer");
  
  return (
    <>
      <a 
        href="https://www.iubenda.com/privacy-policy/40104380" 
        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" 
        title={t("privacyPolicy")}
      >
        {t("privacyPolicy")}
      </a>
      <Script 
        id="iubenda-privacy-script"
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

