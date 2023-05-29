import React, { useEffect, useState } from 'react';
import './Dashboard.css'; 

const Dashboard = () => {
  const [fitnessGoals, setFitnessGoals] = useState([]);
  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [overallProgress, setOverallProgress] = useState(0);

  // Fetch fitness data
  useEffect(() => {
    // Simulating API call with setTimeout
    setTimeout(() => {
      const goals = [
        { id: 1, name: 'Lose weight', progress: 50 },
        { id: 2, name: 'Build muscle', progress: 25 },
        { id: 3, name: 'Improve flexibility', progress: 75 },
      ];
      const history = [
        { id: 1, date: '2023-05-20', workout: 'Cardio' },
        { id: 2, date: '2023-05-25', workout: 'Strength training' },
        { id: 3, date: '2023-05-27', workout: 'Yoga' },
      ];
      const progress = 60;

      setFitnessGoals(goals);
      setWorkoutHistory(history);
      setOverallProgress(progress);
    }, 1000);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Fitness Dashboard</h2>

      {/* Fitness Goals */}
      <div className="section">
        <h3>Fitness Goals</h3>
        {fitnessGoals.map((goal) => (
          <div key={goal.id}>
            <p>Goal: {goal.name}</p>
            <p>Progress: {goal.progress}%</p>
          </div>
        ))}
      </div>

      {/* Workout History */}
      <div className="section">
        <h3>Workout History</h3>
        <ul>
          {workoutHistory.map((workout) => (
            <li key={workout.id}>
              {workout.date}: {workout.workout}
            </li>
          ))}
        </ul>
      </div>

      {/* Overall Progress */}
      <div className="section">
        <h3>Overall Progress</h3>
        <p>Progress: {overallProgress}%</p>
      </div>

      {/* Fitness Tracking */}
      <div className="section">
        <h3>Fitness Tracking</h3>
      </div>

      {/* Goal Setting */}
      <div className="section">
        <h3>Goal Setting</h3>
      </div>

      {/* Community */}
      <div className="section">
        <h3>Community</h3>
      </div>

      {/* Personalization */}
      <div className="section">
        <h3>Personalization</h3>
      </div>
    </div>
  );
};

export default Dashboard;





















