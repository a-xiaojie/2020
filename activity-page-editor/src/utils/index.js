export function handleStyle (css) {
  let cssUsable = {}
  const process = [
    'top',
    'left',
    'width',
    'height',
    'font-size',
    'border-radius',
    'border-width',
    'padding-left',
    'padding-right',
    'fontSize',
    'borderRadius',
    'borderWidth',
    'paddingLeft',
    'paddingRight'
  ]

  for (const key in css) {
    if (process.includes(key)) {
      cssUsable[key] = `${css[key]}px`
    } else {
      cssUsable[key] = css[key]
    }
  }
  return cssUsable
}
