import React, { useState, useEffect } from 'react';
import wim_5 from '../assets/pictures/wim-5.jpg';
import wim_6 from '../assets/pictures/wim-6.jpg';

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      name: 'Nancy',
      role: 'Finance Manager',
      text: "I longed for someone to walk with me in my journey of self-discovery. When I joined the WIM fellowship, I prayed to connect with like-minded women, and I did. Through the WIM WhatsApp platform, I met Nelly, a practicing psychologist offering pro bono coaching. Her guidance has been invaluable, helping me understand myself and unlock my potential. Thanks to her, I navigate life with self-awareness and confidence, impacting both my personal and professional life. I'm grateful for WIM for providing such a wonderful platform that brought Nelly into my life just when I needed her most.",
      avatar: wim_5,
    },
    {
      name: 'Benta',
      role: 'Entreprenuer',
      text: "I had been contracted to clean the washrooms ahead of the meeting that day. When I heard it was a women's meeting I decided to join and listen.  I not only got a fellowship but also support to get health certificate giving life to my catering business. WiM gave me hope as a Widow.",
      avatar: wim_6,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Change the interval duration (in milliseconds) as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [activeIndex]);

  return (
    <div className="container my-8 mx-auto md:px-6">
      <section className="mb-8 text-center">
        <h1 className="flex justify-center">Testimonials</h1>
        <br />
        <div className="relative">
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out ${
                  index === activeIndex ? 'block' : 'hidden'
                }`}
              >
                <img
                  className="mx-auto mb-6 rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                  src={testimonial.avatar}
                  alt="avatar"
                />
                <div className="flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      "<em>{testimonial.text}</em>" {'  \t    '}
                      <strong>{testimonial.name}</strong> -{' '}
                      <strong>{testimonial.role}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none"
            type="button"
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none"
            type="button"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsCarousel;
