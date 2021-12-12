import React, { Fragment } from "react";
import { Card, Badge, Button, Modal, message } from "antd";
import { AlignCenterOutlined, DeleteOutlined } from "@ant-design/icons";
import "./Sang.css";
import { useDispatch } from "react-redux";
import { CreateAction } from "../../redux/Type/CreatAction";
import { ADD_TODO, DEL_TODO, UPDATE_TODO } from "../../redux/Type/Type";
import { useState } from "react";

const Sang = (props) => {
  const { Meta } = Card;
  const { List } = props;
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [val, setVal] = useState("");
  const [valInput, setValinput] = useState("");
  const [content, setContent] = useState("");

  const onchangeInput = (e) => {
    setVal(e.target.value);
  };
  const success = () => {
    message.success("Loading finished");
  };
  const add = (e) => {
    let todoItem = {
      id: Math.random().toString(36).slice(2),
      content: val,
    };
    if (!todoItem.content || /^\s*$/.test(todoItem.content)) {
      alert("Nội dung trống :(( ");
      return;
    }
    success();
    dispatch(CreateAction(ADD_TODO, todoItem));
    setVal("");
  };

  const Del = (id) => {
    dispatch(CreateAction(DEL_TODO, id));
  };

  const showModal = (index) => {
    setIsModalVisible(true);
    setContent(index);
    setValinput("");
  };

  const onchageContent = (e) => {
    setValinput(e.target.value);
    let contentChange = content;
    contentChange.content = e.target.value;
    setContent(contentChange);
  };

  const handleOk = (content) => {
    success();
    setIsModalVisible(false);
    dispatch(CreateAction(UPDATE_TODO, content));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: 30,
        }}
      >
        <input
          type="text"
          value={val}
          onChange={onchangeInput}
          placeholder="What's the Plan for Today ?"
          style={{
            width: 310,
            height: 40,
            paddingLeft: 10,
            borderRadius: 20,
            border: "2px solid gray",
          }}
        />
        <Button
          onClick={add}
          type="default"
          shape="circle"
          title="Add Todo"
          style={{
            width: 50,
            height: 50,
            color: "white",
            backgroundColor: "#DB222A",
          }}
        >
          Add
        </Button>
      </div>
      {List?.map((index, item) => {
        return (
          <Badge.Ribbon key={item} text={item + 1} color="#13bebe">
            <Card
              bodyStyle={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                cursor: "default",
              }}
              hoverable
              style={{
                backgroundColor: "rgb(157 244 222)",
                marginBottom: 5,
                borderRadius: 25,
                border: "2px solid cyan",
                outline: "none",
              }}
            >
              <Meta title={index.content} />
              <div
                style={{
                  marginLeft: 50,
                  fontSize: 20,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AlignCenterOutlined
                  onClick={() => {
                    showModal(index);
                  }}
                  style={{ padding: 20, color: "indigo", cursor: "pointer" }}
                />
                <DeleteOutlined
                  onClick={() => Del(index.id)}
                  style={{ color: "red", cursor: "pointer" }}
                />
              </div>
            </Card>
          </Badge.Ribbon>
        );
      })}
      <Modal
        title="Update Todo"
        visible={isModalVisible}
        onOk={() => handleOk(content)}
        onCancel={handleCancel}
      >
        <div>
          <input
            type="text"
            value={valInput}
            placeholder={content.content}
            onChange={onchageContent}
            style={{
              width: "auto",
              paddingLeft: 10,
              borderRadius: 20,
              border: "2px solid gray",
              color: "red",
            }}
          />
        </div>
      </Modal>
    </Fragment>
  );
};

export default Sang;
