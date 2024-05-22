import { OnInit } from '@angular/core';
import { NgxNewsletterEditorService } from './ngx-newsletter-editor.service';
import { Placeholder } from './placeholder.model';
import { NgxEditorComponent } from '../editor.component';
import * as i0 from "@angular/core";
export declare class NgxNewsletterEditorComponent extends NgxEditorComponent implements OnInit {
    private ngxNewsletterEditorService;
    placeholders: Placeholder[];
    private editor;
    private newsletterConfig;
    constructor(ngxNewsletterEditorService: NgxNewsletterEditorService);
    ngOnInit(): void;
    getRawHtml(): string | undefined;
    private undo;
    private redo;
    private addButtons;
    private addPlaceholders;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxNewsletterEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxNewsletterEditorComponent, "ngx-grapes-newsletter-editor", never, { "placeholders": { "alias": "placeholders"; "required": false; }; }, {}, never, never, false, never>;
}
