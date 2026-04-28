import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { WorkoutService } from '../../services/workout';

@Component({
  selector: 'app-workout-log',
  imports: [FormsModule, RouterLink],
  templateUrl: './workout-log.html',
  styleUrl: './workout-log.css'
})
export class WorkoutLog implements OnInit {

  logs: any[] = [];
  exercises: any[] = [];
  showForm = false;

  newLog = {
    exerciseId: null,
    logDate: new Date().toISOString().split('T')[0],
    sets: null,
    reps: null,
    weight: null,
    notes: ''
  };

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.loadLogs();
    this.loadExercises();
  }

  loadLogs() {
    this.workoutService.getMyLogs().subscribe({
      next: (logs) => this.logs = logs
    });
  }

  loadExercises() {
    this.workoutService.getAllExercises().subscribe({
      next: (exercises) => this.exercises = exercises
    });
  }

  createLog() {
    if (!this.newLog.exerciseId) return;

    this.workoutService.createLog(this.newLog).subscribe({
      next: () => {
        this.newLog = {
          exerciseId: null,
          logDate: new Date().toISOString().split('T')[0],
          sets: null,
          reps: null,
          weight: null,
          notes: ''
        };
        this.showForm = false;
        this.loadLogs();
      }
    });
  }

  deleteLog(id: number) {
    this.workoutService.deleteLog(id).subscribe({
      next: () => this.loadLogs()
    });
  }
}
