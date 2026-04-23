import { IndustriesWeServe } from "../../src/Landing/IndustriesWeServe";
import { Navbar } from "../../src/Shared/navbar";
import Footer from "../../src/Shared/footer";

export const metadata = {
  title: "Industries | LINQ Corporate Solutions",
  description: "Discover the wide range of industries we serve globally with precision and intelligence.",
};

export default function IndustriesPage() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1 pt-5">
        <IndustriesWeServe />
      </main>
      <Footer />
    </div>
  );
}
