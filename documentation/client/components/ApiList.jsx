import React from 'react';


import { Table } from 'react-bootstrap';

export default class ApiList extends React.Component {
  
  render(){
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
              <tr>
                <td>recognitionAlgorithm</td>
                <td>string</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>recognitionTime</td>
                <td>number</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>recognitionListener</td>
                <td>function</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>undoListener</td>
                <td>function</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>redoListener</td>
                <td>function</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>clearCanvasListener</td>
                <td>function</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>width</td>
                <td>number</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>height</td>
                <td>number</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>beautification</td>
                <td>boolean</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>color</td>
                <td>string</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>disabledGestures</td>
                <td>string[]</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>enabledGestures</td>
                <td>string[]</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
        </Table>
          

        </div>
      );
  }

}






