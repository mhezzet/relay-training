/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type todo_list_insert_input = {|
  completed?: ?boolean,
  id?: ?any,
  title?: ?string,
|};
export type AppAddTodoMutationVariables = {|
  input: todo_list_insert_input
|};
export type AppAddTodoMutationResponse = {|
  +insert_todo_list_one: ?{|
    +completed: boolean,
    +id: any,
    +title: string,
  |}
|};
export type AppAddTodoMutation = {|
  variables: AppAddTodoMutationVariables,
  response: AppAddTodoMutationResponse,
|};
*/


/*
mutation AppAddTodoMutation(
  $input: todo_list_insert_input!
) {
  insert_todo_list_one(object: $input) {
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
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "object",
        "variableName": "input"
      }
    ],
    "concreteType": "todo_list",
    "kind": "LinkedField",
    "name": "insert_todo_list_one",
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
    "name": "AppAddTodoMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppAddTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "511895ccf547c68b1cbb28e1890bf700",
    "id": null,
    "metadata": {},
    "name": "AppAddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation AppAddTodoMutation(\n  $input: todo_list_insert_input!\n) {\n  insert_todo_list_one(object: $input) {\n    completed\n    id\n    title\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd2fe796d570fbd8ea129b510f65bfc7d';

module.exports = node;
