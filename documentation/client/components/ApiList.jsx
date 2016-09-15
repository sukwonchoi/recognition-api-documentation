import React from 'react';


import { Table } from 'react-bootstrap';

export default class ApiList extends React.Component {
  
  constructor(){
    super();

    this.propNames = new Array(
      "recognitionAlgorithm",
      "recognitionTimeoutTime",
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
    this.description = new Array(
      "Choose between $p & $n",
      "Choose the recognition time in milliseconds",
      "Choose whether recognition will be done using timeout",
      "The callback method when undo is invoked",
      "The callback method when redo is invoked",
      "The callback method for when recognize is invoked",
      "The callback method when clear canvas is invoked",
      "",
      "Set width for the canvas",
      "Set height for the canvas",
      "Set CSS style for the canvas",
      "Choose whether beautification will be enabled",
      "Choose which color to draw with",
      "Choose which set of gestures to enable",
      "Trigger undo",
      "Trigger redo",
      "Trigger clear canvas",
      "Trigger recognition",
      ""
      );
  }

  render(){

    var content = [];

    for(i = 0; i < this.propNames.length; i++){
      content.push(
          <tr>
            <td>{this.propNames[i]}</td>
            <td>{this.type[i]}</td>
            <td>{this.default[i]}</td> 
            <td>{this.description[i]}</td> 
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






