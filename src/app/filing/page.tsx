import Navbar from '@/components/filing/navbar';
import AboutPage from '@/components/filing/about';
export default function FilingPage() {
  return (
    <main className="bg-white bg-cover bg-no-repeat">
      <Navbar />
      {/* <section className='-mt-[580px] px-4 py-4 flex justify-center items-center mb-5'>
        <VidYoutube />
      </section> */}
      <AboutPage/>

    </main>
  );
}

