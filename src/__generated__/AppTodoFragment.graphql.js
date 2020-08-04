/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type AppTodoFragment$ref: FragmentReference;
declare export opaque type AppTodoFragment$fragmentType: AppTodoFragment$ref;
export type AppTodoFragment = {|
  +completed: boolean,
  +id: any,
  +title: string,
  +$refType: AppTodoFragment$ref,
|};
export type AppTodoFragment$data = AppTodoFragment;
export type AppTodoFragment$key = {
  +$data?: AppTodoFragment$data,
  +$fragmentRefs: AppTodoFragment$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppTodoFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "completed",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "todo_list",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '76b3f8bc4f93ff8e76b221f23d532489';

module.exports = node;
