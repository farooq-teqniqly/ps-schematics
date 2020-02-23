import { Rule, SchematicContext, Tree, apply, url, mergeWith, MergeStrategy, move, template, filter } from '@angular-devkit/schematics';
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
      }),
      specFilter(options)]);

    const rule = mergeWith(newTree, MergeStrategy.Default);
    return rule(tree, context);
  };
}

function specFilter(options: any): Rule {
  if (options.spec === 'false') {
    return filter(path => {
      return !path.match(/\.spec\.ts$/) && !path.match(/test\.ts$/);
    });
  }

  return filter(path => !path.match(/test\.ts$/));
}
