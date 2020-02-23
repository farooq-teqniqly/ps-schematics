import { Rule, SchematicContext, Tree, apply, url, mergeWith, MergeStrategy, move, template } from '@angular-devkit/schematics';
import { normalize, strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function stepperExample(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const normalizedFolderPath = normalize(`${strings.dasherize(options.path)}/${strings.dasherize(options.name)}`);
    const files = url('./files');

    const newTree = apply(
      files,
      [move(normalizedFolderPath),
      template({
        ...strings,
        ...options
      })]);

    const rule = mergeWith(newTree, MergeStrategy.Default);
    return rule(tree, context);
  };
}
