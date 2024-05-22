"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDependencies = exports.addGrapesJsCssToTarget = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const utility_1 = require("@schematics/angular/utility");
function getProjectTargetOptions(project, buildTarget) {
    var _a, _b;
    const options = (_b = (_a = project.targets) === null || _a === void 0 ? void 0 : _a.get(buildTarget)) === null || _b === void 0 ? void 0 : _b.options;
    if (!options) {
        throw new schematics_1.SchematicsException(`Cannot determine project target configuration for: ${buildTarget}.`);
    }
    return options;
}
function addGrapesJsCssToTarget(projectName, assetPaths, targetAsset) {
    return (0, utility_1.updateWorkspace)(workspace => {
        const project = workspace.projects.get(projectName);
        if (!project) {
            throw new schematics_1.SchematicsException('The specified Angular project is not defined in this workspace.');
        }
        const targetOptions = getProjectTargetOptions(project, 'build');
        // This gets the current 'style' or 'scripts' options in loopable array
        const formattedExistingAssets = targetOptions[targetAsset];
        // In case of 'styles' or 'scripts' option has not been set yet in our project we need to set it
        if (!formattedExistingAssets) {
            targetOptions[targetAsset] = assetPaths;
        }
        else {
            const existingAssets = formattedExistingAssets.map(s => (typeof s === 'string' ? s : s.input));
            // Check if asset already exists and add it if it does not
            assetPaths.forEach(assetPath => {
                if (!existingAssets.includes(assetPath)) {
                    formattedExistingAssets.push(assetPath);
                }
            });
        }
    });
}
exports.addGrapesJsCssToTarget = addGrapesJsCssToTarget;
function addDependencies() {
    return (tree, context) => {
        context.addTask(new tasks_1.NodePackageInstallTask());
        return tree;
    };
}
exports.addDependencies = addDependencies;
//# sourceMappingURL=utility.js.map