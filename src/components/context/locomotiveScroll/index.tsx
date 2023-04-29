import LocomotiveScroll from "locomotive-scroll"
import { createContext, useEffect, useState } from "react"

const LocomotiveScrollContext = createContext({
  scroll: null
})

export const LocomotiveScrollProvider = ({ children, options }: any) => {
  const [scroll, setScroll] = useState<any>(null)

  useEffect(() => {
    if (!scroll) {
      (async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;
          console.log("test")
          setScroll(
            new LocomotiveScroll({
              el:
                document.querySelector("[data-scroll-container]") ?? undefined,
              smooth: true,
            })
          );
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      })
    } else {
      console.log(scroll)
    }
    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll])
  return (
    <LocomotiveScrollContext.Provider value={{
      scroll
    }}>{children}</LocomotiveScrollContext.Provider>
  )
}