
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, TrendingUp, Calendar, Target } from "lucide-react";

const PersonalRecords = () => {
  const records = [
    {
      exercise: "Bench Press",
      weight: "225 lbs",
      reps: "5",
      date: "2024-01-10",
      improvement: "+15 lbs",
      category: "Upper Body"
    },
    {
      exercise: "Squat",
      weight: "315 lbs", 
      reps: "3",
      date: "2024-01-08",
      improvement: "+25 lbs",
      category: "Lower Body"
    },
    {
      exercise: "Deadlift",
      weight: "405 lbs",
      reps: "1",
      date: "2024-01-05",
      improvement: "+35 lbs",
      category: "Full Body"
    },
    {
      exercise: "Pull-ups",
      weight: "Body + 45 lbs",
      reps: "8",
      date: "2024-01-03",
      improvement: "+10 lbs",
      category: "Upper Body"
    },
    {
      exercise: "Overhead Press",
      weight: "155 lbs",
      reps: "5",
      date: "2023-12-28",
      improvement: "+10 lbs",
      category: "Upper Body"
    },
    {
      exercise: "Running (5K)",
      weight: "21:45",
      reps: "time",
      date: "2023-12-25",
      improvement: "-1:30",
      category: "Cardio"
    }
  ];

  const categories = ["All", "Upper Body", "Lower Body", "Full Body", "Cardio"];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Upper Body": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Lower Body": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Full Body": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Cardio": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getImprovementColor = (improvement: string) => {
    const isPositive = improvement.includes("+") || improvement.includes("-");
    const isTimeImprovement = improvement.includes("-") && improvement.includes(":");
    if (isTimeImprovement) return "text-green-400";
    return improvement.includes("+") ? "text-green-400" : "text-red-400";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Personal Records</h2>
          <p className="text-slate-400">Your greatest achievements</p>
        </div>
        <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700">
          <Trophy className="w-4 h-4 mr-2" />
          Add New Record
        </Button>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            size="sm"
            className="border-white/20 hover:bg-white/10"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Records Grid */}
      <div className="grid gap-4">
        {records.map((record, index) => (
          <Card key={index} className="bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{record.exercise}</h3>
                    <div className="flex items-center space-x-2 text-sm text-slate-400">
                      <Calendar className="w-3 h-3" />
                      <span>{record.date}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <Badge className={`${getCategoryColor(record.category)} border`}>
                    {record.category}
                  </Badge>

                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold">{record.weight}</span>
                      {record.reps !== "time" && (
                        <span className="text-slate-400">× {record.reps}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <TrendingUp className="w-3 h-3" />
                      <span className={getImprovementColor(record.improvement)}>
                        {record.improvement}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30">
          <CardContent className="p-6 text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">6</div>
            <div className="text-sm text-slate-400">Total Records</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-slate-400">This Month</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold">85%</div>
            <div className="text-sm text-slate-400">Improvement Rate</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonalRecords;
