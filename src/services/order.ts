import cache from 'helpers/rxjs-operators/cache';
import IOrder from 'interfaces/models/order';
import IOrderRole from 'interfaces/models/userRole';
import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable } from 'rxjs';

import apiService, { ApiService } from './api';

export class OrderService {
  constructor(private apiService: ApiService) {}

  public list(params: IPaginationParams): Observable<IPaginationResponse<IOrder>> {
    return this.apiService.get('/order', params);
  }

  public current(): Observable<IOrder> {
    return this.apiService.get('/order/current');
  }

  public roles(refresh: boolean = false): Observable<IOrderRole[]> {
    return this.apiService.get('/order/roles').pipe(cache('order-service-roles', { refresh }));
  }

  public save(model: Partial<IOrder>): Observable<IOrder> {
    return this.apiService.post('/order', model);
  }

  public delete(id: number): Observable<void> {
    return this.apiService.delete(`/order/${id}`);
  }
}

const orderService = new OrderService(apiService);
export default orderService;
