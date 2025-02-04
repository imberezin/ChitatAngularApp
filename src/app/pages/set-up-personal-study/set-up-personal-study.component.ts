import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

// import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-set-up-personal-study',
  imports: [    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
],
  templateUrl: './set-up-personal-study.component.html',
  styleUrl: './set-up-personal-study.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,

})
export class SetUpPersonalStudyComponent implements OnInit {
  fromTitles = ['רמב״ם יומי', 'דף יומי', 'משנה יומית', 'ירושלמי יומי', 'תנ״ך יומי', 'תהילים יומי'];
  checkboxForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checkboxForm = this.fb.group({});
  }

  ngOnInit() {

    let retString = localStorage.getItem("selectedItemsWithIndexes")
    var retArray:  { key: string; index: number }[] | null = null

    if (retString){
      retArray = JSON.parse(retString)
    }


    console.log("retArray")
    console.log(retArray)

    // Dynamically create form controls for each title
    this.fromTitles.forEach((title , index) => {
      const found = retArray?.find(item => item.index === index);
      this.checkboxForm.addControl(title, this.fb.control(found ? true : false));
    });

    //fUserName
    let retUserNameString = localStorage.getItem("fUserName")

    this.checkboxForm.addControl('fUserName', new FormControl(retUserNameString ? retUserNameString : "", [
      Validators.required,
      Validators.minLength(4)]));
    
  }

  // Optional: Method to get form values
  getFormValues() {
    console.log(this.checkboxForm.value);
  }


  get fUserName() {
    return this.checkboxForm.get('fUserName');
  }

  onSubmit() {
    console.log("onSubmit")
    if (this.checkboxForm.valid) {
      // Get selected items (where value is true)
      // const selectedItems = Object.entries(this.checkboxForm.value)
      //   .filter(([_, value]) => value === true)
      //   .map(([key]) => key);

      // Get selected items (where value is true) and index of the selected items
      const selectedItemsWithIndexes: { key: string; index: number }[] = [];
      Object.entries(this.checkboxForm.value).forEach(([key, value]) => {
        if (value === true) {
          const index = this.fromTitles.indexOf(key);
          if (index !== -1) { // Key found in orderedKeys
            selectedItemsWithIndexes.push({ key, index });
          } else {
            console.warn(`Key "${key}" not found in orderedKeys array.`);
          }
        }
      });

        
      localStorage.setItem("selectedItemsWithIndexes", JSON.stringify(selectedItemsWithIndexes));

      console.log('Selected items:', selectedItemsWithIndexes);
      // Here you can send the data to your backend or handle it as needed

      const userForm = this.checkboxForm.get('fUserName') as FormArray
      localStorage.setItem("fUserName", userForm.value);


    }
  }


}


