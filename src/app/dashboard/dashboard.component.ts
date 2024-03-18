import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DashboardService } from './servicios/dashboard.service';
import { PoModalAction, PoModalComponent, PoSelectOption, PoTableAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;

  @ViewChild('modalNuevaConexion', { static: true }) modalNuevaConexion: PoModalComponent;

  @ViewChild('hotelDetailModal', { static: true }) hotelDetailModal: PoModalComponent;

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Activo', value: 'activo' },
    { label: 'Observación', value: 'observación' },
    { label: 'Suspendido', value: 'suspendido' },
    { label: 'No cliente', value: 'no cliente' }
  ];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.columns = this.dashboardService.getColumns();
    this.items = this.dashboardService.getItems();
  }

}
