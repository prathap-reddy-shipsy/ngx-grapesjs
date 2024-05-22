import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';

class NgxNewsletterEditorService {
    constructor() {
        this.parserHtml = {};
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxNewsletterEditorService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxNewsletterEditorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxNewsletterEditorService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class NgxEditorComponent {
    constructor() {
        this.template = '';
        this.storagePrefix = 'gjs-';
        this.storagePrefixsss = 'gjs-';
    }
    setup(customConfig) {
        const config = {
            components: this.template,
            storageManager: {
                id: this.storagePrefix
            }
        };
        return grapesjs.init({
            ...config,
            ...customConfig
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: NgxEditorComponent, selector: "ng-component", inputs: { template: "template", storagePrefix: "storagePrefix", storagePrefixsss: "storagePrefixsss"}, ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxEditorComponent, decorators: [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], propDecorators: { template: [{
                type: Input
            }], storagePrefix: [{
                type: Input
            }] } });

class NgxNewsletterEditorComponent extends NgxEditorComponent {
    constructor(ngxNewsletterEditorService) {
        super();
        this.ngxNewsletterEditorService = ngxNewsletterEditorService;
        this.placeholders = [];
        this.newsletterConfig = {
            container: '#gjs',
            plugins: ['grapesjs-preset-newsletter'],
            pluginsOpts: {
                'grapesjs-preset-newsletter': {
                    modalTitleImport: 'Import template'
                }
            },
            parser: {
                parserHtml: {}
            }
        };
        this.undo = (editor, sender) => {
            sender.set('active', 0);
            editor.UndoManager?.undo(1);
        };
        this.redo = (editor, sender) => {
            sender.set('active', 0);
            editor.UndoManager?.redo(1);
        };
    }
    ngOnInit() {
        // setup the default parser. It can be overriden by providing a custom implementation of the ngxNewsletterEditorService
        if (this.newsletterConfig.parser) {
            this.newsletterConfig.parser.parserHtml = this.ngxNewsletterEditorService?.parserHtml;
        }
        this.editor = this.setup(this.newsletterConfig);
        this.addButtons();
        this.addPlaceholders();
    }
    getRawHtml() {
        return this.editor?.runCommand?.('gjs-get-inlined-html');
    }
    addButtons() {
        this.editor?.Panels?.addButton('options', [
            {
                id: 'undo',
                className: 'fa fa-undo',
                command: this.undo,
                attributes: {
                    title: 'Undo'
                }
            },
            {
                id: 'redo',
                className: 'fa fa-repeat icon-redo',
                command: this.redo,
                attributes: {
                    title: 'Redo'
                }
            }
        ]);
    }
    addPlaceholders() {
        if (this.placeholders.length) {
            const placeholderSelectOptions = this.placeholders.map(placeholder => `<option
            title="${placeholder.description}"
            data-tooltip-pos="bottom"
            data-tooltip="Bold"
            class="gjs-one-color"
            value="<% ${placeholder.value} %>"
        >
        ${placeholder.name}
        </option>`);
            this.editor?.RichTextEditor?.add('placeholders', {
                icon: `<select class="gjs-field gjs-two-color">
                <option class="gjs-one-color" value="">- Select placeholder -</option>
                ${placeholderSelectOptions}
              </select>
        `,
                event: 'change',
                result: (rte, action) => rte.insertHTML(action.btn.firstChild.value),
                update: (_, action) => action.btn.firstChild.value = ''
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxNewsletterEditorComponent, deps: [{ token: NgxNewsletterEditorService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: NgxNewsletterEditorComponent, selector: "ngx-grapes-newsletter-editor", inputs: { placeholders: "placeholders" }, usesInheritance: true, ngImport: i0, template: '<div id="gjs"></div>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxNewsletterEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-grapes-newsletter-editor',
                    template: '<div id="gjs"></div>'
                }]
        }], ctorParameters: function () { return [{ type: NgxNewsletterEditorService }]; }, propDecorators: { placeholders: [{
                type: Input
            }] } });

class NgxWebpageEditorComponent extends NgxEditorComponent {
    constructor() {
        super(...arguments);
        this.webpageConfig = {
            container: '#gjs',
            plugins: [
                'grapesjs-preset-webpage',
                'gjs-blocks-basic'
            ],
            pluginsOpts: {
                'grapesjs-preset-webpage': {
                    modalTitleImport: 'Import template'
                }
            }
        };
    }
    ngOnInit() {
        this.setup(this.webpageConfig);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxWebpageEditorComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: NgxWebpageEditorComponent, selector: "ngx-grapes-webpage-editor", usesInheritance: true, ngImport: i0, template: '<div id="gjs"></div>', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxWebpageEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-grapes-webpage-editor',
                    template: '<div id="gjs"></div>'
                }]
        }] });

class NgxGrapesjsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxGrapesjsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.2", ngImport: i0, type: NgxGrapesjsModule, declarations: [NgxNewsletterEditorComponent,
            NgxWebpageEditorComponent], exports: [NgxNewsletterEditorComponent,
            NgxWebpageEditorComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxGrapesjsModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxGrapesjsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxNewsletterEditorComponent,
                        NgxWebpageEditorComponent
                    ],
                    exports: [
                        NgxNewsletterEditorComponent,
                        NgxWebpageEditorComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of ngx-grapesjs
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxGrapesjsModule, NgxNewsletterEditorComponent, NgxNewsletterEditorService, NgxWebpageEditorComponent };
//# sourceMappingURL=ngx-grapesjs.mjs.map
