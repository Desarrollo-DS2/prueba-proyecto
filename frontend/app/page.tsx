'use client'

import { Button, Input, Table } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";

import { actionCreators as tasksActions, selector as tasksSelector } from "./_feature/tasks/tasks";

export default function Home() {
  const [payload, setPayload] = useState({title: '', description: 'trt'});

  const handleInputChange = (e: any) => {
    setPayload({...payload, [e.target.name]: e.target.value});
  }

  const handleCreateTask = () => {
    dispatch(tasksActions.createTask(payload));
  }

  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => tasksSelector(state));

  useEffect(() => {
    dispatch(tasksActions.listTasks());
  }, []); 

  console.log(tasks.tasks);

  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hola
      <Table dataSource={tasks.tasks} columns={columns} loading={tasks.loading} />;
      <Input placeholder="Basic usage" value={payload.title} onChange={handleInputChange} name='title'/>
      <Button type="primary" onClick={handleCreateTask}>Primary Button</Button>
    </main>
  );
}
