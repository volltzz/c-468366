import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingTier = ({
  name,
  price,
  description,
  features,
  isPopular,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`glass rounded-2xl p-8 flex flex-col ${
      isPopular ? "border-primary" : "border-white/10"
    } border hover:scale-105 transition-transform duration-300 relative ${
      isPopular ? "shadow-lg shadow-primary/20" : ""
    }`}
  >
    {isPopular && (
      <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1 w-fit mb-4">
        Most Popular
      </span>
    )}
    <h3 className="text-xl font-medium mb-2">{name}</h3>
    <div className="mb-4">
      <span className="text-4xl font-bold">{price}</span>
      {price !== "Custom" && <span className="text-gray-400">/month</span>}
    </div>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <Check className="w-5 h-5 text-primary" />
          <span className="text-sm text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
    <Button 
      className={`${isPopular ? "button-gradient" : ""} w-full transition-all duration-300 ${
        isPopular ? "hover:opacity-90" : "hover:bg-white/5"
      }`} 
      variant={isPopular ? "default" : "outline"}
    >
      Get Started
    </Button>
  </motion.div>
);

export const PricingSection = () => {
  return (
    <section className="container px-4 py-24">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-normal mb-6"
        >
          Simple,{" "}
          <span className="text-gradient font-medium">transparent</span> pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400"
        >
          Choose the perfect plan for your business needs. All plans include a 14-day free trial.
        </motion.p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Starter"
          price="$29"
          description="Perfect for small businesses and freelancers"
          features={[
            "Up to 1,000 emails/month",
            "Basic email analytics",
            "2 team members",
            "24/7 email support"
          ]}
        />
        <PricingTier
          name="Professional"
          price="$99"
          description="Ideal for growing businesses"
          features={[
            "Up to 10,000 emails/month",
            "Advanced analytics",
            "10 team members",
            "Priority support",
            "Custom integrations"
          ]}
          isPopular
        />
        <PricingTier
          name="Enterprise"
          price="Custom"
          description="For large organizations with custom needs"
          features={[
            "Unlimited emails",
            "Custom analytics",
            "Unlimited team members",
            "24/7 phone support",
            "Dedicated account manager",
            "Custom development"
          ]}
        />
      </div>
    </section>
  );
};