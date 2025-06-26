import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Send, CheckCircle } from "lucide-react";

const contactFormSchema = insertContactInquirySchema.extend({
  name: insertContactInquirySchema.shape.name.min(2, "Name must be at least 2 characters"),
  email: insertContactInquirySchema.shape.email.email("Please enter a valid email address"),
  subject: insertContactInquirySchema.shape.subject.min(5, "Subject must be at least 5 characters"),
  message: insertContactInquirySchema.shape.message.min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      serviceInterest: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to submit contact inquiry");
      }
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contact-inquiries"] });
    },
    onError: (error) => {
      console.error("Contact form error:", error);
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    submitContactMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Thank You for Your Inquiry!
          </h3>
          <p className="text-gray-300 mb-6">
            We've received your message and will respond within 24 hours. 
            Our team is excited to help you with your CAD CAM requirements.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-secondary"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white text-center">
          Send Us a Message
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+91 9825060415"
                        className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Company</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your company name"
                        className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="serviceInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Service Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                    <FormControl>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cam-programming">CAM Programming Services</SelectItem>
                      <SelectItem value="cad-services">CAD Services</SelectItem>
                      <SelectItem value="corporate-training">Corporate Training</SelectItem>
                      <SelectItem value="mastercam-training">Mastercam Training</SelectItem>
                      <SelectItem value="carveco-training">Carveco Training</SelectItem>
                      <SelectItem value="software-reseller">Software Purchase</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Subject *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brief subject of your inquiry"
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-300" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={submitContactMutation.isPending}
              className="w-full bg-primary text-white hover:bg-red-700 transition-colors duration-200 font-semibold py-3"
            >
              {submitContactMutation.isPending ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}