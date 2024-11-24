import { motion } from "framer-motion";
import { ArrowRight, Code2, Command, LineChart, Mail, MessageSquare, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const features = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Smart Inbox",
    description: "AI-powered email organization that adapts to your workflow."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Impact",
    description: "Get immediate insights and take action faster than ever."
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Developer Friendly",
    description: "Built for developers, by developers. Full API access included."
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Analytics",
    description: "Deep insights into your email patterns and productivity."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Smart Replies",
    description: "Context-aware response suggestions that sound like you."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Customizable",
    description: "Tailor the experience to match your unique workflow."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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
            AI-powered email management
          </span>
        </motion.div>
        
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left"
          >
            <span className="text-gray-400">All your business email</span>
            <br />
            <span className="text-white font-medium">Under one roof</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl text-left"
          >
            Accept payments, manage tasks, communicate with your clients, and offer them the best service possible with your very own client portal.{" "}
            <span className="text-white">Set up in less than 5 minutes.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button size="lg" className="button-gradient rounded-lg">
              Set up your service
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
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="EmailAI Dashboard"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Grid */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-6 glass glass-hover h-full">
                <div className="mb-4 p-2 w-12 h-12 rounded-lg glass flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
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
            Ready to transform your inbox?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have already upgraded their email experience.
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
