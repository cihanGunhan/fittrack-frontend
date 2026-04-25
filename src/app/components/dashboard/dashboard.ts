import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { WorkoutService } from '../../services/workout';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  plans: any[] = [];
  showForm = false;
  newPlanName = '';
  newPlanDescription = '';
  email = localStorage.getItem('email') || '';

  constructor(
    private authService: AuthService,
    private workoutService: WorkoutService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPlans();
  }

  loadPlans() {
    this.workoutService.getMyPlans().subscribe({
      next: (plans) => {
        this.plans = plans;
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    });
  }

  createPlan() {
    if (!this.newPlanName.trim()) return;

    this.workoutService.createPlan(
      this.newPlanName,
      this.newPlanDescription
    ).subscribe({
      next: () => {
        this.newPlanName = '';
        this.newPlanDescription = '';
        this.showForm = false;
        this.loadPlans();
      }
    });
  }

  deletePlan(id: number) {
    this.workoutService.deletePlan(id).subscribe({
      next: () => this.loadPlans()
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
