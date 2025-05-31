import React, { useCallback, useEffect, useState } from "react";

const useReCaptchaV3 = (sitekey) => {
  const [isRecaptchaReady, setIsRecaptchaReady] = useState(false);

  useEffect(() => {
    if (window.grecaptcha) {
      setIsRecaptchaReady(true);
    } else {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${sitekey}`;
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        setIsRecaptchaReady(true);
      };
    }
  }, [sitekey]);

  const executeRecaptcha = useCallback(async (action) => {
    if (isRecaptchaReady && window.grecaptcha) {
      return await window.grecaptcha.execute(sitekey, { action });
    }
  });

  return executeRecaptcha;
};

export default useReCaptchaV3;
