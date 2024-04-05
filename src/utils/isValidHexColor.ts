export function isValidHexColor(hex: string) {
  // Regular expression to match HEX color formats (#RGB, #RGBA, #RRGGBB, #RRGGBBAA)
  const regex = /^#([0-9A-F]{3,4}){1,2}$/i;
  return regex.test(hex);
}
