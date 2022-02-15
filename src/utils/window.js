import { useEffect, useState } from 'react'
import { MAX_MOBILE_RES, MAX_TABLET_RES } from '../constants/devices'

export const useDeviceResolution = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [device, setDevice] = useState(getDevice(window.innerWidth))

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
    setDevice(getDevice(window.innerWidth))
  }

  function getDevice(resolution) {
    if (resolution <= MAX_MOBILE_RES) return 'mobile'
    if (resolution <= MAX_TABLET_RES) return 'tablet'
    return 'desktop'
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  return { width, device }
}

export const innerDimensions = (node) => {
  var computedStyle = getComputedStyle(node)

  let width = node.clientWidth // width with padding
  let height = node.clientHeight // height with padding

  height -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom)
  width -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight)
  return { height, width }
}
