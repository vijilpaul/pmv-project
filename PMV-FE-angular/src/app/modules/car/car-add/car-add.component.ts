import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { FlashService } from 'src/app/core/flash.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent {

  carAddForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private _flash: FlashService,
    private datePipe: DatePipe,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.carAddForm = this.formBuilder.group({
      plateNo: ['', [Validators.required]],
      carModel: ['', [Validators.required]],
      manufacturingYear: ['', [Validators.required]],
      upcomingServiceDate: ['', [Validators.required]],
      driverInformation: ['', [Validators.required]],
    })
  }

  onSubmit() {
    const changeDateFormat = this.datePipe.transform(new Date(this.carAddForm.value.upcomingServiceDate), "MM/dd/YYYY");
    this.carAddForm.value.upcomingServiceDate = changeDateFormat;
    this.service.post('vehicle/cars', this.carAddForm.value).subscribe(data => {
      this._flash.success("New car has been added successfully")
      this.router.navigate(['/car']);
    }, err => this._flash.errorMessageCheck(err))
  }
}
