/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppDeleteTodoMutationVariables = {|
  id: any
|};
export type AppDeleteTodoMutationResponse = {|
  +delete_todo_list_by_pk: ?{|
    +completed: boolean,
    +id: any,
    +title: string,
  |}
|};
export type AppDeleteTodoMutation = {|
  variables: AppDeleteTodoMutationVariables,
  response: AppDeleteTodoMutationResponse,
|};
*/


/*
mutation AppDeleteTodoMutation(
  $id: uuid!
) {
  delete_todo_list_by_pk(id: $id) {
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
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "todo_list",
    "kind": "LinkedField",
    "name": "delete_todo_list_by_pk",
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
    "name": "AppDeleteTodoMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppDeleteTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7168bceb8a9ece92e8538ac56074403e",
    "id": null,
    "metadata": {},
    "name": "AppDeleteTodoMutation",
    "operationKind": "mutation",
    "text": "mutation AppDeleteTodoMutation(\n  $id: uuid!\n) {\n  delete_todo_list_by_pk(id: $id) {\n    completed\n    id\n    title\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4e24c04a8bcd917b20e690072cf50016';

module.exports = node;
