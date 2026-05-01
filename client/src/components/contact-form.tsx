import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { Send, CheckCircle } from "lucide-react";

const contactFormSchema = insertContactInquirySchema.extend({
  name: insertContactInquirySchema.shape.name.min(2, "Name must be at least 2 characters"),
  email: insertContactInquirySchema.shape.email.email("Please enter a valid email address"),
  subject: insertContactInquirySchema.shape.subject.min(5, "Subject must be at least 5 characters"),
  message: insertContactInquirySchema.shape.message.min(10, "Message must be at least 10 characters"),
});

/* Shared input styles for light theme */
const inputCls =
  "bg-white border border-black/[0.14] text-[#1d1d1f] placeholder:text-[#aeaeb2] " +
  "focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-xl h-11 px-4 text-sm transition-all";

const labelCls = "text-[#1d1d1f] font-medium text-sm mb-1.5";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "", email: "", phone: "", company: "",
      subject: "", message: "", serviceInterest: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Failed to submit contact inquiry");
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
    onError: () => {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => submitContactMutation.mutate(data);

  /* ── Success state ── */
  if (isSubmitted) {
    return (
      <div className="glass-card rounded-2xl p-10 max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Thank You!</h3>
        <p className="text-[#6e6e73] mb-6 text-sm leading-relaxed">
          We've received your message and will respond within 24 hours. Our team is excited
          to help you with your <span className="text-primary">CAD/CAM</span> requirements.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border border-black/15 text-[#1d1d1f] hover:bg-black/[0.04] rounded-xl px-6"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-7">
        <h3 className="text-2xl font-bold text-[#1d1d1f] mb-1">Send Us a Message</h3>
        <p className="text-[#6e6e73] text-sm">Fill in the form below and we'll get back to you shortly.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          {/* Name + Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel className={labelCls}>Name <span className="text-primary">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" className={inputCls} {...field} />
                </FormControl>
                <FormMessage className="text-primary text-xs" />
              </FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel className={labelCls}>Email <span className="text-primary">*</span></FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" className={inputCls} {...field} />
                </FormControl>
                <FormMessage className="text-primary text-xs" />
              </FormItem>
            )} />
          </div>

          {/* Phone + Company */}
          <div className="grid md:grid-cols-2 gap-4">
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem>
                <FormLabel className={labelCls}>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="10 Digit Mobile Number"
                    type="tel"
                    maxLength={10}
                    className={inputCls}
                    {...field}
                    value={field.value || ""}
                    onChange={(e) => field.onChange(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  />
                </FormControl>
                <FormMessage className="text-primary text-xs" />
              </FormItem>
            )} />
            <FormField control={form.control} name="company" render={({ field }) => (
              <FormItem>
                <FormLabel className={labelCls}>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Your company name" className={inputCls} {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage className="text-primary text-xs" />
              </FormItem>
            )} />
          </div>

          {/* Service Interest */}
          <FormField control={form.control} name="serviceInterest" render={({ field }) => (
            <FormItem>
              <FormLabel className={labelCls}>Service Interest</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                <FormControl>
                  <SelectTrigger
                    className="bg-white border border-black/[0.14] text-[#1d1d1f] rounded-xl h-11 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                  >
                    <SelectValue placeholder="Select a service" className="text-[#aeaeb2]" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white border border-black/[0.1] rounded-xl shadow-lg">
                  <SelectItem value="cam-programming">CAM Programming Services</SelectItem>
                  <SelectItem value="cad-services">CAD Services</SelectItem>
                  <SelectItem value="corporate-training">Corporate Training</SelectItem>
                  <SelectItem value="mastercam-training">Mastercam Training</SelectItem>
                  <SelectItem value="carveco-training">Carveco Training</SelectItem>
                  <SelectItem value="software-reseller">Software Purchase</SelectItem>
                  <SelectItem value="consultation">General Consultation</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-primary text-xs" />
            </FormItem>
          )} />

          {/* Subject */}
          <FormField control={form.control} name="subject" render={({ field }) => (
            <FormItem>
              <FormLabel className={labelCls}>Subject <span className="text-primary">*</span></FormLabel>
              <FormControl>
                <Input placeholder="Brief subject of your inquiry" className={inputCls} {...field} />
              </FormControl>
              <FormMessage className="text-primary text-xs" />
            </FormItem>
          )} />

          {/* Message */}
          <FormField control={form.control} name="message" render={({ field }) => (
            <FormItem>
              <FormLabel className={labelCls}>Message <span className="text-primary">*</span></FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  className="bg-white border border-black/[0.14] text-[#1d1d1f] placeholder:text-[#aeaeb2] focus:border-primary focus:ring-1 focus:ring-primary/20 rounded-xl px-4 py-3 text-sm min-h-[120px] transition-all resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-primary text-xs" />
            </FormItem>
          )} />

          {/* Submit */}
          <Button
            type="submit"
            disabled={submitContactMutation.isPending}
            className="w-full btn-premium text-white border-0 font-semibold py-3 rounded-xl text-base mt-2"
          >
            {submitContactMutation.isPending ? (
              <><div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />Sending...</>
            ) : (
              <><Send className="w-5 h-5 mr-2" />Send Message</>
            )}
          </Button>

        </form>
      </Form>
    </div>
  );
}
