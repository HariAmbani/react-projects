import { Button, Form, Input, Select } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";

function AdminPage(){

    const [selected, setSelected] = useState("")

    const handleChange = (value) => {
        console.log("value is : ",value)
        setSelected(value)
        console.log("selected is ",selected)
    }

    const handleSubmitassign = (values) => {
        console.log(values)
        alert(`Assignment Title : ${values.assignmentTitle} Assignment Description : ${values.assignmentDescription} Assignment Due Date : ${values.assignmentDueDate}`)
        // write logic to send this data to backend and insert in database
    }

    const handleSubmitcourse = (values) => {
        console.log(values)
        alert(`Course Title : ${values.courseTitle} Course Description : ${values.courseDescription} Course Start Date : ${values.courseStartDate} Course End Date : ${values.courseEndDate}`)
        // write logic to send this data to backend and insert in database
    }

    const courseForm = <Form onFinish={handleSubmitcourse}>
        <Form.Item label={<h2>Course Title</h2>} name="courseTitle">
        <Input placeholder="please enter your course title"/>
        </Form.Item>
        <Form.Item label="  Course Description" name="courseDescription">
            <Input placeholder="please enter your course description"/>
        </Form.Item>
        <Form.Item label="  course start date : " name="courseStartDate">
            <Input type="date" placeholder="please enter your course start date"/>
        </Form.Item>
        <Form.Item label="  course end date : " name="courseEndDate">
            <Input type="date" placeholder="please enter course end date"/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">Create Course</Button>
        </Form.Item>
    </Form>;

    const assignForm = <Form onFinish={handleSubmitassign}>
        <Form.Item label="  Assignment Title : " name="assignmentTitle">
            <Input placeholder="please enter your Assignment title"/>
        </Form.Item>
        <Form.Item label="  Assignment Description : " name="assignmentDescription">
            <Input placeholder="please enter your Assignment description"/>
        </Form.Item>
        <Form.Item label="Assignment Due Date : " name="assignmentDueDate">
            <Input type="date" placeholder="please enter your Assignment due date"/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">Create Assignment</Button>
        </Form.Item>
    </Form>;


    return(
        <div style={{ width:"35%",  
                      marginLeft:"50px", 
                      backgroundColor:"white", 
                      paddingLeft:"50px", 
                      paddingRight:"50px",
                      marginTop:"30px",
                      marginDown:"50px",
                      paddingTop:"1px",
                      paddingBottom:"50px",
                       }}>

            <h1>Admin Page</h1>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <h3>Select type : </h3>
                <Select style={{minWidth:"150px", marginBottom:"10px"}} onChange={handleChange} value={selected}>
                    <Select.Option value="1">Course</Select.Option>
                    <Select.Option value="2">Assignment</Select.Option>
                </Select>
            </div>
            {selected === "1" ? courseForm : selected === "2" ? assignForm : <h3>Please select any option to get the form</h3>}
        </div>
    )
}
export default AdminPage;

/*
normal form label : <Form.Item label= "  course start date : ">
bolded form label : <Form.Item label= {<h2>Course Title</h2>}>
*/