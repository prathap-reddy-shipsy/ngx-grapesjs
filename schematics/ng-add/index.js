"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ngAdd = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const utility_1 = require("./utility");
const ngAdd = (options) => () => __awaiter(void 0, void 0, void 0, function* () {
    const grapesJsAssetPaths = ['node_modules/grapesjs/dist/grapes.min.js'];
    if (options.editorType === 'webpageEditor') {
        grapesJsAssetPaths.push('node_modules/grapesjs-preset-webpage/dist/index.js', 'node_modules/grapesjs-blocks-basic/dist/index.js');
    }
    else {
        grapesJsAssetPaths.push('node_modules/grapesjs-preset-newsletter/dist/index.js');
    }
    return (0, schematics_1.chain)([
        (0, utility_1.addGrapesJsCssToTarget)(options.project, ['node_modules/grapesjs/dist/css/grapes.min.css'], 'styles'),
        (0, utility_1.addGrapesJsCssToTarget)(options.project, grapesJsAssetPaths, 'scripts'),
        (0, utility_1.addDependencies)()
    ]);
});
exports.ngAdd = ngAdd;
//# sourceMappingURL=index.js.map