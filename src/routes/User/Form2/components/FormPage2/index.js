import React, { Fragement } from 'react';
import styled from 'styled-components';
import { Upload, Icon, message } from 'antd';
import axios from 'axios';
import {Table} from 'antd';
import {tableData} from './data.json';
import firebase from 'firebase';
import { array } from 'prop-types';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import $ from 'jquery'


var firebaseConfig = ({
  apiKey: "AIzaSyCCU2VeOmng3BbpGcDzX79D9lTMmsRs9Gw",
  authDomain: "lucky-aed54.firebaseapp.com",
  databaseURL: "https://lucky-aed54.firebaseio.com",
  projectId: "lucky-aed54",
  storageBucket: "lucky-aed54.appspot.com",
  messagingSenderId: "836535631836"
});
// var firebaseConfig = ({
//   apiKey: "AIzaSyCtM6lcEnklYW3CqJopScxTHlCYmGi1SgA",
//   authDomain: "lucky-b4c12.firebaseapp.com",
//   databaseURL: "https://lucky-b4c12.firebaseio.com",
//   projectId: "lucky-b4c12",
//   storageBucket: "lucky-b4c12.appspot.com",
//   messagingSenderId: "904413000870",
// });


function changeObj(obj){
  for(var i = 0; i <obj.length; i++)
  {
    obj[i].Ranking = i+1;
  }
}

var otherApp = firebase.initializeApp(firebaseConfig, 'other');


export default class DashboardPage extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {data:[]}
  }

  componentDidMount() {
      const ref = otherApp.database().ref('RANK');
      console.log("ref")
      console.log(ref)
      ref.on("value", snapshot => {
        this.setState({data:snapshot.val()});
      });
  }

  render() {
    const tableColumns = [
      {
        title: 'Ranking',
        dataIndex: 'Ranking',
        key: 'Ranking',
      },
      {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email',   
      },
      {
        title: 'Average',
        dataIndex: 'Average',
        key: 'Average',
      },
    ]

    var array = $.map(this.state.data, function(value, index)
    {
      return [value];
    });
    console.log("array")
    console.log(array)

    array.sort(function(a, b){
      return a.Average - b.Average;
    });

    console.log("Sortedarray")
    console.log(array)



    // var sortedData = Object.assign([], array).sort((a, b) => a.Average > b.Average);
    // console.log("sortedData")
    // console.log(sortedData)
    changeObj(array);

    return (
      <div className="card-body">
        
        {console.log("bbb")}
        {console.log(this.state.data)}
        {console.log("array")}
        {console.log(array)}
        {console.log(Object.keys(this.state.data))}
        
        <Table
          className="utils__scrollTable"
          scroll={{ x: '100%' }}
          columns={tableColumns}
          dataSource={array}
          pagination={false}
        />  
      </div>
    );
}
}