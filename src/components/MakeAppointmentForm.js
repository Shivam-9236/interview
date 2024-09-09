import React from "react";
import { Form, Input, Button, Select } from "antd";
import "./AppointmentForm.css";

const { Option } = Select;

const MakeAppointmentForm = () => {
  const [form] = Form.useForm();
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
      <h3>Contact Us</h3>
      <h1>Make an Appointment</h1>
      <Form layout="vertical" onFinish={handleSubmit} className="gridd">
        <Form.Item
          label="Full Name"
          name="fullname"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Department"
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

        <Form.Item label="Message" name="message" className="bottom">
          <Input.TextArea placeholder="Message" rows={4} />
        </Form.Item>

        <Button type="primary" htmlType="submit" className="bottom">
          Book Appointment
        </Button>
      </Form>
    </div>
  );
};
export default MakeAppointmentForm;
