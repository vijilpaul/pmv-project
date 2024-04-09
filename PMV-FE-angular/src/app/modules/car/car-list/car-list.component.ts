import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { FlashService } from 'src/app/core/flash.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {

  listColumns = [
    {
      name: "S.No",
      dataKey: "id"
    },
    {
      name: "Plate No",
      dataKey: "plateNo"
    },
    {
      name: "Car model",
      dataKey: "carModel"
    },
    {
      name: "Upcoming service date",
      dataKey: "upcomingServiceDate"
    },
    {
      name: "Driver information",
      dataKey: "driverInformation"
    }
  ];
  tableData = [
  ];
  constructor(
    private router: Router,
    private service: ApiService,
    private _flash: FlashService,
  ) { }

  ngOnInit() {
    this.fetchCarList();
  }
  fetchCarList() {
    this.service.get('vehicle/cars').subscribe(data => {
      this.tableData = data
    })
  }
  onAddNewCar() {
    this.router.navigateByUrl("/car/car-add");
  }
  goToEdit(ev: any) {
    this.router.navigate(['/car/car-edit', ev.id]);
  }

  goToDelete(ev: any) {
    this.service.delete(`vehicle/cars/${ev.id}`).subscribe(data => {
      this._flash.success("Car has been deleted successfully")
      setTimeout(() => {
        this.fetchCarList();
      }, 500);
    }, err => this._flash.errorMessageCheck(err))
  }
}
