import './globals.css'
import type { Metadata } from 'next'
export const metadata:Metadata={title:'Yashika Mehndi Studio',description:'Bridal, Arabic and minimal mehndi artistry by Yashika.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
