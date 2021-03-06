import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FileUploadFirestorageComponent } from './file-upload-firestorage.component';
import { FileSizePipe } from '../public-api';
import { CommonModule } from '@angular/common';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DropZoneDirective } from './dropzone/dropzone.directive';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    FileSizePipe,
    DropZoneDirective,
    FileUploadFirestorageComponent,
  ],
  imports: [
    AngularFireStorageModule,
    CommonModule,
    ImageCropperModule
  ],
  exports: [
    FileSizePipe,
    DropZoneDirective,
    FileUploadFirestorageComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FileUploadFirestorageModule { }
