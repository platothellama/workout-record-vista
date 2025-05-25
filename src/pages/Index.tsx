
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Activity, Calendar, Target, TrendingUp, Award, Dumbbell, Timer, Flame } from "lucide-react";
import WorkoutHistory from "@/components/WorkoutHistory";
import PersonalRecords from "@/components/PersonalRecords";
import ProgressCharts from "@/components/ProgressCharts";
import StatsOverview from "@/components/StatsOverview";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FitTracker Pro
                </h1>
                <p className="text-slate-400">Your personal fitness companion</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              <Activity className="w-4 h-4 mr-2" />
              New Workout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-black/20 border border-white/10">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600">
              <Target className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600">
              <Calendar className="w-4 h-4 mr-2" />
              History
            </TabsTrigger>
            <TabsTrigger value="records" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600">
              <Award className="w-4 h-4 mr-2" />
              Records
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600">
              <TrendingUp className="w-4 h-4 mr-2" />
              Progress
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <StatsOverview />
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <WorkoutHistory />
          </TabsContent>

          <TabsContent value="records" className="space-y-6">
            <PersonalRecords />
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <ProgressCharts />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
