import Nav from '@/components/views/nav';
import Landing from '@/components/views/landing';
import InfiniteSlider from '@/components/views/infinite-slider';
import About from '@/components/views/about';
import Programs from '@/components/views/programs';
import Testimonials from '@/components/views/testimonials';
import Socials from '@/components/views/socials';
import Footer from '@/components/views/footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Landing />
      <InfiniteSlider />
      <About />
      <Programs />
      <Testimonials />
      <Socials />
      <Footer />
    </main>
  );
}
