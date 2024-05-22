import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
class NgxEditorComponent {
    constructor() {
        this.template = '';
        this.storagePrefix = 'gjs-';
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: NgxEditorComponent, selector: "ng-component", inputs: { template: "template", storagePrefix: "storagePrefix" }, ngImport: i0, template: '', isInline: true }); }
}
export { NgxEditorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1ncmFwZXNqcy9zcmMvbGliL2VkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUWpELE1BSWEsa0JBQWtCO0lBSi9CO1FBTVcsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGtCQUFhLEdBQUcsTUFBTSxDQUFDO0tBZ0JqQztJQWRDLEtBQUssQ0FBQyxZQUE2QjtRQUNqQyxNQUFNLE1BQU0sR0FBb0I7WUFDOUIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3pCLGNBQWMsRUFBRTtnQkFDZCxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWE7YUFDdkI7U0FDRixDQUFDO1FBRUYsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ25CLEdBQUcsTUFBTTtZQUNULEdBQUcsWUFBWTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDOzhHQWpCVSxrQkFBa0I7a0dBQWxCLGtCQUFrQixzSEFIbkIsRUFBRTs7U0FHRCxrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFKOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjs4QkFJVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL2VkaXRvci5tb2RlbCc7XHJcblxyXG5kZWNsYXJlIHZhciBncmFwZXNqczoge1xyXG4gIGluaXQob3B0aW9uczogYW55KToge31cclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5neEVkaXRvckNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHRlbXBsYXRlID0gJyc7XHJcbiAgQElucHV0KCkgc3RvcmFnZVByZWZpeCA9ICdnanMtJztcclxuXHJcbiAgc2V0dXAoY3VzdG9tQ29uZmlnOiBQYXJ0aWFsPENvbmZpZz4pIHtcclxuICAgIGNvbnN0IGNvbmZpZzogUGFydGlhbDxDb25maWc+ID0ge1xyXG4gICAgICBjb21wb25lbnRzOiB0aGlzLnRlbXBsYXRlLFxyXG4gICAgICBzdG9yYWdlTWFuYWdlcjoge1xyXG4gICAgICAgIGlkOiB0aGlzLnN0b3JhZ2VQcmVmaXhcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZ3JhcGVzanMuaW5pdCh7XHJcbiAgICAgIC4uLmNvbmZpZyxcclxuICAgICAgLi4uY3VzdG9tQ29uZmlnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==