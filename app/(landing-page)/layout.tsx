import Footer from "../_components/footer";
import Navbar from "../_components/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col ">
      <Navbar />
      <main className="flex-1 ">{children}</main>
      <Footer />
    </div>
  );
}
