
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to the portfolio page
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Redirecting to Portfolio...</h1>
        <p className="text-xl text-muted-foreground">Loading Mubdiu Mohammad Lam's portfolio</p>
      </div>
    </div>
  );
};

export default Index;
