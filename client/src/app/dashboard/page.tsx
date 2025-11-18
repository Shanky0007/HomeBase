"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  Target, 
  PiggyBank,
  Receipt,
  Users,
  Calendar,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  ShoppingCart,
  Home,
  Utensils,
  Car,
  Heart,
  Zap,
  MoreHorizontal
} from "lucide-react";

// Mock data - will be replaced with real API calls
const mockData = {
  totalExpenses: 3847.50,
  monthlyBudget: 5000,
  budgetUsed: 76.95,
  savings: 1152.50,
  expenseChange: -8.2,
  householdMembers: 4,
  recentExpenses: [
    { id: 1, description: "Grocery Shopping", amount: 156.43, category: "Groceries", date: "2025-11-18", user: "John" },
    { id: 2, description: "Electric Bill", amount: 89.50, category: "Utilities", date: "2025-11-17", user: "Sarah" },
    { id: 3, description: "Gas Station", amount: 52.30, category: "Transportation", date: "2025-11-16", user: "John" },
    { id: 4, description: "Restaurant Dinner", amount: 87.20, category: "Dining", date: "2025-11-15", user: "Family" },
    { id: 5, description: "Online Shopping", amount: 234.67, category: "Shopping", date: "2025-11-14", user: "Sarah" },
  ],
  categoryBreakdown: [
    { name: "Groceries", amount: 892.30, budget: 1200, color: "bg-green-500" },
    { name: "Utilities", amount: 456.80, budget: 600, color: "bg-blue-500" },
    { name: "Transportation", amount: 325.40, budget: 500, color: "bg-yellow-500" },
    { name: "Dining", amount: 487.50, budget: 700, color: "bg-red-500" },
    { name: "Entertainment", amount: 234.20, budget: 400, color: "bg-purple-500" },
    { name: "Healthcare", amount: 156.30, budget: 300, color: "bg-pink-500" },
  ],
  monthlyTrend: [
    { month: "Jun", amount: 4234 },
    { month: "Jul", amount: 3856 },
    { month: "Aug", amount: 4521 },
    { month: "Sep", amount: 3945 },
    { month: "Oct", amount: 4156 },
    { month: "Nov", amount: 3848 },
  ]
};

const categoryIcons: Record<string, any> = {
  Groceries: ShoppingCart,
  Utilities: Zap,
  Transportation: Car,
  Dining: Utensils,
  Entertainment: Heart,
  Healthcare: Heart,
};

export default function DashboardPage() {
  const router = useRouter();
  const { user, token, loadUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initDashboard = async () => {
      if (!token) {
        router.push("/login");
        return;
      }

      if (!user) {
        await loadUser();
      }

      setIsLoading(false);
    };

    initDashboard();
  }, [token, user, loadUser, router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const budgetPercentage = (mockData.totalExpenses / mockData.monthlyBudget) * 100;
  const remainingBudget = mockData.monthlyBudget - mockData.totalExpenses;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Home className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold">HomeBase</h1>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-sm">
                <Users className="h-3 w-3 mr-1" />
                {mockData.householdMembers} Members
              </Badge>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Add Expense
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Welcome back, {user?.name?.split(' ')[0] || 'User'}! 👋
          </h2>
          <p className="text-muted-foreground">
            Here's an overview of your household expenses for November 2025
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Total Expenses Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${mockData.totalExpenses.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                {mockData.expenseChange < 0 ? (
                  <>
                    <ArrowDownRight className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-green-500">{Math.abs(mockData.expenseChange)}% less than last month</span>
                  </>
                ) : (
                  <>
                    <ArrowUpRight className="h-3 w-3 text-red-500 mr-1" />
                    <span className="text-red-500">{mockData.expenseChange}% more than last month</span>
                  </>
                )}
              </p>
            </CardContent>
          </Card>

          {/* Budget Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Budget Progress</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{budgetPercentage.toFixed(1)}%</div>
              <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all ${
                    budgetPercentage > 90 ? 'bg-red-500' : 
                    budgetPercentage > 75 ? 'bg-yellow-500' : 
                    'bg-green-500'
                  }`}
                  style={{ width: `${Math.min(budgetPercentage, 100)}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                ${remainingBudget.toFixed(2)} remaining of ${mockData.monthlyBudget}
              </p>
            </CardContent>
          </Card>

          {/* Savings Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Savings</CardTitle>
              <PiggyBank className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${mockData.savings.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500">On track with goals</span>
              </p>
            </CardContent>
          </Card>

          {/* Transactions Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Transactions</CardTitle>
              <Receipt className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.recentExpenses.length * 8}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {mockData.recentExpenses.length} this week
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {/* Spending Trend Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Spending Trend</CardTitle>
              <CardDescription>Last 6 months overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.monthlyTrend.map((month, idx) => {
                  const maxAmount = Math.max(...mockData.monthlyTrend.map(m => m.amount));
                  const width = (month.amount / maxAmount) * 100;
                  const isCurrentMonth = idx === mockData.monthlyTrend.length - 1;
                  
                  return (
                    <div key={month.month} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className={`font-medium ${isCurrentMonth ? 'text-primary' : 'text-muted-foreground'}`}>
                          {month.month}
                        </span>
                        <span className="font-semibold">${month.amount.toLocaleString()}</span>
                      </div>
                      <div className="h-3 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all ${isCurrentMonth ? 'bg-primary' : 'bg-primary/60'}`}
                          style={{ width: `${width}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Category Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Top Categories</CardTitle>
              <CardDescription>Budget usage this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.categoryBreakdown.map((category) => {
                  const Icon = categoryIcons[category.name] || DollarSign;
                  const percentage = (category.amount / category.budget) * 100;
                  
                  return (
                    <div key={category.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 rounded-lg ${category.color} bg-opacity-20`}>
                            <Icon className={`h-4 w-4 ${category.color.replace('bg-', 'text-')}`} />
                          </div>
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                        <span className="text-sm font-semibold">${category.amount}</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full ${category.color} transition-all`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {percentage.toFixed(0)}% of ${category.budget} budget
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest expenses</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.recentExpenses.map((expense) => {
                const Icon = categoryIcons[expense.category] || Receipt;
                const categoryColor = mockData.categoryBreakdown.find(c => c.name === expense.category)?.color || 'bg-gray-500';
                
                return (
                  <div key={expense.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${categoryColor} bg-opacity-20`}>
                        <Icon className={`h-5 w-5 ${categoryColor.replace('bg-', 'text-')}`} />
                      </div>
                      <div>
                        <p className="font-medium">{expense.description}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{expense.date}</span>
                          <span>•</span>
                          <span>{expense.user}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">${expense.amount.toFixed(2)}</p>
                      <Badge variant="outline" className="text-xs">
                        {expense.category}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
