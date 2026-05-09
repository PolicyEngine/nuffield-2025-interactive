import type { Metadata, Viewport } from 'next';
import './globals.css';

const TITLE = 'PolicyEngine UK — Nuffield RDA 2025';
const DESCRIPTION =
  'Interactive version of the Nuffield Foundation RDA 2025 grant application from PolicyEngine UK (FR-000027022).';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: 'PolicyEngine' }],
  icons: {
    icon: 'https://raw.githubusercontent.com/PolicyEngine/policyengine-app/master/src/images/logos/policyengine/teal.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#319795',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
