import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import "./AppointmentForm.css";

const { Option } = Select;

const BookAppointmentForm = () => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const handleSubmit = (values) => {
    if (values.email.includes("@gmail.com")) {
      console.log(`${values.email}`);
    } else {
      //   console.log("invalid email");
      alert("invalid email");
    }
  };
  return (
    <div className="form-card">
      <h3>Book Appointment</h3>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Full Name"
          name="fullname"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item
          label="Email address"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label="Please Select"
          name="department"
          rules={[{ required: true, message: "Please select a department!" }]}
        >
          <Select placeholder="Please Select">
            <Option value="department1">Department 1</Option>
            <Option value="department2">Department 2</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Time"
          name="time"
          rules={[{ required: true, message: "Please select a time!" }]}
        >
          <Select placeholder="4:00 Available">
            <Option value="4:00">4:00</Option>
            <Option value="5:00">5:00</Option>
          </Select>
        </Form.Item>

        <Button type="primary" htmlType="submit" onSubmit={handleSubmit}>
          Book Appointment
        </Button>
      </Form>
    </div>
  );
};

export default BookAppointmentForm;
