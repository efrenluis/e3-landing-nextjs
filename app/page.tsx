import { Sparkles, CheckCircle2, Rocket, Shield } from 'lucide-react'

export default function Page() {
  const features = [
    { title: 'No evidencia → no respuesta', Icon: Shield },
    { title: 'Sin copiar/pegar', Icon: CheckCircle2 },
    { title: 'Auditoría completa', Icon: Rocket },
  ];

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
              <li><strong>2)</s
