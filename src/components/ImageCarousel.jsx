import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 overflow-hidden rounded-lg">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={1500}
        transitionTime={500}
        swipeable
        emulateTouch
      >
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1598432439250-0330f9130e14?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHRheHxlbnwwfHx8fDE3NDc5MDgxNTl8MA&ixlib=rb-4.1.0&w=1500"
            alt="Slide 1"
            className="w-full h-[400px] object-cover"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="legend"
          >
            Smart Accounting Solutions
          </motion.p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHRheHxlbnwwfHx8fDE3NDc5MDgxNTl8MA&ixlib=rb-4.1.0&w=1500"
            alt="Slide 2"
            className="w-full h-[400px] object-cover"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="legend"
          >
            GST Filing Simplified
          </motion.p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHx0YXh8ZW58MHx8fHwxNzQ3OTA4MTU5fDA&ixlib=rb-4.1.0&w=1500"
            alt="Slide 3"
            className="w-full h-[400px] object-cover"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="legend"
          >
            Seamless MCA Compliance
          </motion.p>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1586486855514-8c633cc6fd38?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHx0YXh8ZW58MHx8fHwxNzQ3OTA4MTU5fDA&ixlib=rb-4.1.0&w=1500"
            alt="Slide 4"
            className="w-full h-[400px] object-cover"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="legend"
          >
            Seamless MCA Compliance
          </motion.p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
