"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    gtranslateSettings?: Record<string, unknown>
  }
}

export function GTranslateWrapper() {
  const inited = useRef(false)

  useEffect(() => {
    if (inited.current) return
    inited.current = true

    window.gtranslateSettings = {
      default_language: "en",
      languages: ["en", "fr", "de", "it", "es", "pt", "ar", "hi", "zh-CN", "ja", "ru"],
      wrapper_selector: ".gtranslate_wrapper",
      float_switcher_open_direction: "top",
      flag_style: "2d",
      alt_flags: { en: "usa" },
    }

    const script = document.createElement("script")
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js"
    script.defer = true
    document.head.appendChild(script)

    const observer = new MutationObserver(() => {
      const el = document.querySelector<HTMLElement>(".gt_float_switcher")
      if (!el) return
      observer.disconnect()

      const s = document.createElement("style")
      s.textContent = `
        .gt_float_switcher {
          font-size: 11px !important;
          max-height: 34px !important;
        }
        .gt-current-lang {
          padding: 6px 8px !important;
        }
        .gt_float_switcher img {
          width: 14px !important;
          height: 14px !important;
        }
        .gt_float_switcher .gt_options a {
          padding: 4px 8px !important;
          font-size: 11px !important;
        }
        .gt_float_switcher .gt_options a img {
          width: 14px !important;
          height: 14px !important;
        }
      `
      document.head.appendChild(s)
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      script.remove()
      observer.disconnect()
    }
  }, [])

  return <div className="gtranslate_wrapper" />
}
