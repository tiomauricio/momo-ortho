import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TreatmentsGrid from "@/components/TreatmentsGrid";
import CostsSection from "@/components/CostsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MeetTheDoctor from "@/components/MeetTheDoctor";
import OrthoVsDentist from "@/components/OrthoVsDentist";
import BeforeAfter from "@/components/BeforeAfter";
import BookConsultation from "@/components/BookConsultation";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TreatmentsGrid />
      <CostsSection />
      <WhyChooseUs />
      <MeetTheDoctor />
      <OrthoVsDentist />
      <BeforeAfter />
      <BookConsultation />
      <VisitUs />
      <Footer />
    </>
  );
}
