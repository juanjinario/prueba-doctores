import { MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, 
    MatTooltipModule, MatCardModule, MatRadioModule, MatSnackBarModule, MatProgressBarModule } from '@angular/material';
import { NgModule } from '@angular/core'

@NgModule({
    imports:[ MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTooltipModule, MatCardModule, MatRadioModule, MatSnackBarModule, MatProgressBarModule ],
    exports:[ MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTooltipModule, MatCardModule, MatRadioModule, MatSnackBarModule, MatProgressBarModule ]
})
export class MaterialModule {}