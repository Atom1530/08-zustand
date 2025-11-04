// app/not-found.tsx
export const metadata = {
  title: '404 — Page Not Found | NoteHub',
  description: 'This page does not exist or may have been moved.',
  url: 'https://notehub.com/404',
  openGraph: {
    title: '404 — Page Not Found | NoteHub',
    description: 'This page does not exist or may have been moved.',
    url: 'https://notehub.com/404',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub 404',
      },
    ],
  },
};

export default function NotFound() {
  return (
    <div>
      <h1>404 — Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}
