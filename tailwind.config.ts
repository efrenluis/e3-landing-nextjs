import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: { extend: { colors: { atlantic:'#2C7BE5', success:'#0BB07B' } } },
  plugins: [],
}
export default config
