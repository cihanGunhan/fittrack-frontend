import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { WorkoutService } from '../../services/workout';

@Component({
  selector: 'app-personal-record',
  imports: [FormsModule, RouterLink],
  templateUrl: './personal-record.html',
  styleUrl: './personal-record.css'
})
export class PersonalRecord implements OnInit {

  records: any[] = [];
  exercises: any[] = [];
  showForm = false;

  newRecord = {
    exerciseId: null,
    weight: null,
    reps: null,
    achievedDate: new Date().toISOString().split('T')[0],
    notes: ''
  };

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.loadRecords();
    this.loadExercises();
  }

  loadRecords() {
    this.workoutService.getMyRecords().subscribe({
      next: (records) => this.records = records
    });
  }

  loadExercises() {
    this.workoutService.getAllExercises().subscribe({
      next: (exercises) => this.exercises = exercises
    });
  }

  createRecord() {
    if (!this.newRecord.exerciseId || !this.newRecord.weight) return;

    this.workoutService.createRecord(this.newRecord).subscribe({
      next: () => {
        this.newRecord = {
          exerciseId: null,
          weight: null,
          reps: null,
          achievedDate: new Date().toISOString().split('T')[0],
          notes: ''
        };
        this.showForm = false;
        this.loadRecords();
      }
    });
  }

  deleteRecord(id: number) {
    this.workoutService.deleteRecord(id).subscribe({
      next: () => this.loadRecords()
    });
  }
}
