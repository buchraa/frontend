import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-add-to-screen-component',
  templateUrl: './add-to-screen-component.component.html',
  styleUrls: ['./add-to-screen-component.component.css']
})
export class AddToScreenComponentComponent {
  
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { mobileType: 'ios' | 'android', promptEvent?: any },
    private bottomSheetRef: MatBottomSheetRef<AddToScreenComponentComponent>
  ) { }

 

  public installPwa(): void {
    this.data.promptEvent.prompt();
    this.close();
  }

  public close() {
    this.bottomSheetRef.dismiss();
  }
  
}
