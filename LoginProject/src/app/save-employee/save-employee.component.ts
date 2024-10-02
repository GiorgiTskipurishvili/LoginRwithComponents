import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import {FormBuilder, NonNullableFormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-save-employee',
  templateUrl: './save-employee.component.html',
  styleUrl: './save-employee.component.css'
})
export class SaveEmployeeComponent {
  employees: any[] = [];
  fb = inject(NonNullableFormBuilder);
  newEmployeeForm=this.fb.group({
    first_Name: ['', Validators.required],
    last_Name: ['', Validators.required],
    position: ['', Validators.required]
  })

constructor(private productService: ProductService) {}


saveEmployee(): void {
  if (this.newEmployeeForm.valid) {
    this.productService.saveEmployee(this.newEmployeeForm.value).subscribe(() => {
      alert('Employee saved successfully!');
      this.newEmployeeForm.reset(); 
    });
  }
}


}
