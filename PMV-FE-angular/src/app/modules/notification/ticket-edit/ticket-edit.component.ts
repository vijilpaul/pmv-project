import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { FlashService } from 'src/app/core/flash.service';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent {

  ticketForm!: FormGroup;
  carId: any;
  disabled = false;

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
    this.service.get(`vehicle/ticket/${this.carId}`).subscribe(data => {
      this.onPatchValues(data)
    })

    this.ticketForm = this.formBuilder.group({
      plateNo: [{ value: '', disabled: true }, [Validators.required]],
      carModel: [{ value: '', disabled: true }, [Validators.required]],
      manufacturingYear: [{ value: '', disabled: true }, [Validators.required]],
      upcomingServiceDate: [{ value: '', disabled: true }, [Validators.required]],
      driverInformation: [{ value: '', disabled: true }, [Validators.required]],
      lastServiceMilage: ['', [Validators.required]],
      lastServiceDate: ['', [Validators.required]],
      serviceDescription: ['', [Validators.required]],
      serviceCost: ['', [Validators.required]],
      serviceEngineerName: ['', [Validators.required]],
    })

  }

  onPatchValues(data: any) {
    this.ticketForm.patchValue({
      plateNo: data.plateNo,
      carModel: data.carModel,
      manufacturingYear: data.manufacturingYear,
      upcomingServiceDate: new Date(data.upcomingServiceDate),
      driverInformation: data.driverInformation,
      lastServiceMilage: data.lastServiceMilage,
      lastServiceDate: new Date(data.lastServiceDate),
      serviceDescription: data.serviceDescription,
      serviceCost: data.serviceCost,
      serviceEngineerName: data.serviceEngineerName,
    })
  }
  onSubmit() {
    if (this.ticketForm.valid) {
      const formVal = this.ticketForm.value;
      const changeDateFormat = this.datePipe.transform(new Date(formVal.lastServiceDate), "MM/dd/YYYY");
      formVal.lastServiceDate = changeDateFormat;
      this.service.patch(`vehicle/ticket/${this.carId}`, formVal).subscribe(data => {
        this._flash.success("Ticket has been updated successfully");
        this.router.navigate(['/notification/ticket-list']);
      }, err => this._flash.errorMessageCheck(err));
    }
  }
}
