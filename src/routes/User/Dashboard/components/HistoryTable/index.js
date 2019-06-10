import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';

const columns = [
  {
    title: '날짜',
    dataIndex: 'date',
    key: 'date,'
  },
  {
    title: '턱대칭률',
    dataIndex: 'jaw',
    key: 'jaw',
  },
  {
    title: '코대칭률',
    dataIndex: 'nose',
    key: 'nose',
  },
  {
    title: '입술대칭률',
    dataIndex: 'lips',
    key: 'lips',
  },
];

export default function HistoryTable({ dataSource, loading }) {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      locale={{ emptyText: '검사하기를 눌러서 확인해보세요.' }}
    />
  );
}
