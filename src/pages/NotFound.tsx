import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { 
  Home, Newspaper, Search, ArrowLeft, Sparkles, 
  Zap, Target, Award, TrendingUp, Users, Globe, Rocket
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <div className="space-x-4">
          <a href="/" className="text-primary underline hover:text-primary/80">
            Return to Home
          </a>
          <a href="/news" className="text-primary underline hover:text-primary/80">
            Visit Job News
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
