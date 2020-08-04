/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type todo_list_set_input = {|
  completed?: ?boolean,
  id?: ?any,
  title?: ?string,
|};
export type todo_list_pk_columns_input = {|
  id: any
|};
export type AppUpdateTodoMutationVariables = {|
  _set?: ?todo_list_set_input,
  pk_columns: todo_list_pk_columns_input,
|};
export type AppUpdateTodoMutationResponse = {|
  +update_todo_list_by_pk: ?{|
    +completed: boolean,
    +id: any,
    +title: string,
  |}
|};
export type AppUpdateTodoMutation = {|
  variables: AppUpdateTodoMutationVariables,
  response: AppUpdateTodoMutationResponse,
|};
*/


/*
mutation AppUpdateTodoMutation(
  $_set: todo_list_set_input
  $pk_columns: todo_list_pk_columns_input!
) {
  update_todo_list_by_pk(pk_columns: $pk_columns, _set: $_set) {
    completed
    id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_set"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "pk_columns"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_set",
        "variableName": "_set"
      },
      {
        "kind": "Variable",
        "name": "pk_columns",
        "variableName": "pk_columns"
      }
    ],
    "concreteType": "todo_list",
    "kind": "LinkedField",
    "name": "update_todo_list_by_pk",
    "plural": false,
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppUpdateTodoMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppUpdateTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "153204fe33cc70a23b5857e7aa3d9d3c",
    "id": null,
    "metadata": {},
    "name": "AppUpdateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation AppUpdateTodoMutation(\n  $_set: todo_list_set_input\n  $pk_columns: todo_list_pk_columns_input!\n) {\n  update_todo_list_by_pk(pk_columns: $pk_columns, _set: $_set) {\n    completed\n    id\n    title\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fab458c744c00daa2637a6cecd6c76b9';

module.exports = node;
