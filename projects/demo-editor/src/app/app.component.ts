import { Component, ViewChild } from '@angular/core';
import { NgxWebpageEditorComponent } from 'ngx-grapesjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('htmlBuilder') htmlBuilder: NgxWebpageEditorComponent | undefined;
  editorMode = '';
  template = '<span>This is a test content</span>'
  placeholders = [{
    value: 'MyPlaceholder',
    name: 'Custom placeholder',
    description: 'This is a custom placeholder'
  }];
  ngAfterViewInit() {
    console.log(this.htmlBuilder);
  }
}
