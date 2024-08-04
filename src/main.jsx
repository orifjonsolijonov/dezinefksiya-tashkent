import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import "./index.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SectionHeadline from "./components/sectionHeadline";
import Advantages from "./components/advantages";
import CtaSection from "./components/ctaSection";
import ServicesSection from "./components/servicesSection";
import ServiceTypeSection from "./components/serviceTypeSection";
import CorporationCtaSection from "./components/corporationCtaSection";
import Faqs from "./components/faqs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <SectionHeadline title={"Nega bizni tanlashingiz kerak?"} />
    <Advantages />
    <CtaSection />
    <SectionHeadline
      title={"Keng qamrovli dezinfeksiya xizmatlari"}
      description={
        "Har bir xizmatimiz yuqori sifat va tezkorlik bilan amalga oshiriladi. Bizning tajribali mutaxassislarimiz sizga qulay va samarali natijalarni kafolatlaydi. Hoziroq biz bilan bog'laning"
      }
    />
    <ServicesSection />
    <SectionHeadline
      title={"Xizmat turlari"}
      description={
        "Agar ushbu holatlardan biri uyingiz yoki ish joyingizda kuzatilayotgan bo'lsa darhol biz bilan bog'laning"
      }
    />
    <ServiceTypeSection/>
    <CorporationCtaSection/>
    <SectionHeadline
      title={"Ko'p berildigan savollar"}
      description={
        "Murojaatchilar tomonidan eng ko'p berildigan savollarga javoblar oling"
      }
    />
    <Faqs/>
  </React.StrictMode>
);
