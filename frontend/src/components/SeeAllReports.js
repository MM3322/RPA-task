import React, { useEffect, useState } from "react";
import axios from "axios";
import AxiosInstance from "./AxiosInstance";
import { Table } from "antd"; 

export default function SeeAllReports() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await AxiosInstance.get(
        "/reports",
      );
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
        title: "temperature",
        dataIndex: "temperature",
        width: 150,
        sortDirections: ['descend', 'ascend'],
        sorter: {
          compare: (a, b) => a.temperature - b.temperature,
          multiple: 3,
        },
    },
    {
        title: "unit",
        dataIndex: "unit",
        width: 150
    },
    {
        title: "city",
        dataIndex: "city",
        width: 150,
        sortDirections: ['descend', 'ascend'],
        sorter: (a, b) => { return a.city.localeCompare(b.city)},
    },
    {
        title: "date",
        dataIndex: "date",
        width: 150
    },
    {
        title: "edit",
        width: 150,
        dataIndex: "id",
        render: (_,record) => (
            <a href={'/EditReport/'+record.id}>Edit</a>
           ),

    }
    
    
    
  ];

  return( 
    <div>
        <Table
        dataSource={data}
        columns={columns}
        pagination={{
            pageSize: 15,
            position: ["bottomCenter"],
            }}
        >
        
        </Table>
    </div>
  )
}
