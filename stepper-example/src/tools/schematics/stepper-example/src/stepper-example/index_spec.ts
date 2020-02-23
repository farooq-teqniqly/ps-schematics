import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';


const collectionPath = path.join(__dirname, '../collection.json');


describe('stepper-example', () => {
  it('works', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner.runSchematicAsync('stepper-example', {name: 'test' }, Tree.empty()).toPromise();

    expect(tree.files).toEqual([
      '/test/stepper-overview-example.component.html',
      '/test/stepper-overview-example.component.scss',
      '/test/stepper-overview-example.component.spec.ts',
      '/test/stepper-overview-example.component.ts'
    ]);
  });
});