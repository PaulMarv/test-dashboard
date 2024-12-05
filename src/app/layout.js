import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/Header";
import { DesktopNav, MobileNav } from "../components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "A Dashboard App",
  description:
    "Created to showcase how a student peformance date arepresented with values and infographics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-0 `}
      >
        <section className="w-full  min-h-[100vh] ">
          <section className="w-full bg-[#fff] border-b-[1px] border-slate-200 z-[10000] sticky h-[90px] gap-6 top-0 xs:pt-1 pt-2">
            <section className="bg-[#fff] fixed top-0 w-full  h-[85px] flex items-center">
              <Header />
            </section>
          </section>
          <section className="w-full pb-8">
            <DesktopNav />
            <MobileNav />
            <div className="w-full lg:pl-[300px] ">
              <div className="w-full pt-8 min-h-[calc(100vh-122px)] max-w-7xl mx-auto px-5 lg:px-10">
                {children}
              </div>
            </div>
          </section>
        </section>
        {/* {children} */}
      </body>
    </html>
  );
}
