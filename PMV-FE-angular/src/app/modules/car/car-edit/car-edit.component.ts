import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { FlashService } from 'src/app/core/flash.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss']
})
export class CarEditComponent {

  carEditForm!: FormGroup;
  carId: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private _flash: FlashService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.carId = this.route.snapshot.paramMap.get('id');
    this.service.get(`vehicle/cars/${this.carId}`).subscribe(data => {
      this.onPatchValues(data)
    })
    this.carEditForm = this.formBuilder.group({
      plateNo: ['', [Validators.required]],
      carModel: ['', [Validators.required]],
      manufacturingYear: ['', [Validators.required]],
      upcomingServiceDate: ['', [Validators.required]],
      driverInformation: ['', [Validators.required]],
    });

  }

  onPatchValues(data: any) {
    this.carEditForm.patchValue({
      plateNo: data.plateNo,
      carModel: data.carModel,
      manufacturingYear: data.manufacturingYear,
      upcomingServiceDate: new Date(data.upcomingServiceDate),
      driverInformation: data.driverInformation
    })
  }
  onSubmit() {
    if (this.carEditForm.valid) {
      const changeDateFormat = this.datePipe.transform(new Date(this.carEditForm.value.upcomingServiceDate), "MM/dd/YYYY");
      this.carEditForm.value.upcomingServiceDate = changeDateFormat;
      this.service.put(`vehicle/cars/${this.carId}`, this.carEditForm.value).subscribe(data => {
        this._flash.success("Car has been Updated successfully")
        this.router.navigate(['/car']);
      }, err => this._flash.errorMessageCheck(err));
    }
  }
}
