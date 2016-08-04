import React from 'react';


import { Table } from 'react-bootstrap';

export default class ApiList extends React.Component {
  
  constructor(){
    super();

    this.propNames = new Array(
      "recognitionAlgorithm",
      "recognitionTime",
      "recognitionUsingTimeout",
      "undoHandler",
      "redoHandler",
      "recognitionHandler",
      "clearCanvasHandler",
      "retrieveGesturesHandler",
      "width",
      "height",
      "style",
      "beautification",
      "color",
      "enabledGestures",
      "doUndo",
      "doRedo",
      "doClearCanvas",
      "doRecognition",
      "doRetrieveGestures"
      );
    this.type = new Array(
      "string",
      "number",
      "bool",
      "func",
      "func",
      "func",
      "func",
      "func",
      "string.isRequired",
      "string.isRequired",
      "any",
      "bool",
      "string",
      "arrayOf(string)",
      "bool",
      "bool",
      "bool",
      "bool",
      "bool"
      );
    this.default = new Array(
      "$p",
      "0",
      "true",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "false",
      "#000000",
      "[\"\"]",
      "",
      "",
      "",
      "",
      ""
      );
    this.description = new Array();
  }

  render(){

    var content = [];

    for(i = 0; i < this.propNames.length; i++){
      content.push(
          <tr>
            <td>{this.propNames[i]}</td>
            <td>{this.type[i]}</td>
            <td>{this.default[i]}</td> 
            <td>{}</td> 
          </tr>
        );
    }

    return(
        <div>
          <Table striped bordered responsive condensed hover>
            <thead>
              <th>Prop Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </thead>
            <tbody>
              {content}
            </tbody>
          </Table>
        </div>
      );
  }

}






