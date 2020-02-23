import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function stepperExample(_: any): Rule {
  return (tree: Tree, _: SchematicContext) => {
    return tree;
  };
}
