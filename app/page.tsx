import { Sparkles, CheckCircle2, Rocket, Shield } from 'lucide-react'

export default function Page() {
  const features = [
    { title: 'No evidencia → no respuesta', Icon: Shield },
    { title: 'Sin copiar/pegar', Icon: CheckCircle2 },
    { title: 'Auditoría completa', Icon: Rocket },
  ]

  return (
    <>
      <section className="container pt-16 md:pt-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1>E3 sin humo: evidencias con citas y tareas automáticas.</h1>
            <p className="mt-4 text-lg text-gray-700">
              De PDFs interminables a decisiones accionables. Sin alucinaciones: si no hay evidencia, no respondemos.
            </p>
            <div className="mt-6 flex gap-3">
              <a className="btn-primary" href="/contacto">Solicitar piloto</a>
              <a className="btn-secondary" href="/demo">Ver demo</a>
            </div>
            <div className="mt-6 flex gap-3 text-sm">
              <span className="badge">Slack</span>
              <span className="badge">Orquestador + RAG</span>
              <span className="badge">Notion/Asana</span>
              <span className="badge">Canva</span>
            </div>
          </div>

          <div className="card">
            <h2 className="flex items-center gap-2">
              <Sparkles className="text-atlantic" /> Cómo funciona (3 pasos)
            </h2>
            <ol className="mt-4 space-y-3 text-gray-700">
              <li><strong>1)</strong> Envías <code>/evidencia</code> o <code>/brief</code> en Slack.</li>
              <li><strong>2)</strong> Orquestador + RAG buscan y responden con <em>citas/páginas</em>.</li>
              <li><strong>3)</strong> Entregables: matriz, brief, tareas Asana, CSV para Canva.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container grid md:grid-cols-3 gap-6">
          {features.map(({ title, Icon }, i) => (
            <div key={i} className="card">
              <div className="flex items-center gap-2 mb-2">
                <Icon size={20} className="text-atlantic" />
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="text-gray-700">
                Política estricta, flujos automatizados y métricas de coste/latencia/errores.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="mb-6">Packs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Starter (Piloto)', items: ['1 carpeta E3', 'Matriz con citas', '1 comando Slack'], cta: '/contacto' },
              { name: 'Pro (Producción)', items: ['Todo Starter', 'Brief + tareas Asana', 'Observabilidad básica'], cta: '/contacto' },
              { name: 'Enterprise', items: ['On-prem/Compliance', 'SLA y formación', 'Integraciones avanzadas'], cta: '/contacto' },
            ].map((p, i) => (
              <div key={i} className="card">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {p.items.map((it, ix) => (
                    <li key={ix} className="flex gap-2">
                      <CheckCircle2 className="text-success" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a className="btn-primary mt-6 inline-block" href={p.cta}>Solicitar</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
