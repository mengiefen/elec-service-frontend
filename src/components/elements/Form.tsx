import { Button, Checkbox, Form, Input, DatePicker, InputNumber } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const numberStyle = {
    width: '100%',
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="date"
        label="Date"
        rules={[{ required: true, message: 'Please select time!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="age"
        label="Age"
        rules={[{ required: true, message: 'Please input your age!' }]}
      >
        <InputNumber style={numberStyle} />
      </Form.Item>

      <Form.Item
        name="favorite"
        label="Favorite"
        rules={[{ required: true, message: 'Please input your favorite!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" shape="round">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
