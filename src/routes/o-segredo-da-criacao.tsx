import { createFileRoute } from "@tanstack/react-router";
import { VslPage } from "@/components/VslPage";

export const Route = createFileRoute("/o-segredo-da-criacao")({
  head: () => ({
    meta: [
      { title: "O Segredo da Criação — assista antes que saia do ar" },
      {
        name: "description",
        content:
          "Apresentação confidencial com acesso liberado. Assista ao vídeo completo antes que saia do ar.",
      },
      { property: "og:title", content: "O Segredo da Criação — assista antes que saia do ar" },
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
  component: Segredo,
});

function Segredo() {
  return (
    <VslPage
      playerId="ab-6ab7273b236c9a68c9f25c3a"
      playerSrc="https://scripts.converteai.net/568c6287-f3ac-47e9-84ac-0a7efba40e25/ab-test/6ab7273b236c9a68c9f25c3a/player.js"
    />
  );
}
