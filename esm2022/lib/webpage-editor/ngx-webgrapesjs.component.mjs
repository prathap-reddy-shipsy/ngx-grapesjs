import { Component } from '@angular/core';
import { NgxEditorComponent } from '../editor.component';
import * as i0 from "@angular/core";
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
export { NgxWebpageEditorComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: NgxWebpageEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-grapes-webpage-editor',
                    template: '<div id="gjs"></div>'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXdlYmdyYXBlc2pzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1ncmFwZXNqcy9zcmMvbGliL3dlYnBhZ2UtZWRpdG9yL25neC13ZWJncmFwZXNqcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHekQsTUFLYSx5QkFBMEIsU0FBUSxrQkFBa0I7SUFMakU7O1FBT1Usa0JBQWEsR0FBb0I7WUFDdkMsU0FBUyxFQUFFLE1BQU07WUFDakIsT0FBTyxFQUFFO2dCQUNQLHlCQUF5QjtnQkFDekIsa0JBQWtCO2FBQ25CO1lBQ0QsV0FBVyxFQUFFO2dCQUNYLHlCQUF5QixFQUFFO29CQUN6QixnQkFBZ0IsRUFBRSxpQkFBaUI7aUJBQ3BDO2FBQ0Y7U0FDRixDQUFDO0tBTUg7SUFKQyxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDakMsQ0FBQzs4R0FqQlUseUJBQXlCO2tHQUF6Qix5QkFBeUIsd0ZBSDFCLHNCQUFzQjs7U0FHckIseUJBQXlCOzJGQUF6Qix5QkFBeUI7a0JBTHJDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmd4RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2VkaXRvci5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1ncmFwZXMtd2VicGFnZS1lZGl0b3InLFxyXG4gIHRlbXBsYXRlOiAnPGRpdiBpZD1cImdqc1wiPjwvZGl2PidcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hXZWJwYWdlRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgTmd4RWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSB3ZWJwYWdlQ29uZmlnOiBQYXJ0aWFsPENvbmZpZz4gPSB7XHJcbiAgICBjb250YWluZXI6ICcjZ2pzJyxcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgJ2dyYXBlc2pzLXByZXNldC13ZWJwYWdlJyxcclxuICAgICAgJ2dqcy1ibG9ja3MtYmFzaWMnXHJcbiAgICBdLFxyXG4gICAgcGx1Z2luc09wdHM6IHtcclxuICAgICAgJ2dyYXBlc2pzLXByZXNldC13ZWJwYWdlJzoge1xyXG4gICAgICAgIG1vZGFsVGl0bGVJbXBvcnQ6ICdJbXBvcnQgdGVtcGxhdGUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0dXAodGhpcy53ZWJwYWdlQ29uZmlnKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==