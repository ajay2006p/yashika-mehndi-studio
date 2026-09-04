import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { mehndi: { ink:'#32180f', maroon:'#572116', rose:'#a95d62', gold:'#b88a48', cream:'#fffaf4', sand:'#f1dfca', paper:'#fffdf9' } }, fontFamily:{display:['Georgia','serif']} } }, plugins:[] }
export default config
