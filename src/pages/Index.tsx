import { motion } from "framer-motion";
import { ArrowRight, Code2, Command, LineChart, Mail, MessageSquare, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";

const features = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Smart Inbox",
    description: "AI-powered email organization that adapts to your workflow.",
    image: "https://images.unsplash.com/photo-1557568192-2fafc8b5bdc9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Impact",
    description: "Get immediate insights and take action faster than ever.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Developer Friendly",
    description: "Built for developers, by developers. Full API access included.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Analytics",
    description: "Deep insights into your email patterns and productivity.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Smart Replies",
    description: "Context-aware response suggestions that sound like you.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Customizable",
    description: "Tailor the experience to match your unique workflow.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop"
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
            <Button size="lg" className="button-gradient">
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

      {/* Features Section with Tabs */}
      <section className="container px-4 py-20">
        <Tabs defaultValue={features[0].title} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left side - Tab triggers */}
            <div className="md:col-span-5">
              <TabsList className="flex flex-col space-y-2 w-full bg-transparent">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.title}
                    value={feature.title}
                    className="w-full flex items-center gap-4 p-4 data-[state=active]:glass"
                  >
                    <div className="p-2 rounded-lg glass flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Right side - Tab content with images */}
            <div className="md:col-span-7">
              {features.map((feature) => (
                <TabsContent
                  key={feature.title}
                  value={feature.title}
                  className="mt-0 h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    <div className="glass rounded-xl overflow-hidden aspect-video">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
