import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel,CarouselContent, CarouselItem } from "@/components/ui/carousel";
import companies from "../data/companies.json";
import faqs from "../data/faqs.json";
import { Accordion,AccordionContent,AccordionTrigger ,AccordionItem} from "@/components/ui/accordion";
import Autoplay from "embla-carousel-autoplay";
import { Card,CardHeader,CardContent,CardTitle } from "@/components/ui/card";
const LandingPage = () => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
     
      <div className="grid-background"></div>

    
      <section className="text-center z-10">
        
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-0 translate-y-[-10%]">

          Find Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            Via
          </span>
          hirehub.
        </h1>
        <p className="text-gray-400 font-extrabold sm:mt-4 text-xs sm:text-xl">
          Explore job listings or find perfect candidate for your job

        </p>
      </section>
      <div className="flex gap-6 justify-centre py-10">
        <Link to="/jobS">
        <Button variant="blue" size="xl" className="rounded-full">Find Jobs</Button>
        </Link>
        <Link to="/post-job">
        <Button size="xl" variant="red"className="rounded-full">Post a Job</Button>
        </Link>
      </div>
      <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({name,id,path})=>{
            return(
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
              <img src={path} alt={name} className="h-9 sm:h-14 object-contain"/>
            </CarouselItem>

            );
          })}
        
        </CarouselContent>
      </Carousel>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>For Job seekers</CardTitle>
  
        </CardHeader>
        <CardContent>
          Search and apply for jobs, track applications and more.
        </CardContent>
  
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>For Employers</CardTitle>
  
        </CardHeader>
        <CardContent>
        Post jobs, manage applications, and find the best candidates.
        </CardContent>
  
      </Card>
      </section>
      <Accordion  type="multiple" className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>


    </main>
  );
};

export default LandingPage;