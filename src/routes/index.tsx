import { createFileRoute } from "@tanstack/react-router";
import { useState, type MouseEvent } from "react";
import logo from "@/assets/logo.png";
import { services, categories, type Service } from "@/lib/services";

const WHATSAPP = "https://wa.me/5562998137379";

const waLink = (message: string) => `${WHATSAPP}?text=${encodeURIComponent(message)}`;

// Abre o WhatsApp em nova aba; se o navegador bloquear a aba (ex.: dentro de uma
// prévia incorporada), tenta a janela principal e, por fim, a própria janela.
const openWhatsApp = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const w = window.open(href, "_blank");
  if (w) return;
  try {
    if (window.top && window.top !== window.self) window.top.location.href = href;
    else window.location.href = href;
  } catch {
    window.location.href = href;
  }
};

const GENERAL_MESSAGE =
  "Olá, Dra. Renata Santos! Gostaria de agendar uma avaliação. Poderia me informar a próxima disponibilidade de agenda?";

const bookingMessage = (name: string) =>
  `Olá, Dra. Renata Santos! Tenho interesse no procedimento "${name}" e gostaria de agendar uma avaliação. Poderia me informar valores, formas de pagamento e a próxima disponibilidade de agenda?`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Renata Santos | Biomédica Esteta" },
      { name: "description", content: "Tratamentos estéticos faciais e corporais com a Dra. Renata Santos, biomédica esteta. Conheça os serviços e valores." },
      { property: "og:title", content: "Dra. Renata Santos | Biomédica Esteta" },
      { property: "og:description", content: "Tratamentos estéticos faciais e corporais. Conheça os serviços e valores a partir de." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const brl = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function ServiceImage({ s }: { s: Service }) {
  if (s.image) {
    // Imagem se adapta ao tamanho original (largura total, altura automática)
    return <img src={s.image} alt={s.name} loading="lazy" className="block h-auto w-full transition-transform duration-700 group-hover:scale-105" />;
  }
  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 bg-secondary text-gold-dark">
      <span className="font-display text-5xl italic text-gold-gradient">R</span>
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Imagem em breve</span>
    </div>
  );
}

function Index() {
  const [cat, setCat] = useState<string>("Todos");
  const list = cat === "Todos" ? services : services.filter((s) => s.category === cat);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-2 sm:px-6">
          <a href="#inicio" className="flex min-w-0 items-center">
            <img src={logo} alt="Dra. Renata Santos - Biomédica Esteta" className="h-14 w-auto shrink-0 sm:h-16" />
          </a>
          <nav className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.2em]">
            <a href="#servicos" className="hidden hover:text-gold-dark sm:inline">Serviços</a>
            <a href="#contato" className="hidden hover:text-gold-dark sm:inline">Contato</a>
            <a href={waLink(GENERAL_MESSAGE)} target="_blank" rel="noopener noreferrer" onClick={(e) => openWhatsApp(e, waLink(GENERAL_MESSAGE))} className="rounded-full bg-gold-gradient px-4 py-2 text-primary-foreground shadow-gold">
              Agendar
            </a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-[30px] pb-20 text-center sm:pb-28">
          <h1 className="w-full max-w-[224px] sm:max-w-[448px]">
            <img src={logo} alt="Renata Santos" className="h-auto w-full" />
          </h1>
          <div className="my-6 h-px w-24 bg-gold-gradient" />
          <p className="max-w-xl font-display text-xl italic text-muted-foreground sm:text-2xl">
            Realçando sua beleza natural com técnica, cuidado e sofisticação.
          </p>
          <a href="#servicos" className="mt-10 rounded-full border border-gold px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-gold-dark transition hover:bg-gold-gradient hover:text-primary-foreground">
            Ver serviços
          </a>
        </div>
      </section>

      <section id="servicos" className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold-dark">Nossos tratamentos</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Serviços</h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {["Todos", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition ${
                  cat === c ? "border-transparent bg-gold-gradient text-primary-foreground shadow-gold" : "border-gold/50 bg-card text-foreground hover:border-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {list.map((s) => (
              <article key={s.name} className="group mb-6 break-inside-avoid overflow-hidden rounded-lg border bg-card shadow-gold">
                <div className="overflow-hidden"><ServiceImage s={s} /></div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-dark">{s.category}</p>
                  <h3 className="mt-2 font-display text-2xl">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  <div className="mt-5 flex items-end justify-between gap-3 border-t pt-4">
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">A partir de</span>
                      <span className="font-display text-3xl font-semibold text-gold-gradient">{brl(s.price)}</span>
                    </div>
                    <a href={waLink(bookingMessage(s.name))} target="_blank" rel="noopener noreferrer"
                      onClick={(e) => openWhatsApp(e, waLink(bookingMessage(s.name)))}
                      className="shrink-0 rounded-full border border-gold px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-gold-dark transition hover:bg-gold-gradient hover:text-primary-foreground">
                      Agendar
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-ink py-16 text-ink-foreground">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <p className="font-display text-2xl italic">Agende sua avaliação</p>
          <a href={waLink(GENERAL_MESSAGE)} target="_blank" rel="noopener noreferrer" onClick={(e) => openWhatsApp(e, waLink(GENERAL_MESSAGE))} className="mt-6 rounded-full bg-gold-gradient px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground">
            Falar no WhatsApp
          </a>
          <div className="my-10 h-px w-24 bg-gold-gradient" />
          <p className="text-xs tracking-widest text-ink-foreground/60">© {new Date().getFullYear()} Dra. Renata Santos · Biomédica Esteta</p>
        </div>
      </footer>
    </div>
  );
}
