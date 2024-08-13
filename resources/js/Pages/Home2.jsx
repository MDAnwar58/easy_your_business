import FrontendLayout from '@/Layouts/FrontendLayout';
import HeroSection from '@/Components/Frontend/Home/HeroSection';
import Features from '@/Components/Frontend/Home/Features';
import Stats from '@/Components/Frontend/Home/Stats';
import Testimonials from '@/Components/Frontend/Home/Testimonials';
import CallToAction from '@/Components/Frontend/Home/CallToAction';
import Blog from '@/Components/Frontend/Home/Blog';

const Home = () => {
    return (
        <FrontendLayout>
            <main class="space-y-40 mb-40">
                <HeroSection />
                <Features />
                <Stats />
                <Testimonials />
                <CallToAction />
                <Blog />
            </main>
        </FrontendLayout>
    );
}

export default Home;
