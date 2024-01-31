import './global.css'
import localFont from 'next/font/local'
export const metadata = {
  title: 'Резюме Зубкова А.С. Frontend разработчик',
  description: 'Резюме  Frontend разработчик React Зубков А.С.',
}
//
//
const myFont = localFont({
  src: '/Natasha.ttf',
  display: 'swap',
})
// const myFont = localFont({
//   src: '/pobeda-regular.ttf',
//   display: 'swap'
// })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
