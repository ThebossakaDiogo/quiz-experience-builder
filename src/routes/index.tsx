import { createFileRoute } from "@tanstack/react-router";
import { VslPage } from "@/components/VslPage";

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

function Index() {
  return (
    <VslPage
      playerId="ab-6a9d73787356a801346a138d"
      playerSrc="https://scripts.converteai.net/d0ad4f4c-fe55-442c-81d6-0f2e31b81592/ab-test/6a9d73787356a801346a138d/player.js"
      desktopRedirect="/o-segredo-da-criacao"
    />
  );
}
