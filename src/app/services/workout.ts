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

  getMyLogs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/workout-logs`);
  }

  createLog(log: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/workout-logs`, log);
  }

  deleteLog(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/workout-logs/${id}`);
  }

  getAllExercises(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/exercises`);
  }
getMyRecords(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/personal-records`);
}

createRecord(record: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/personal-records`, record);
}

deleteRecord(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/personal-records/${id}`);
}

getBestRecord(exerciseId: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/personal-records/best/${exerciseId}`);
}
}
