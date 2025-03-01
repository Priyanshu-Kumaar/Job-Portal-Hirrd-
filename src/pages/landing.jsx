import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col mr-6  gap-6 sm:gap-10 lg:gap-20 py-6 sm:py-10 lg:py-20 px-4 sm:px-8 lg:px-16">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title font-extrabold text-3xl sm:text-5xl lg:text-7xl tracking-tighter py-4">
          Find Your Dream Job
          <span className="flex items-center gap-2 sm:gap-6">
            and get
            <img
              src="/logo.png"
              className="h-12 sm:h-20 lg:h-28 w-auto"
              alt="Hirrd Logo"
            />
          </span>
        </h1>
        <p className="text-gray-300 mt-2 sm:mt-4 text-sm sm:text-lg lg:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center ">
        <Link to="/jobs">
          <Button variant="blue" size="lg" className="w-40 sm:w-48 lg:w-56">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-jobs">
          <Button
            variant="destructive"
            size="lg"
            className="w-40 sm:w-48 lg:w-56"
          >
            Post a Job
          </Button>
        </Link>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-6 sm:py-10"
      >
        <CarouselContent className="flex gap-4 sm:gap-10 items-center justify-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem
              key={id}
              className="basis-1/2 sm:basis-1/4 lg:basis-1/6"
            >
              <img
                src={path}
                alt={name}
                className="h-8 sm:h-12 lg:h-16 object-contain mx-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <img
        src="/banner.jpeg"
        className="w-full object-cover rounded-lg shadow-md"
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-bold text-lg sm:text-xl">
              For Job Seekers
            </CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-bold text-lg sm:text-xl">
              For Employers
            </CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>
      </section>

      <Accordion type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-base sm:text-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};

export default LandingPage;
