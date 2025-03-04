import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { endpoints } from "@/lib/config";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(endpoints.contact, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: formData.subject || "General Inquiry",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll be in touch soon!",
      });

      // Reset form
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 animate-slide-right">
      <h3 className="text-xl font-semibold mb-4 md:mb-6">Send a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              placeholder="Full Name"
              disabled={isSubmitting}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="you@example.com"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="(123) 456-7890"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Event Type
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              disabled={isSubmitting}
            >
              <option value="">Select Event Type</option>
              <option value="Wedding DJ Booking">Wedding</option>
              <option value="Corporate Event Booking">Corporate Event</option>
              <option value="Nightclub Booking">Nightclub</option>
              <option value="Festival Booking">Festival</option>
              <option value="Private Party Booking">Private Party</option>
              <option value="Other Inquiry">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
              placeholder="Tell me about your event..."
              disabled={isSubmitting}
            />
          </div>
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          <Send size={18} className="mr-2" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
