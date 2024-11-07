import Hero from "./components/hero";
import PersonalInfo from "./components/PersonalInfo";
import RowRiwayat from "./components/rowRiwayat";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import Skills from "./components/Skills";
import "./style.css";
import WarnaFavorit from "./components/warnaFaforit";
import ContactForm from "./components/ContactForm";
import GalleryHobbies from "./components/Gallery";

export default function Gallery() {
  return (
    <section>
      <WarnaFavorit />
      <Hero />
      <Skills />
      <PersonalInfo />
      <RiwayatPekerjaan />
      <GalleryHobbies />
      <ContactForm />
    </section>
  );
}