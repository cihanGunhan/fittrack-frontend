import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  getMyPlans(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/workout-plans`);
  }

  createPlan(name: string, description: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/workout-plans`, {
      name, description
    });
  }

  deletePlan(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/workout-plans/${id}`);
  }
}
