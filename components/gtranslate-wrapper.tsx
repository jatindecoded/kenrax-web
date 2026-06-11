"use client"

import { useEffect } from "react"

export function GTranslateWrapper() {
  useEffect(() => {
    if (window.gtranslateSettings) return

    window.gtranslateSettings = {
      default_language: "en",
      languages: ["en", "fr", "de", "it", "es", "pt", "ar", "hi", "zh-CN", "ja", "ru"],
      wrapper_selector: ".gtranslate_wrapper",
      float_switcher_open_direction: "top",
      flag_style: "2d",
      alt_flags: { en: "usa" },
      horizontal_position: "left",
      vertical_position: "bottom",
    }

    const script = document.createElement("script")
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js"
    script.defer = true
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return <div className="gtranslate_wrapper" />
}
