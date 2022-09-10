import React, { useState } from "react";
import { Row, Col, Input, Form, Drawer, message } from "antd";
import styled from "styled-components";

import { Title } from "../Dashboard/SectionTitle";
import ActionButtons from "../Personas/ActionButtons";
import AppCheckbox from "../AppCheckbox";

import { db } from "../../config/firebase-config";

const { TextArea } = Input;

const init = {
  actions: [
    {
      label: "Connect with Amy",
      checked: true,
    },
    {
      label: "Request Data from Finance Dept",
      checked: false,
    },
    {
      label: "Send sheet to John",
      checked: true,
    },
    {
      label: "Finalize presentation",
      checked: false,
    },
  ],
};

const AddItem = ({ show, setShow, product, user, type }) => {
  const [data, setData] = useState({ ...init });
  const [form] = Form.useForm();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFinish = async () => {
    const data = {
      title,
      description,
      type,
      product_id: product.id,
      user: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL || "https://joeschmoe.io/api/v1/random",
      },
    };

    db.collection("Retrospectives")
      .add(data)
      .then((docRef) => {
        message.success("Retrospective submitted successfully");
        setShow(false);
        setData({ ...init });
        form.resetFields();
      })
      .catch((error) => {
        message.error("Error adding Retrospective");
      });
  };

  const handleChange = (e, field) => {
    setData({
      ...data,
      [field]: e.target.value,
    });
  };

  const onChangeAct = (i) => {
    const newData = { ...data };
    newData.actions[i].checked = !newData.actions[i].checked;

    setData(newData);
  };

  const onCreateAct = (i) => {
    const newData = { ...data };

    newData.actions.push({
      label: "",
      checked: true,
      isNew: true,
    });

    setData(newData);
  };

  const onEditAct = (e, i) => {
    const newData = { ...data };
    newData.actions[i].label = e.target.value;
    setData(newData);
  };

  const onAddAct = (i) => {
    const newData = { ...data };
    newData.actions[i].isNew = false;
    setData(newData);
  };

  const handleKeyDown = (event, i, label) => {
    if (event.key === "Enter" && label.trim()) {
      onAddAct(i);
    }
  };

  return (
    <Drawer
      visible={show}
      destroyOnClose={true}
      closable={false}
      placement={"bottom"}
      headerStyle={{ background: "#F5F5F5" }}
      title={
        <Row>
          <Col span={22}>
            <h1 className="font-[600] font[#262626] font-[20px] leading-[28px]">
              Retrospective Item
            </h1>
          </Col>
          <Col span={2}>
            <ActionButtons
              onCancel={() => setShow(false)}
              onSubmit={handleFinish}
            />
          </Col>
        </Row>
      }
    >
      <Form form={form} name="add_retro">
        <Row gutter={[24, 24]}>
          <Col span={13}>
            <Title className="mb-[8px]">Title</Title>

            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input a subject",
                },
              ]}
            >
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Item>

            <Title className="mb-[8px] mt-[24px]">Proposed Actions</Title>

            <div>
              {data.actions.map((a, i) =>
                a.isNew ? (
                  <Input
                    className="my-[8px]"
                    onKeyPress={(e) => handleKeyDown(e, i, a.label)}
                    onChange={(e) => onEditAct(e, i)}
                    value={a.label}
                  />
                ) : (
                  <p key={i}>
                    <AppCheckbox
                      checked={a.checked}
                      onChange={() => onChangeAct(i)}
                    >
                      {a.label}
                    </AppCheckbox>
                  </p>
                )
              )}

              <p>
                <AppCheckbox checked={false} onChange={onCreateAct}>
                  <span className="text-[#BFBFBF]">Add New</span>
                </AppCheckbox>
              </p>
            </div>
          </Col>
          <Col span={11}>
            <Title className="mb-[8px]">Description</Title>

            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input a description",
                },
              ]}
            >
              <TextArea
                rows={8}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default AddItem;
