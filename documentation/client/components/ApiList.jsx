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
        <td>bordered</td>
        <td>boolean</td>
        <td>false</td>
        <td></td>
      </tr>

      <tr>
        <td>bsClass</td>
        <td>string</td>
        <td>'table'</td>
        <td>Base CSS class and prefix for the component. Generally one should only change bsClass to provide new, non-Bootstrap, CSS styles for a component.

</td>
      </tr>

      <tr>
        <td>condensed</td>
        <td>boolean</td>
        <td>false</td>
        <td></td>
      </tr>

      <tr>
        <td>hover</td>
        <td>boolean</td>
        <td>false</td>
        <td></td>
      </tr>
            <tr>
        <td>responsive</td>
        <td>boolean</td>
        <td>false</td>
        <td></td>
      </tr>
            <tr>
        <td>striped</td>
        <td>boolean</td>
        <td>false</td>
        <td></td>
      </tr>




            </tbody>
        </Table>
          

        </div>
      );
  }

}






