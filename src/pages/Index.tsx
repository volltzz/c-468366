import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  {
    title: "Fully white-labelled",
    description: "From logo, colors to domain name, customize everything to fit your brand. Run your business your way, on your terms.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    title: "Work with tasks, files and comments",
    description: "Communication starts with a well defined task. Orchestra allows you to write a meaningful description and add comments and share files right from the task itself.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Subscription management",
    description: "Easily offer a way to your clients to control their subscription. From pausing, cancelling to resuming, Orchestra handles it all by default.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 pt-40 pb-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            AI-powered client portal
          </span>
        </motion.div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-normal mb-6 tracking-tight"
          >
            Your own first-class
            <br />
            client portal experience
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Orchestra comes out-of-the-box with a customizable client portal with your domain name and branding. A place you can call your own.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Button size="lg" className="button-gradient rounded-lg">
              Get started free
            </Button>
            <Button size="lg" variant="link" className="text-white">
              See our guides <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative mx-auto max-w-5xl mt-20"
        >
          <div className="glass rounded-xl overflow-hidden">
            <img
              src="/lovable-uploads/0d0a5385-68cb-437d-9407-8a0d2cec2569.png"
              alt="Orchestra Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="container px-4 py-20">
        <Tabs defaultValue={features[0].title} className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-20">
            <div className="space-y-6">
              <TabsList className="flex flex-col space-y-6 bg-transparent w-full">
                {features.map((feature, index) => (
                  <TabsTrigger
                    key={index}
                    value={feature.title}
                    className="w-full text-left px-8 py-8 glass glass-hover data-[state=active]:bg-white/10 rounded-2xl transition-all duration-300"
                  >
                    <div className="border-l-2 border-transparent data-[state=active]:border-primary pl-6">
                      <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
                      <p className="text-gray-400 text-base leading-relaxed pr-8">{feature.description}</p>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <div className="relative h-[600px] lg:h-[700px] rounded-3xl overflow-hidden">
              {features.map((feature, index) => (
                <TabsContent
                  key={index}
                  value={feature.title}
                  className="absolute inset-0 w-full h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-3xl glass"
                    />
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your client experience?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already upgraded their client portal experience.
          </p>
          <Button size="lg" className="button-gradient">
            Get Started Free
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;