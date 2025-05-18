
import { motion } from "framer-motion";
import { ArrowLeft, Check, ChevronRight, Code, Copy, FileCode } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// API Endpoint Types
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface ApiEndpoint {
  id: string;
  method: HttpMethod;
  path: string;
  title: string;
  description: string;
  requestBody?: string;
  responseBody: string;
  parameters?: { name: string; type: string; description: string; required: boolean }[];
}

// Sample API Endpoints
const apiEndpoints: ApiEndpoint[] = [
  {
    id: "get-markets",
    method: "GET",
    path: "/api/v1/markets",
    title: "List Markets",
    description: "Returns a list of available cryptocurrency markets.",
    responseBody: `{
  "status": "success",
  "data": [
    {
      "id": "BTC-USD",
      "base_currency": "BTC",
      "quote_currency": "USD",
      "price": "39485.20",
      "volume_24h": "1254.63",
      "price_change_24h": "-2.35"
    },
    {
      "id": "ETH-USD",
      "base_currency": "ETH",
      "quote_currency": "USD",
      "price": "2485.10",
      "volume_24h": "8754.92",
      "price_change_24h": "3.21"
    }
  ]
}`,
  },
  {
    id: "get-market",
    method: "GET",
    path: "/api/v1/markets/:id",
    title: "Get Market Details",
    description: "Returns detailed information for a specific market.",
    parameters: [
      { name: "id", type: "string", description: "Market identifier (e.g., BTC-USD)", required: true }
    ],
    responseBody: `{
  "status": "success",
  "data": {
    "id": "BTC-USD",
    "base_currency": "BTC",
    "quote_currency": "USD",
    "price": "39485.20",
    "volume_24h": "1254.63",
    "price_change_24h": "-2.35",
    "high_24h": "40128.45",
    "low_24h": "38954.12",
    "bid": "39480.00",
    "ask": "39490.40"
  }
}`,
  },
  {
    id: "post-order",
    method: "POST",
    path: "/api/v1/orders",
    title: "Create Order",
    description: "Places a new order for a specific market.",
    requestBody: `{
  "market_id": "BTC-USD",
  "side": "buy",
  "type": "limit",
  "price": "39000.00",
  "size": "0.05"
}`,
    responseBody: `{
  "status": "success",
  "data": {
    "id": "89d1f52e-53f5-4c6a-9c50-3c4d8659a5b8",
    "market_id": "BTC-USD",
    "side": "buy",
    "type": "limit",
    "price": "39000.00",
    "size": "0.05",
    "status": "pending",
    "created_at": "2023-06-15T10:30:45Z"
  }
}`,
  },
  {
    id: "get-orders",
    method: "GET",
    path: "/api/v1/orders",
    title: "List Orders",
    description: "Returns a list of orders for the authenticated user.",
    parameters: [
      { name: "status", type: "string", description: "Filter by order status (open, filled, cancelled)", required: false },
      { name: "market_id", type: "string", description: "Filter by market identifier", required: false }
    ],
    responseBody: `{
  "status": "success",
  "data": [
    {
      "id": "89d1f52e-53f5-4c6a-9c50-3c4d8659a5b8",
      "market_id": "BTC-USD",
      "side": "buy",
      "type": "limit",
      "price": "39000.00",
      "size": "0.05",
      "status": "open",
      "created_at": "2023-06-15T10:30:45Z"
    }
  ],
  "pagination": {
    "page": 1,
    "total": 5,
    "per_page": 25,
    "total_pages": 1
  }
}`,
  },
  {
    id: "delete-order",
    method: "DELETE",
    path: "/api/v1/orders/:id",
    title: "Cancel Order",
    description: "Cancels an existing order.",
    parameters: [
      { name: "id", type: "string", description: "Order identifier", required: true }
    ],
    responseBody: `{
  "status": "success",
  "data": {
    "id": "89d1f52e-53f5-4c6a-9c50-3c4d8659a5b8",
    "market_id": "BTC-USD",
    "status": "cancelled",
    "cancelled_at": "2023-06-15T10:35:22Z"
  }
}`,
  }
];

const ApiDocumentation = () => {
  const [copyStatus, setCopyStatus] = useState<Record<string, boolean>>({});
  
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus({ ...copyStatus, [id]: true });
    setTimeout(() => {
      setCopyStatus({ ...copyStatus, [id]: false });
    }, 2000);
  };
  
  const getMethodColor = (method: HttpMethod) => {
    switch (method) {
      case 'GET':
        return 'bg-green-500';
      case 'POST':
        return 'bg-blue-500';
      case 'PUT':
        return 'bg-amber-500';
      case 'DELETE':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-12"
      >
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </Link>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Code className="w-4 h-4 inline-block mr-2" />
            RESTful API Reference
          </span>
        </motion.div>
        
        <div className="max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
            <span className="text-gray-200">
              <TextGenerateEffect words="CryptoTrade" />
            </span>
            <br />
            <span className="text-white font-medium">
              <TextGenerateEffect words="API Documentation" />
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl text-left"
          >
            Integrate with our powerful trading API to programmatically access markets, 
            place and manage orders, and access real-time market data.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Documentation Content */}
      <section className="container px-4 py-12 relative bg-black">
        <div className="glass rounded-xl p-8 md:p-12">
          {/* API Overview */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-medium mb-4">Getting Started</h2>
            <p className="text-muted-foreground mb-6">
              Our API uses REST architecture with predictable resource-oriented URLs and 
              standard HTTP response codes. All requests and responses are in JSON format.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="glass p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FileCode className="w-5 h-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Base URL</h3>
                </div>
                <div className="bg-secondary rounded-md p-3 flex justify-between items-center">
                  <code className="text-sm text-white">https://api.cryptotrade.com</code>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => copyToClipboard("https://api.cryptotrade.com", "base-url")}
                  >
                    {copyStatus["base-url"] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              
              <div className="glass p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Code className="w-5 h-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Authentication</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Authenticate using API key and secret through HTTP headers:
                </p>
                <div className="bg-secondary rounded-md p-3 mt-2">
                  <code className="text-sm text-white">X-API-Key: your_api_key</code>
                </div>
              </div>
            </div>
          </div>
          
          {/* API Endpoints */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">API Reference</h2>
            
            <div className="space-y-6">
              <Tabs defaultValue="endpoints" className="w-full">
                <TabsList className="glass mb-6">
                  <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                  <TabsTrigger value="errors">Error Codes</TabsTrigger>
                  <TabsTrigger value="rate-limits">Rate Limits</TabsTrigger>
                </TabsList>
                
                <TabsContent value="endpoints" className="mt-0">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {apiEndpoints.map(endpoint => (
                      <AccordionItem 
                        key={endpoint.id} 
                        value={endpoint.id}
                        className="glass rounded-lg overflow-hidden border-none"
                      >
                        <AccordionTrigger className="px-6 py-4 hover:bg-white/5">
                          <div className="flex items-center space-x-3 text-left">
                            <Badge className={`${getMethodColor(endpoint.method)} px-2 py-0.5 text-xs rounded-md`}>
                              {endpoint.method}
                            </Badge>
                            <span className="text-lg font-medium">{endpoint.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <p className="text-muted-foreground mb-4">{endpoint.description}</p>
                          
                          <div className="bg-secondary rounded-md p-3 mb-6 flex justify-between items-center">
                            <code className="text-sm text-white">
                              {endpoint.method} {endpoint.path}
                            </code>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => copyToClipboard(`${endpoint.method} ${endpoint.path}`, endpoint.id)}
                            >
                              {copyStatus[endpoint.id] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </Button>
                          </div>
                          
                          {endpoint.parameters && (
                            <div className="mb-6">
                              <h4 className="font-medium mb-2 flex items-center">
                                <ChevronRight className="w-4 h-4 mr-1" /> Parameters
                              </h4>
                              <div className="glass rounded-md overflow-hidden">
                                <table className="w-full text-sm">
                                  <thead className="bg-black/30">
                                    <tr>
                                      <th className="px-4 py-2 text-left">Name</th>
                                      <th className="px-4 py-2 text-left">Type</th>
                                      <th className="px-4 py-2 text-left">Required</th>
                                      <th className="px-4 py-2 text-left">Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {endpoint.parameters.map((param, idx) => (
                                      <tr key={idx} className="border-t border-white/10">
                                        <td className="px-4 py-2 font-mono text-primary">{param.name}</td>
                                        <td className="px-4 py-2">{param.type}</td>
                                        <td className="px-4 py-2">
                                          {param.required ? 
                                            <Badge variant="default" className="bg-primary text-xs">Required</Badge> : 
                                            <Badge variant="outline" className="text-xs">Optional</Badge>
                                          }
                                        </td>
                                        <td className="px-4 py-2 text-muted-foreground">{param.description}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}
                          
                          {endpoint.requestBody && (
                            <div className="mb-6">
                              <h4 className="font-medium mb-2 flex items-center">
                                <ChevronRight className="w-4 h-4 mr-1" /> Request Body
                              </h4>
                              <div className="bg-secondary rounded-md p-4 overflow-auto">
                                <pre className="text-sm text-white font-mono whitespace-pre">
                                  {endpoint.requestBody}
                                </pre>
                              </div>
                            </div>
                          )}
                          
                          <div>
                            <h4 className="font-medium mb-2 flex items-center">
                              <ChevronRight className="w-4 h-4 mr-1" /> Response
                            </h4>
                            <div className="bg-secondary rounded-md p-4 overflow-auto">
                              <pre className="text-sm text-white font-mono whitespace-pre">
                                {endpoint.responseBody}
                              </pre>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
                
                <TabsContent value="errors">
                  <div className="glass rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Error Codes</h3>
                    <p className="text-muted-foreground mb-6">
                      Our API uses standard HTTP status codes to indicate the success or failure of API requests.
                    </p>
                    
                    <div className="glass rounded-md overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-black/30">
                          <tr>
                            <th className="px-4 py-2 text-left">Status Code</th>
                            <th className="px-4 py-2 text-left">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-white/10">
                            <td className="px-4 py-3 font-mono">200 OK</td>
                            <td className="px-4 py-3 text-muted-foreground">Request was successful</td>
                          </tr>
                          <tr className="border-t border-white/10">
                            <td className="px-4 py-3 font-mono">400 Bad Request</td>
                            <td className="px-4 py-3 text-muted-foreground">Invalid request parameters</td>
                          </tr>
                          <tr className="border-t border-white/10">
                            <td className="px-4 py-3 font-mono">401 Unauthorized</td>
                            <td className="px-4 py-3 text-muted-foreground">Invalid or missing API key</td>
                          </tr>
                          <tr className="border-t border-white/10">
                            <td className="px-4 py-3 font-mono">403 Forbidden</td>
                            <td className="px-4 py-3 text-muted-foreground">Insufficient permissions for the operation</td>
                          </tr>
                          <tr className="border-t border-white/10">
                            <td className="px-4 py-3 font-mono">404 Not Found</td>
                            <td className="px-4 py-3 text-muted-foreground">Resource not found</td>
                          </tr>
                          <tr className="border-t border-white/10">
                            <td className="px-4 py-3 font-mono">429 Too Many Requests</td>
                            <td className="px-4 py-3 text-muted-foreground">Rate limit exceeded</td>
                          </tr>
                          <tr className="border-t border-white/10">
                            <td className="px-4 py-3 font-mono">500 Internal Server Error</td>
                            <td className="px-4 py-3 text-muted-foreground">Unexpected server error</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="rate-limits">
                  <div className="glass rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Rate Limits</h3>
                    <p className="text-muted-foreground mb-6">
                      To ensure fair usage, our API implements rate limiting based on your account tier.
                    </p>
                    
                    <div className="glass rounded-md overflow-hidden">
                      <table className="w-full text-sm">
                        <thead className="bg-black/30">
                          <tr>
                            <th className="px-4 py-2 text-left">Plan</th>
                            <th className="px-4 py-2 text-left">Requests per minute</th>
                            <th className="px-4 py-2 text-left">Requests per day</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-white/10">
                            <td className="px-4 py-3">Basic</td>
                            <td className="px-4 py-3 font-mono">60</td>
                            <td className="px-4 py-3 font-mono">10,000</td>
                          </tr>
                          <tr className="border-t border-white/10">
                            <td className="px-4 py-3">Pro</td>
                            <td className="px-4 py-3 font-mono">300</td>
                            <td className="px-4 py-3 font-mono">100,000</td>
                          </tr>
                          <tr className="border-t border-white/10">
                            <td className="px-4 py-3">Enterprise</td>
                            <td className="px-4 py-3 font-mono">1,000</td>
                            <td className="px-4 py-3 font-mono">1,000,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Rate Limit Headers</h4>
                      <p className="text-muted-foreground mb-4">
                        Each API response includes headers to help you monitor your rate limit usage:
                      </p>
                      <div className="bg-secondary rounded-md p-4 overflow-auto">
                        <code className="text-sm text-white font-mono block mb-2">X-RateLimit-Limit: 60</code>
                        <code className="text-sm text-white font-mono block mb-2">X-RateLimit-Remaining: 58</code>
                        <code className="text-sm text-white font-mono block">X-RateLimit-Reset: 1623766252</code>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start building?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create a free account to get your API keys and start integrating with our platform.
          </p>
          <Button size="lg" className="button-gradient">
            Get API Access
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ApiDocumentation;
