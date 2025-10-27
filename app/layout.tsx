import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E3 sin humo — Evidencias con citas y tareas automáticas',
  description: 'Slack + Orquestador + RAG + Notion/Asana.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav className="bg-white/80 backdrop-blur border-b">
          <div className="container flex items-center justify-between h-16">
            <a href="/" className="font-bold">E3<span className="text-atlantic">·</span>AI</a>
            <div className="flex gap-4 text-sm">
              <a href="/metodologia">Metodología</a>
              <a href="/servicios">Servicios</a>
              <a href="/casos">Casos</a>
              <a href="/demo">Demo</a>
              <a href="/faq">FAQs</a>
              <a href="/contacto" className="btn-primary">Solicitar piloto</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t py-10 text-sm">
          <div className="container flex items-center justify-between">
            <p>© {new Date().getFullYear()} E3·AI</p>
            <div className="flex gap-4">
              <a href="/legal/privacidad">Privacidad</a>
              <a href="/legal/cookies">Cookies</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
