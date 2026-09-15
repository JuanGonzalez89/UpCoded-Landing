import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | UpCoded',
  description: 'Notas prácticas sobre desarrollo web y estrategia digital.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // The [lang] layout already owns the document <html> and <body>. A nested
  // document here caused invalid markup and hydration errors when navigating
  // back from a post to the index.
  return children;
}
