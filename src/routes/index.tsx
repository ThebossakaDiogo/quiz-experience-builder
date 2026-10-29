import { createFileRoute } from "@tanstack/react-router";
import { createElement, useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Assista a este vídeo antes que saia do ar" },
      {
        name: "description",
        content:
          "Apresentação confidencial com acesso liberado. Assista ao vídeo completo antes que saia do ar.",
      },
      { property: "og:title", content: "Assista a este vídeo antes que saia do ar" },
      {
        property: "og:description",
        content: "Apresentação confidencial com acesso liberado. Assista ao vídeo completo antes que saia do ar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

type C = [string, string, string, "red" | "gray" | "amber" | "yellow"];
const comments: C[] = [
  ["MS", "Marcos Silva", "gente que coincidência achei esse vídeo, justo hoje que minha conta tava no vermelho", "red"],
  ["AL", "Ana Lúcia", "será que isso funciona mesmo? já gastei tanta grana com curso de mentalização e nada mudou...", "gray"],
  ["CE", "Carlos_Edu", "@Ana Lúcia mano eu tbm não botava fé, apliquei uns 4 dias e recebi um dinheiro que tava perdido lá de 2021", "amber"],
  ["SM", "Sônia Maria", "isso aqui bate com tudo que minha avó falava sobre abrir caminho pro dinheiro", "amber"],
  ["RM", "Ricardo M.", "se for o que tô pensando, vai mudar muita coisa na minha vida financeira", "amber"],
  ["FG", "Felipe G", "esse começo já desmontou minha crença de que dinheiro é difícil de chegar", "red"],
  ["JP", "João Pedro", "alguém sabe se precisa comprar material caro pra fazer isso?", "yellow"],
  ["LC", "Luciana Costa", "@João Pedro ele já falou que é só papel e caneta, eu faço antes de dormir e começou a vir oportunidade de renda extra", "red"],
  ["MA", "Maria_Aparecida", "tô anotando tudo, vou aplicar ainda hoje", "red"],
  ["BT", "Bruno T.", "cheguei agora, perdi o começo? alguém resume o que já passou", "red"],
  ["PA", "Patrícia Alves", "@Bruno T. ele explicou como a gente sabota a própria abundância sem perceber, volta uns minutinhos", "red"],
  ["R8", "Rafael_88", "caramba, eu fazia isso do trope do dinheiro sem querer kkkk nem sabia", "red"],
  ["CS", "Cleide Souza", "isso de 'respeitar o dinheiro que entra' me pegou, eu gastava no dia que recebia", "yellow"],
  ["JH", "Jorge Henrique", "ninguém nunca explicou de forma tão simples como a abundância entra na vida da gente", "red"],
  ["TR", "Tatiane R.", "nossa eu sentia culpa de querer prosperar, achava que era egoísmo 🤦‍♀️", "red"],
  ["WL", "Wesley Lima", "é isso mesmo, a mudança de mindset sobre riqueza é tudo", "gray"],
];

const PLAYER_ID = "ab-6a9d73787356a801346a138d";
const PLAYER_SRC =
  "https://scripts.converteai.net/d0ad4f4c-fe55-442c-81d6-0f2e31b81592/ab-test/6a9d73787356a801346a138d/player.js";

function Index() {
  const [visible, setVisible] = useState(5);
  const [typing, setTyping] = useState(true);
  const [viewers, setViewers] = useState(1452);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.querySelector(`script[src="${PLAYER_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = PLAYER_SRC;
    s.async = true;
    document.head.appendChild(s);
  }, []);

  useEffect(() => {
    if (visible >= comments.length) {
      setTyping(false);
      return;
    }
    let t2: ReturnType<typeof setTimeout>;
    const t1 = setTimeout(() => {
      setTyping(false);
      t2 = setTimeout(() => {
        setVisible((v) => v + 1);
        setTyping(true);
      }, 400);
    }, 3600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [visible]);

  useEffect(() => {
    const id = setInterval(() => {
      setViewers((v) => Math.max(1428, Math.min(1478, v + (Math.random() > 0.42 ? 1 : -1))));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="vsl-page">
      <main className="vsl-container">
        <div className="flex justify-center">
          <span className="vsl-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2 2 21h20L12 2z" />
              <path d="M12 9v5" />
              <path d="M12 17.5h.01" />
            </svg>
            Apresentação Confidencial — Acesso Liberado
          </span>
        </div>

        <h1 className="vsl-h1">
          Assista a este vídeo até o final antes que <span>saia do ar</span>.
        </h1>

        <div className="vsl-player">
          {createElement("vturb-smartplayer", {
            id: PLAYER_ID,
            style: { display: "block", margin: "0 auto", width: "100%" },
          })}
        </div>

        <div className="vsl-viewers">
          <span className="vsl-dot" aria-hidden="true" />
          <span>
            <strong>{viewers.toLocaleString("pt-BR")} pessoas</strong> estão assistindo a este vídeo agora
          </span>
        </div>

        <section>
          <div className="vsl-ctitle">
            <span className="vsl-dot" aria-hidden="true" />
            <h2>Comentários ao Vivo</h2>
          </div>
          <div className="vsl-box" ref={boxRef} aria-live="polite">
            {comments.slice(0, visible).map(([ini, name, msg, tone]) => (
              <div className="vsl-comment" key={name}>
                <div className={`vsl-avatar vsl-${tone}`} aria-hidden="true">{ini}</div>
                <div className="min-w-0">
                  <div className="vsl-name">{name}</div>
                  <p className="vsl-msg">{msg}</p>
                </div>
              </div>
            ))}
            {typing && (
              <div className="vsl-typing" aria-label="Alguém está digitando">
                <span className="vsl-tdot" />
                <span className="vsl-tdot" />
                <span className="vsl-tdot" />
                <span>alguém está digitando...</span>
              </div>
            )}
          </div>
        </section>

        <footer className="vsl-footer">
          <a href="#">Termos de Uso</a>
          <span aria-hidden="true">·</span>
          <a href="#">Políticas de Privacidade</a>
        </footer>
      </main>
    </div>
  );
}
