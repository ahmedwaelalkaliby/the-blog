"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen ">
          <div className="flex items-center justify-between px-25">
          <h1 className="text-xl font-bold text-gray-800">Ahmed Wael</h1>
          <Navigation />
         </div>
        
          
          {/* Main content */}
          <main>
            <div className="px-6 lg:px-20">
              {/* Header */}
              <div style={{
                borderTop: "1px solid #000",
                borderBottom: "1px solid #000",
                alignContent: "center",
                textAlign: "center",
                padding: "2rem 0",
              }}>
                <h1 style={{fontSize: "clamp(4rem, 10vw, 200px)", fontWeight: "bold"}}>THE BLOG</h1>
              </div>
              
              {/* Page content */}
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
