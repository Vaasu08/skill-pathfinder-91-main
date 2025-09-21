import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JobNews from "./pages/JobNews";
import LinkedInAnalyzer from "./pages/LinkedInAnalyzer";
import Insights from "./pages/Insights";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { AuthProvider } from "@/components/AuthProvider";
import AuthGuard from "@/components/AuthGuard";
import Profile from "@/pages/Profile";
import ResumeBuilder from "@/pages/ResumeBuilder";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/news" element={<JobNews />} />
              <Route path="/linkedin" element={<LinkedInAnalyzer />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route
                path="/profile"
                element={
                  <AuthGuard>
                    <Profile />
                  </AuthGuard>
                }
              />
              <Route
                path="/resume"
                element={
                  <AuthGuard>
                    <ResumeBuilder />
                  </AuthGuard>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
