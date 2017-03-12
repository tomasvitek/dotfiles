import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import { clone } from "ramda";

import * as types from "./constants";

const initialState = {
  isLoading: true,
  isLoaded: false,
  isSaving: false,
  saveFailed: false,
  content: {},
  structure: {}
};

const reducer = (state = initialState, action) => {
  let content, path, value, mapContent;

  switch (action.type) {
    // FETCHING DATA
    case types.FETCH_DATA:
      return {
        ...state,
        isLoaded: false,
        isLoading: true
      };
    case types.RECEIVE_DATA:
      return {
        ...state,
        content: action.content,
        structure: action.structure,
        isLoaded: true,
        isLoading: false
      };
    case types.RECEIVE_NO_DATA:
      return {
        ...state,
        isLoaded: false,
        isLoading: false
      };

    // SAVING CONTENT
    case types.SAVE_CONTENT:
      return {
        ...state,
        isSaving: true,
        saveFailed: false
      };
    case types.CONTENT_SAVED:
      return {
        ...state,
        isSaving: false,
        saveFailed: false
      };
    case types.CONTENT_NOT_SAVED:
      return {
        ...state,
        isSaving: false,
        saveFailed: true
      };

    // EDITING
    // this isn't great, but it works
    case types.EDIT_FIELD:
      // first clone, so that the original state stays unchanged
      content = clone(state.content);
      // split by "/" to get each node
      path = action.path.split("/");
      // the new content of the field
      value = action.content;

      // iteratively run through node by node
      mapContent = content;
      for (let i in path) {
        let node = path[i];
        // it's a repeatable item!
        if (node.includes("~")) {
          node = node.split("~");
          const position = node[1];
          node = node[0];
          // last node, replace value
          if (i == path.length - 1)
            mapContent[node][position] = value;
          else
            // not last node, continue iterating
            mapContent = mapContent[node][position];
        } else {
          // it's a regular non-repetable map
          // last node, replace value
          if (i == path.length - 1)
            mapContent[node] = value;
          else
            // not last node, continue iterating
            mapContent = mapContent[node];
        }
      }

      return {
        ...state,
        content
      };

    // ADDING
    // this isn't great, but it works
    case types.ADD_MAP:
      // first clone, so that the original state stays unchanged
      content = clone(state.content);
      // split by "/" to get each node
      path = action.path.split("/");

      // iteratively run through node by node
      // `mapContent` iterates through nodes,
      // but it's only (re)assigning references,
      // so final change will also change `content`
      mapContent = content;
      for (let i in path) {
        let node = path[i];
        // it's a repeatable item!
        if (node.includes("~")) {
          node = node.split("~");
          const position = node[1];
          node = node[0];
          // not last node, continue iterating
          mapContent = mapContent[node][position];
        } else {
          // it's a regular non-repetable map
          // last node, add a new map to it
          if (i == path.length - 1) {
            mapContent[node].push(action.content);
          }
          // not last node, continue iterating
          mapContent = mapContent[node];
        }
      }

      return {
        ...state,
        content
      };

    // DELETING
    // this isn't great, but it works
    case types.DELETE_MAP:
      // first clone, so that the original state stays unchanged
      content = clone(state.content);
      // split by "/" to get each node
      path = action.path.split("/");

      // iteratively run through node by node
      // `mapContent` iterates through nodes,
      // but it's only (re)assigning references,
      // so final change will also change `content`
      mapContent = content;
      for (let i in path) {
        let node = path[i];
        // it's a repeatable item!
        if (node.includes("~")) {
          node = node.split("~");
          const position = node[1];
          node = node[0];
          // last node, remove it!
          if (i == path.length - 1)
            mapContent[node].splice(position, 1);
          else
            // not last node, continue iterating
            mapContent = mapContent[node][position];
        } else {
          // it's a regular non-repetable map
          // not last node, continue iterating
          mapContent = mapContent[node];
        }
      }

      return {
        ...state,
        content
      };

    default:
      return state;
  }
};

export const initStore = initialState => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
};
