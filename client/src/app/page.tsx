import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { 
  Home, 
  Users, 
  TrendingUp, 
  Receipt, 
  PieChart, 
  Brain,
  ArrowRight,
  Shield,
  Zap,
  Heart
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              HomeBase
            </span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            🎉 Track, Budget, and Save Together
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Family Finances,
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-cyan-500 bg-clip-text text-transparent">
              Simplified
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop wondering where the money goes. HomeBase helps families build better financial habits together with AI-powered insights.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/register">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required · Free forever for basic features
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything Your Family Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for families who want to take control of their finances
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Multi-User Households</CardTitle>
              <CardDescription>
                Create a household and invite family members. Everyone can log expenses and track budgets together.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Receipt className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Smart Expense Tracking</CardTitle>
              <CardDescription>
                Quick expense logging with categories, receipt photos, and automatic categorization.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <PieChart className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Budget Management</CardTitle>
              <CardDescription>
                Set monthly budgets per category with real-time alerts when approaching limits.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Brain className="h-10 w-10 text-primary mb-2" />
              <CardTitle>AI-Powered Insights</CardTitle>
              <CardDescription>
                Get personalized recommendations, spending pattern analysis, and predictive analytics.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Visual Reports</CardTitle>
              <CardDescription>
                Interactive charts and custom reports to visualize spending by category, time, and member.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Recurring Expenses</CardTitle>
              <CardDescription>
                Automate regular payments like rent, subscriptions, and never miss a bill deadline.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Secure & Private</h3>
            <p className="text-muted-foreground">
              Bank-level encryption. Your financial data is always safe and private.
            </p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Log expenses in seconds. Real-time sync across all family members.
            </p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Made for Families</h3>
            <p className="text-muted-foreground">
              Designed with families in mind. Even includes kid-friendly mode for financial literacy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0">
          <CardContent className="py-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Take Control?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of families building better financial habits together.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/register">
                Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 mt-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">HomeBase</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Built with ❤️ for families managing finances together.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">About</Link></li>
                <li><Link href="#" className="hover:text-foreground">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground">Terms</Link></li>
                <li><Link href="#" className="hover:text-foreground">License</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 HomeBase. Built by Shashank Pandey. MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

