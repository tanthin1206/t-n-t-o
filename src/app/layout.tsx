import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TÀN ẢO | Visual Novel Trải Nghiệm & Thấu Cảm',
  description: 'Trải nghiệm một lựa chọn không ai muốn phải chọn. Web game tương tác phản ánh nạn nhân lừa đảo việc làm và cưỡng ép lao động.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body className="min-h-screen bg-[#05070a] text-slate-100 antialiased selection:bg-red-900/60 selection:text-white">
        {children}
      </body>
    </html>
  );
}
