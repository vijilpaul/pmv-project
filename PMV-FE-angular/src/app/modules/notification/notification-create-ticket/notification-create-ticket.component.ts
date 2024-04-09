import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { FlashService } from 'src/app/core/flash.service';

@Component({
  selector: 'app-notification-create-ticket',
  templateUrl: './notification-create-ticket.component.html',
  styleUrls: ['./notification-create-ticket.component.scss']
})
export class NotificationCreateTicketComponent {

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
    this.service.get(`vehicle/cars/${this.carId}`).subscribe(data => {
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
      upcomingServiceDate: data.upcomingServiceDate,
      driverInformation: data.driverInformation
    })
  }
  onSubmit() {
    if (this.ticketForm.valid) {
      const formVal = this.ticketForm.value;
      const changeDateFormat = this.datePipe.transform(new Date(formVal.lastServiceDate), "MM/dd/YYYY");
      formVal.lastServiceDate = changeDateFormat;
      this.service.patch(`vehicle/ticket/${this.carId}`, formVal).subscribe(data => {
        this._flash.success("Ticket has been added successfully");
        this.router.navigate(['/notification']);
      }, err => this._flash.errorMessageCheck(err));
    }
  }
}
