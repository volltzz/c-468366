import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Michael Brown",
    role: "IT Director at HealthCare",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "The real-time threat detection and automated response features have significantly reduced our risk exposure. We now feel more confident than ever about our data security posture."
  },
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "Implementing this solution has transformed our email management workflow. The AI-powered features have saved us countless hours and improved accuracy significantly."
  },
  {
    name: "David Wilson",
    role: "Founder at Innovate",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "The customer support is exceptional, and the platform's intuitive design made adoption across our team seamless. It's been a game-changer for our operations."
  },
  {
    name: "Emily Chen",
    role: "Operations Manager",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "We've seen a dramatic improvement in our response times and customer satisfaction since implementing this solution. The automation features are particularly impressive."
  },
  {
    name: "James Rodriguez",
    role: "Head of IT Security",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "The security features are robust and the regular updates keep us ahead of emerging threats. It's exactly what we needed for our growing organization."
  },
  {
    name: "Lisa Thompson",
    role: "Digital Director",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "The platform's ability to handle complex workflows while maintaining simplicity in its interface is remarkable. It's been a valuable asset to our digital transformation."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Clients Feedback</h2>
          <p className="text-muted-foreground">
            See what our clients have to say about their experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass glass-hover p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;