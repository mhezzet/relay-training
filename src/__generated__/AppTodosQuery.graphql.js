/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AppTodoFragment$ref = any;
export type AppTodosQueryVariables = {||};
export type AppTodosQueryResponse = {|
  +todo_list: $ReadOnlyArray<{|
    +$fragmentRefs: AppTodoFragment$ref
  |}>
|};
export type AppTodosQuery = {|
  variables: AppTodosQueryVariables,
  response: AppTodosQueryResponse,
|};
*/


/*
query AppTodosQuery {
  todo_list {
    ...AppTodoFragment
  }
}

fragment AppTodoFragment on todo_list {
  completed
  id
  title
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppTodosQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "todo_list",
        "kind": "LinkedField",
        "name": "todo_list",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AppTodoFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppTodosQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "todo_list",
        "kind": "LinkedField",
        "name": "todo_list",
        "plural": true,
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
    ]
  },
  "params": {
    "cacheID": "130a01a50b680c6857fb8161ec145e6f",
    "id": null,
    "metadata": {},
    "name": "AppTodosQuery",
    "operationKind": "query",
    "text": "query AppTodosQuery {\n  todo_list {\n    ...AppTodoFragment\n  }\n}\n\nfragment AppTodoFragment on todo_list {\n  completed\n  id\n  title\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '7bb0c4f862e9613c70c73316d46ec194';

module.exports = node;
