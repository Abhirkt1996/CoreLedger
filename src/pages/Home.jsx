import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BlogPreview from '../components/BlogPreview';
import ImageCarousel from '../components/ImageCarousel'; 
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import ServiceFeatures from '../components/ServiceFeatures'; 

const Home = () => {
  return (
    <main className="mt-16">
      <HeroSection />
      <ImageCarousel />
      <FeatureSection /> 
      <TestimonialSection />
       <ServiceFeatures /> 
      <ServicesSection />
      <BlogPreview />
    </main>
  );
};

export default Home;