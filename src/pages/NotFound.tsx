import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="flex min-h-screen items-center justify-center px-6">
        <Card className="glass-panel border border-white/60 text-center">
          <CardContent className="px-12 py-16 space-y-4">
            <h1 className="text-5xl font-semibold text-ink">404</h1>
            <p className="text-lg text-ink-muted">Oops! Page not found</p>
            <Button asChild>
              <a href="/" className="flex items-center gap-2">
                Return to Home
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
