import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>계산기 - 나만의 계산기</title>
        <meta name="description" content="간단한 계산기입니다. 사칙연산을 지원합니다." />
      </head>

      <body>{children}</body>
    </html>
  )
}
