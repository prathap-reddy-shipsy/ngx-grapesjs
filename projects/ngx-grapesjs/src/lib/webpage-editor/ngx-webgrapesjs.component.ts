import { Component, OnInit } from '@angular/core';

import { NgxEditorComponent } from '../editor.component';
import { Config } from '../editor.model';

@Component({
  selector: 'ngx-grapes-webpage-editor',
  template: '<div id="gjs"></div>'
})

export class NgxWebpageEditorComponent extends NgxEditorComponent implements OnInit {

  editor: any;
  private webpageConfig: Partial<Config> = {
    container: '#gjs',
    plugins: [
      'grapesjs-preset-webpage',
      'gjs-blocks-basic',
      'grapesjs-plugin-forms',
      'grapesjs-plugin-ckeditor',
      'grapesjs-blocks-table',
      'grapesjs-component-code-editor'
    ],
    pluginsOpts: {
      'grapesjs-blocks-table': { 'containerId': '#gjs' },
      'grapesjs-preset-webpage': {
        modalTitleImport: 'Import template'
      }
    }
  };

  ngOnInit() {
    this.editor = this.setup(this.webpageConfig);
    const pn = this.editor.Panels;
    const panelViews = pn.addPanel({
      id: 'views'
    });
    panelViews.get('buttons').add([{
      attributes: {
        title: 'Open Code'
      },
      className: 'fa fa-file-code-o',
      command: 'open-code',
      togglable: false,
      id: 'open-code'
    }]);
  }

}
