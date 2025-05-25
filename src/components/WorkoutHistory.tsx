
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Dumbbell, Flame, MoreHorizontal } from "lucide-react";

const WorkoutHistory = () => {
  const workouts = [
    {
      id: 1,
      name: "Upper Body Strength",
      date: "2024-01-15",
      duration: "45 min",
      exercises: 8,
      calories: 320,
      type: "Strength",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Cardio Blast",
      date: "2024-01-14",
      duration: "30 min",
      exercises: 5,
      calories: 280,
      type: "Cardio",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 3,
      name: "Leg Day",
      date: "2024-01-13",
      duration: "50 min",
      exercises: 10,
      calories: 400,
      type: "Strength",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Core & Flexibility",
      date: "2024-01-12",
      duration: "25 min",
      exercises: 6,
      calories: 180,
      type: "Flexibility",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      name: "Full Body HIIT",
      date: "2024-01-11",
      duration: "35 min",
      exercises: 12,
      calories: 350,
      type: "HIIT",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      name: "Push Day",
      date: "2024-01-10",
      duration: "40 min",
      exercises: 7,
      calories: 290,
      type: "Strength",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Strength": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Cardio": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "HIIT": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Flexibility": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Workout History</h2>
          <p className="text-slate-400">Track your fitness journey</p>
        </div>
        <Button variant="outline" className="border-white/20 hover:bg-white/10">
          <Calendar className="w-4 h-4 mr-2" />
          Filter by Date
        </Button>
      </div>

      <div className="grid gap-4">
        {workouts.map((workout) => (
          <Card key={workout.id} className="bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${workout.color} flex items-center justify-center`}>
                    <Dumbbell className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{workout.name}</h3>
                    <p className="text-slate-400 text-sm">{workout.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <Badge className={`${getTypeColor(workout.type)} border`}>
                    {workout.type}
                  </Badge>
                  
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Dumbbell className="w-4 h-4" />
                      <span>{workout.exercises} exercises</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Flame className="w-4 h-4" />
                      <span>{workout.calories} kcal</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white/10"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center py-8">
        <Button variant="outline" className="border-white/20 hover:bg-white/10">
          Load More Workouts
        </Button>
      </div>
    </div>
  );
};

export default WorkoutHistory;
