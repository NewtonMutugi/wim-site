import Carousel from './Carousel';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import wim_2 from '../assets/pictures/wim-2.jpg';
import wim_4 from '../assets/pictures/wim-4.jpg';
import TestimonialsCarousel from './TestimonialsCarousel';

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <div className="container mx-auto p-5 flex flex-col ">
        <h1 className="flex justify-center">Who we are</h1>
        <div className="flex flex-col sm:flex-col md:flex-col   lg:flex-row pt-3">
          <img
            src={wim_2}
            className="shadow rounded-md w-full h3/5 sm:h-3/5 sm:w-full lg:w-2/5 lg:h-auto animate-fade-up animate-once animate-ease-in animate-delay-75"
            alt="WiM logo"
          />
          <div
            className="flex flex-col shadow p-2 sm:pt-3 lg:p-3 justify-center intersect ? 'animate-fade-left animate-ease-out':'opacity-0'"
            id="About"
          >
            <p className="p-2 lg:pl-8">
              We are a community dedicated to empowering Christian women in the
              marketplace through fellowship, leadership development, and
              building economic resilience. <br /> <br />
              <strong>Our Vision</strong> is to see women empowered to bring
              transformation to kingdom financing and to be a blessing to others
              in their communities. <br />
              <br />
              <strong>Our Mission</strong> is to foster Christ-centred women’s
              economic empowerment programs transforming lives and building a
              stronger community. <br />
              <br />
              We do this by providing a safe space where women can gather to
              pray, study the word, share openly and grow personally and
              professionally. We aim to establish leadership programs, create
              linkages to empowerment opportunities, and strengthen capacities.
              <br />
            </p>
          </div>
        </div>
      </div>
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <h1 className="flex justify-center">What we do</h1>
      <div className="container mx-auto p-5 flex flex-col">
        <div className="flex flex-col sm:flex-col lg:flex-row pt-3 ">
          <div className="flex flex-col shadow p-2 sm:pt-3 lg:pt-0">
            {/* <p className="p-2 lg:pr-8">
              We are a community dedicated
              <ul>
                <li>Leadership Development</li>
                <li>Economic Resilience</li>
                <li>Fellowship</li>
                <li>Leadership Development</li>
              </ul>
              <strong>G</strong> - Generating <br />
              <strong>R</strong> - Resources and
              <br />
              <strong>O</strong> - Opportunities for
              <br />
              <strong>W</strong> - Women <br />
              Isiah 37:31 Taking root downward and bearing fruit upward.
            </p> */}
            <p className="p-2 lg:pl-8">
              We are dedicated to supporting women in the marketplace navigate
              through the various challenges faced at the workplace and in
              business. Through networking, mentorship and open sharing women
              are able to learn from one another. The forum also provides a
              platform for knowledge exchange and peer support new ideas and
              opportunities in business and in their careers. <br />
              {/* <br />the capacity of the women in the marketplace anchoring on the word
              of God to build resilience for economic well being. Through
              strategic partners women will get a platform to learn from peers
              in small and common groups through coaching, mentorship, best
              practice sharing/testimonies, e.t.c <br /> */}
              <br />
              <strong>G</strong> - Generating <br />
              <strong>R</strong> - Resources and
              <br />
              <strong>O</strong> - Opportunities for
              <br />
              <strong>W</strong> - Women <br />
              <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                Isaiah 37:31 Taking root downward and bearing fruit upward.
              </blockquote>
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={wim_4}
              className="shadow rounded-md w-full h3/5 sm:h-3/5 sm:w-full  lg:h-auto animate-fade-up animate-once animate-ease-in animate-delay-75"
              alt="WiM image"
            />
          </div>
        </div>
      </div>
      <br />
      <TestimonialsCarousel />
      <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <div className="mx-auto container px-4 ">
        <h1 className="flex justify-center">Join Us</h1>
        <div className="flex flex-col mx-auto pt-5 items-center">
          <p className="p-5 text-center">
            Join us for our monthly meetings every{' '}
            <strong>Second Saturday of the month at 10:00 am</strong>. We meet
            at Enwealth business Center along Ngong road.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.28292816608!2d36.702362625964554!3d-1.3008142551731041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11310d9a91ef%3A0x2fb39f60d587f4aa!2sEnwealth%20Business%20center%2C%20Ngong%20road.!5e0!3m2!1sen!2ske!4v1708031503874!5m2!1sen!2ske"
            width="480"
            height="360"
            className="border:0; rounded-lg"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
