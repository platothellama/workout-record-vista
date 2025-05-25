
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Calendar, Target, Activity } from "lucide-react";

const ProgressCharts = () => {
  // Sample data for charts
  const weightProgressData = [
    { month: "Jul", weight: 180, bodyFat: 18 },
    { month: "Aug", weight: 178, bodyFat: 17.5 },
    { month: "Sep", weight: 175, bodyFat: 16.8 },
    { month: "Oct", weight: 173, bodyFat: 16.2 },
    { month: "Nov", weight: 171, bodyFat: 15.8 },
    { month: "Dec", weight: 169, bodyFat: 15.3 },
    { month: "Jan", weight: 167, bodyFat: 14.9 }
  ];

  const strengthProgressData = [
    { exercise: "Bench", jul: 185, aug: 195, sep: 205, oct: 210, nov: 215, dec: 220, jan: 225 },
    { exercise: "Squat", jul: 225, aug: 245, sep: 265, oct: 285, nov: 295, dec: 305, jan: 315 },
    { exercise: "Deadlift", jul: 275, aug: 295, sep: 315, oct: 335, nov: 355, dec: 375, jan: 405 }
  ];

  const workoutFrequencyData = [
    { week: "Week 1", workouts: 4, calories: 1200 },
    { week: "Week 2", workouts: 5, calories: 1450 },
    { week: "Week 3", workouts: 3, calories: 980 },
    { week: "Week 4", workouts: 6, calories: 1680 },
    { week: "Week 5", workouts: 5, calories: 1350 },
    { week: "Week 6", workouts: 4, calories: 1180 },
    { week: "Week 7", workouts: 5, calories: 1520 }
  ];

  const workoutTypeData = [
    { name: "Strength", value: 45, color: "#3B82F6" },
    { name: "Cardio", value: 25, color: "#EF4444" },
    { name: "HIIT", value: 20, color: "#F59E0B" },
    { name: "Flexibility", value: 10, color: "#8B5CF6" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Progress Analytics</h2>
          <p className="text-slate-400">Track your fitness journey over time</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weight Progress Chart */}
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span>Weight & Body Fat Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weightProgressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Line 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="bodyFat" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-slate-400">Weight (lbs)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-400">Body Fat (%)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workout Frequency */}
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-green-400" />
              <span>Weekly Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={workoutFrequencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="week" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Bar dataKey="workouts" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="text-center mt-4">
              <span className="text-sm text-slate-400">Workouts per week</span>
            </div>
          </CardContent>
        </Card>

        {/* Strength Progress */}
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-purple-400" />
              <span>Strength Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={[
                { month: "Jul", bench: 185, squat: 225, deadlift: 275 },
                { month: "Aug", bench: 195, squat: 245, deadlift: 295 },
                { month: "Sep", bench: 205, squat: 265, deadlift: 315 },
                { month: "Oct", bench: 210, squat: 285, deadlift: 335 },
                { month: "Nov", bench: 215, squat: 295, deadlift: 355 },
                { month: "Dec", bench: 220, squat: 305, deadlift: 375 },
                { month: "Jan", bench: 225, squat: 315, deadlift: 405 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Line type="monotone" dataKey="bench" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="squat" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="deadlift" stroke="#F59E0B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-slate-400">Bench Press</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-400">Squat</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-slate-400">Deadlift</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Workout Type Distribution */}
        <Card className="bg-black/40 border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-orange-400" />
              <span>Workout Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={workoutTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  stroke="none"
                >
                  {workoutTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {workoutTypeData.map((entry, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                  <span className="text-sm text-slate-400">{entry.name} ({entry.value}%)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressCharts;
