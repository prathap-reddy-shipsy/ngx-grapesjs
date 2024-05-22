import { Component, Input } from '@angular/core';
import { NgxEditorComponent } from '../editor.component';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-newsletter-editor.service";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxNewsletterEditorComponent, deps: [{ token: i1.NgxNewsletterEditorService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: NgxNewsletterEditorComponent, selector: "ngx-grapes-newsletter-editor", inputs: { placeholders: "placeholders" }, usesInheritance: true, ngImport: i0, template: '<div id="gjs"></div>', isInline: true }); }
}
export { NgxNewsletterEditorComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxNewsletterEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-grapes-newsletter-editor',
                    template: '<div id="gjs"></div>'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxNewsletterEditorService }]; }, propDecorators: { placeholders: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW5ld3NsZXR0ZXItZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1ncmFwZXNqcy9zcmMvbGliL25ld3NsZXR0ZXItZWRpdG9yL25neC1uZXdzbGV0dGVyLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFLekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUV6RCxNQUlhLDRCQUE2QixTQUFRLGtCQUFrQjtJQWtCbEUsWUFBb0IsMEJBQXNEO1FBQ3hFLEtBQUssRUFBRSxDQUFDO1FBRFUsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQWhCakUsaUJBQVksR0FBa0IsRUFBRSxDQUFDO1FBR2xDLHFCQUFnQixHQUE4QjtZQUNwRCxTQUFTLEVBQUUsTUFBTTtZQUNqQixPQUFPLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN2QyxXQUFXLEVBQUU7Z0JBQ1gsNEJBQTRCLEVBQUU7b0JBQzVCLGdCQUFnQixFQUFFLGlCQUFpQjtpQkFDcEM7YUFDRjtZQUNELE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsRUFBRTthQUNmO1NBQ0YsQ0FBQztRQXNCTSxTQUFJLEdBQUcsQ0FBQyxNQUF3QixFQUFFLE1BQXFCLEVBQUUsRUFBRTtZQUNqRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUM7UUFFTSxTQUFJLEdBQUcsQ0FBQyxNQUF3QixFQUFFLE1BQXFCLEVBQUUsRUFBRTtZQUNqRSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUM7SUExQkYsQ0FBQztJQUVELFFBQVE7UUFDTix1SEFBdUg7UUFDdkgsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQywwQkFBMEIsRUFBRSxVQUFVLENBQUM7U0FDdkY7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFZTyxVQUFVO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDeEM7Z0JBQ0UsRUFBRSxFQUFFLE1BQU07Z0JBQ1YsU0FBUyxFQUFFLFlBQVk7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDbEIsVUFBVSxFQUFFO29CQUNWLEtBQUssRUFBRSxNQUFNO2lCQUNkO2FBQ0Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsTUFBTTtnQkFDVixTQUFTLEVBQUUsd0JBQXdCO2dCQUNuQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2xCLFVBQVUsRUFBRTtvQkFDVixLQUFLLEVBQUUsTUFBTTtpQkFDZDthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM1QixNQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQ25FO3FCQUNhLFdBQVcsQ0FBQyxXQUFXOzs7O3dCQUlwQixXQUFXLENBQUMsS0FBSzs7VUFFL0IsV0FBVyxDQUFDLElBQUk7a0JBQ1IsQ0FDWCxDQUFDO1lBRUYsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxDQUFDLGNBQWMsRUFBRTtnQkFDL0MsSUFBSSxFQUFFOztrQkFFSSx3QkFBd0I7O1NBRWpDO2dCQUNELEtBQUssRUFBRSxRQUFRO2dCQUNmLE1BQU0sRUFBRSxDQUFDLEdBQWUsRUFBRSxNQUFrQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDNUYsTUFBTSxFQUFFLENBQUMsQ0FBYSxFQUFFLE1BQWtCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFO2FBQ2hGLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs4R0E5RlUsNEJBQTRCO2tHQUE1Qiw0QkFBNEIscUlBRjdCLHNCQUFzQjs7U0FFckIsNEJBQTRCOzJGQUE1Qiw0QkFBNEI7a0JBSnhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7aUhBR1UsWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29tbWFuZFNlbmRlciwgTmV3c2xldHRlckNvbmZpZywgTmV3c2xldHRlckVkaXRvciwgVGV4dEFjdGlvbiwgVGV4dEVkaXRvciB9IGZyb20gJy4vbmV3c2xldHRlci1lZGl0b3IubW9kZWwnO1xyXG5pbXBvcnQgeyBOZ3hOZXdzbGV0dGVyRWRpdG9yU2VydmljZSB9IGZyb20gJy4vbmd4LW5ld3NsZXR0ZXItZWRpdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbGFjZWhvbGRlciB9IGZyb20gJy4vcGxhY2Vob2xkZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBOZ3hFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi9lZGl0b3IuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWdyYXBlcy1uZXdzbGV0dGVyLWVkaXRvcicsXHJcbiAgdGVtcGxhdGU6ICc8ZGl2IGlkPVwiZ2pzXCI+PC9kaXY+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TmV3c2xldHRlckVkaXRvckNvbXBvbmVudCBleHRlbmRzIE5neEVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyczogUGxhY2Vob2xkZXJbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIGVkaXRvcjogTmV3c2xldHRlckVkaXRvciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIG5ld3NsZXR0ZXJDb25maWc6IFBhcnRpYWw8TmV3c2xldHRlckNvbmZpZz4gPSB7XHJcbiAgICBjb250YWluZXI6ICcjZ2pzJyxcclxuICAgIHBsdWdpbnM6IFsnZ3JhcGVzanMtcHJlc2V0LW5ld3NsZXR0ZXInXSxcclxuICAgIHBsdWdpbnNPcHRzOiB7XHJcbiAgICAgICdncmFwZXNqcy1wcmVzZXQtbmV3c2xldHRlcic6IHtcclxuICAgICAgICBtb2RhbFRpdGxlSW1wb3J0OiAnSW1wb3J0IHRlbXBsYXRlJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGFyc2VyOiB7XHJcbiAgICAgIHBhcnNlckh0bWw6IHt9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hOZXdzbGV0dGVyRWRpdG9yU2VydmljZTogTmd4TmV3c2xldHRlckVkaXRvclNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHNldHVwIHRoZSBkZWZhdWx0IHBhcnNlci4gSXQgY2FuIGJlIG92ZXJyaWRlbiBieSBwcm92aWRpbmcgYSBjdXN0b20gaW1wbGVtZW50YXRpb24gb2YgdGhlIG5neE5ld3NsZXR0ZXJFZGl0b3JTZXJ2aWNlXHJcbiAgICBpZiAodGhpcy5uZXdzbGV0dGVyQ29uZmlnLnBhcnNlcikge1xyXG4gICAgICB0aGlzLm5ld3NsZXR0ZXJDb25maWcucGFyc2VyLnBhcnNlckh0bWwgPSB0aGlzLm5neE5ld3NsZXR0ZXJFZGl0b3JTZXJ2aWNlPy5wYXJzZXJIdG1sO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWRpdG9yID0gdGhpcy5zZXR1cCh0aGlzLm5ld3NsZXR0ZXJDb25maWcpO1xyXG5cclxuICAgIHRoaXMuYWRkQnV0dG9ucygpO1xyXG4gICAgdGhpcy5hZGRQbGFjZWhvbGRlcnMoKTtcclxuICB9XHJcblxyXG4gIGdldFJhd0h0bWwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLmVkaXRvcj8ucnVuQ29tbWFuZD8uKCdnanMtZ2V0LWlubGluZWQtaHRtbCcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1bmRvID0gKGVkaXRvcjogTmV3c2xldHRlckVkaXRvciwgc2VuZGVyOiBDb21tYW5kU2VuZGVyKSA9PiB7XHJcbiAgICBzZW5kZXIuc2V0KCdhY3RpdmUnLCAwKTtcclxuICAgIGVkaXRvci5VbmRvTWFuYWdlcj8udW5kbygxKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlZG8gPSAoZWRpdG9yOiBOZXdzbGV0dGVyRWRpdG9yLCBzZW5kZXI6IENvbW1hbmRTZW5kZXIpID0+IHtcclxuICAgIHNlbmRlci5zZXQoJ2FjdGl2ZScsIDApO1xyXG4gICAgZWRpdG9yLlVuZG9NYW5hZ2VyPy5yZWRvKDEpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgYWRkQnV0dG9ucygpIHtcclxuICAgIHRoaXMuZWRpdG9yPy5QYW5lbHM/LmFkZEJ1dHRvbignb3B0aW9ucycsIFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAndW5kbycsXHJcbiAgICAgICAgY2xhc3NOYW1lOiAnZmEgZmEtdW5kbycsXHJcbiAgICAgICAgY29tbWFuZDogdGhpcy51bmRvLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgIHRpdGxlOiAnVW5kbydcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJ3JlZG8nLFxyXG4gICAgICAgIGNsYXNzTmFtZTogJ2ZhIGZhLXJlcGVhdCBpY29uLXJlZG8nLFxyXG4gICAgICAgIGNvbW1hbmQ6IHRoaXMucmVkbyxcclxuICAgICAgICBhdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICB0aXRsZTogJ1JlZG8nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkUGxhY2Vob2xkZXJzKCkge1xyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXJzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBwbGFjZWhvbGRlclNlbGVjdE9wdGlvbnMgPSB0aGlzLnBsYWNlaG9sZGVycy5tYXAocGxhY2Vob2xkZXIgPT5cclxuICAgICAgICBgPG9wdGlvblxyXG4gICAgICAgICAgICB0aXRsZT1cIiR7cGxhY2Vob2xkZXIuZGVzY3JpcHRpb259XCJcclxuICAgICAgICAgICAgZGF0YS10b29sdGlwLXBvcz1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgIGRhdGEtdG9vbHRpcD1cIkJvbGRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImdqcy1vbmUtY29sb3JcIlxyXG4gICAgICAgICAgICB2YWx1ZT1cIjwlICR7cGxhY2Vob2xkZXIudmFsdWV9ICU+XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgJHtwbGFjZWhvbGRlci5uYW1lfVxyXG4gICAgICAgIDwvb3B0aW9uPmBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuZWRpdG9yPy5SaWNoVGV4dEVkaXRvcj8uYWRkKCdwbGFjZWhvbGRlcnMnLCB7XHJcbiAgICAgICAgaWNvbjogYDxzZWxlY3QgY2xhc3M9XCJnanMtZmllbGQgZ2pzLXR3by1jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzcz1cImdqcy1vbmUtY29sb3JcIiB2YWx1ZT1cIlwiPi0gU2VsZWN0IHBsYWNlaG9sZGVyIC08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICR7cGxhY2Vob2xkZXJTZWxlY3RPcHRpb25zfVxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgZXZlbnQ6ICdjaGFuZ2UnLFxyXG4gICAgICAgIHJlc3VsdDogKHJ0ZTogVGV4dEVkaXRvciwgYWN0aW9uOiBUZXh0QWN0aW9uKSA9PiBydGUuaW5zZXJ0SFRNTChhY3Rpb24uYnRuLmZpcnN0Q2hpbGQudmFsdWUpLFxyXG4gICAgICAgIHVwZGF0ZTogKF86IFRleHRFZGl0b3IsIGFjdGlvbjogVGV4dEFjdGlvbikgPT4gYWN0aW9uLmJ0bi5maXJzdENoaWxkLnZhbHVlID0gJydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=