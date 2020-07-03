
import {Link} from 'react-router-dom'
import { DeleteOutlined } from '@ant-design/icons';
import { Card, notification, Popconfirm, Spin, Table } from 'antd';
import React, { Component } from 'react';
import {
  FirebaseAppProvider,
  SuspenseWithPerf,
  useFirestore,
  useFirestoreCollection,
} from 'reactfire';
import moment from 'moment';

export const formatDate = (text, type = 'hh:mm:ss DD/MM/YYYY') => {
  return text ? moment.unix(text).format(type) : moment.unix().format(type);
};

// Config firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAWTCk97SDQiIKN5Q9fSV-BjyErwnLbN4Q',
  authDomain: 'test-ab67b.firebaseapp.com',
  databaseURL: 'https://test-ab67b.firebaseio.com',
  projectId: 'test-ab67b',
  storageBucket: 'test-ab67b.appspot.com',
  messagingSenderId: '785307903347',
  appId: '1:785307903347:web:353228ff2576d9395bd106',
  measurementId: 'G-7YQKZ7JR1J',
};


// Tao table
function Data() {
  const dataCollection = useFirestore().collection('Data');

  // Get data
  const data = useFirestoreCollection(dataCollection).docs.map((e) => ({
    id: e.id,
    ...e.data(),
  }));
  const columns = [
    {
      title: 'Car Id',
      dataIndex: 'CardID',
      key: 'CardID',
    },
    {
      title: 'Car Plate',
      dataIndex: 'Car_plate',
      key: 'Car_plate',
    },
    {
      title: 'Time In',
      dataIndex: 'Time_In',
      key: 'Time_In',
      render: (row, data) => <span> {formatDate(row?.seconds)}</span>,
    },
    {
      title: 'Time Out',
      dataIndex: 'Time_Out',
      key: 'Time_Out',
      render: (row, data) => <span> {formatDate(row?.seconds)}</span>,
    },
    {
      title: 'Delete',
      dataIndex: 'id',
      key: 'id',
      render: (row) => (
        <Popconfirm
          title="Are you sure delete this item?"
          onConfirm={async () => {
            try {
              // delete
              await dataCollection.doc(row).delete();
              notification.success({
                message: 'Delete success',
              });
            } catch {
              notification.error({
                message: 'Some thing went wrong',
              });
            }
          }}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined style={{ cursor: 'pointer' }} />
        </Popconfirm>
      ),
    },
  ];
  return (
    <Card title="Danh sách dữ liệu" style={{ margin: 20 }}>
      <Table dataSource={data} columns={columns} />
    </Card>
  );
}

function Admin() {
  return (
    // Lien ket firebase
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <SuspenseWithPerf fallback={<Spin />}>
        <h1
          style={{
            textAlign: 'center',
            marginTop: 10,
            textTransform: 'uppercase',
          }}
        >
          Hệ thống gửi xe tự động tại nơi công cộng
        </h1>
        
        <Data />
      </SuspenseWithPerf>
      <div>
            <Link to="/" style={{
                position: 'relative',
                left: 1400,
                background: '#4CAF50',
                color: 'white',
                padding: 15,
                margin: 8,
                border: 'none',
                cursor: 'pointer',
                width: 100
            }}>Logout</Link>
        </div>
    </FirebaseAppProvider>
  );
}

export default Admin;

