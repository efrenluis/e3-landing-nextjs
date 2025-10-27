export default function Page() {
  return (
    <section className="container pt-16 max-w-2xl">
      <h1>Contacto</h1>
      <p className="mt-4 text-gray-700">
        Mientras conecto Slack/Notion, escríbeme:
      </p>
      <div className="card mt-6 space-y-3">
        <a
          className="btn-primary"
          href="mailto:efrenlpc@gmail.com?subject=Inter%C3%A9s%20en%20E3&body=Hola%20Efr%C3%A9n%2C%20me%20interesa%20E3."
        >
          Escribir por Email
        </a>
        <a
          className="btn-secondary"
          href="https://wa.me/34636667948?text=Hola%20Efr%C3%A9n%2C%20me%20interesa%20E3."
          target="_blank"
          rel="noopener noreferrer"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </section>
  )
}
