
import React from "react";
import { Container } from "./ui/Container";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import SocialLinks from "./contact/SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20">
      <Container>
        <div className="mb-10 md:mb-16 max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Ready to elevate your event with exceptional music? Reach out and let's discuss how I can create a unique experience for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Information */}
          <div className="flex flex-col gap-6 md:gap-8 animate-slide-left">
            <ContactInfo />
            <SocialLinks />
          </div>
        </div>
      </Container>
    </section>
  );
}
