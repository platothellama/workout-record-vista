
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Flame, Timer, Target, TrendingUp, Calendar, Award } from "lucide-react";

const StatsOverview = () => {
  const todayStats = [
    { label: "Calories Burned", value: "450", unit: "kcal", icon: Flame, color: "from-orange-500 to-red-500" },
    { label: "Workout Time", value: "45", unit: "min", icon: Timer, color: "from-blue-500 to-cyan-500" },
    { label: "Exercises", value: "8", unit: "completed", icon: Target, color: "from-green-500 to-emerald-500" },
    { label: "Sets", value: "24", unit: "total", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
  ];

  const weeklyGoals = [
    { name: "Workout Days", current: 4, target: 5, percentage: 80 },
    { name: "Calories Burned", current: 2100, target: 2500, percentage: 84 },
    { name: "Personal Records", current: 3, target: 5, percentage: 60 },
  ];

  const recentAchievements = [
    { name: "Consistency Master", description: "7 days workout streak", earned: "2 days ago" },
    { name: "Heavy Lifter", description: "New squat PR: 225 lbs", earned: "5 days ago" },
    { name: "Endurance Hero", description: "45 min cardio session", earned: "1 week ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Today's Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {todayStats.map((stat, index) => (
          <Card key={index} className="bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <span className="text-slate-400 text-sm">{stat.unit}</span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Goals */}
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              <span>Weekly Goals</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {weeklyGoals.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{goal.name}</span>
                  <span className="text-sm text-slate-400">
                    {goal.current} / {goal.target}
                  </span>
                </div>
                <Progress value={goal.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span>Recent Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{achievement.name}</p>
                  <p className="text-slate-400 text-xs">{achievement.description}</p>
                  <p className="text-yellow-400 text-xs mt-1">{achievement.earned}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatsOverview;
