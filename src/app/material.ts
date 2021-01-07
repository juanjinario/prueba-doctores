import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core'

@NgModule({
    imports:[ MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTooltipModule, MatCardModule, MatRadioModule, MatSnackBarModule, MatProgressBarModule ],
    exports:[ MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTooltipModule, MatCardModule, MatRadioModule, MatSnackBarModule, MatProgressBarModule ]
})
export class MaterialModule {}