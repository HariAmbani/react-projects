import { Table } from "antd";

function AssignemntTable()
{
    const columns=[
        {
            key: 'sno',
            title: 'S.No',
            dataIndex: 'sno'
        },

        {
            key: "assignmentTitle",
            title: "Assignment Title",
            dataIndex: "assignmentTitle"
        },
        
        {
            key: "assignmentDescription",
            title: "Assignment Description",
            dataIndex: "assignmentDescription"
        },

        {
            key: "assignmentDueDate",
            title: "Assignment Due Date",
            dataIndex: "assignmentDueDate"
        },

        {
            key: 'actions',
            title: 'Actions',
            dataIndex: 'actions'
        }
    ]

    const data=[
        {
        sno: 1,
        assignmentTitle: 'Assignment 1',
        assignmentDescription: 'This is the first assignment',
        assignmentDueDate: '2022-12-12',
        },

        {
            sno: 2,
            assignmentTitle: 'Assignment 2',
            assignmentDescription: 'This is the second assignment',
            assignmentDueDate: '2023-1-12',
        },

        {
            sno: 3,
            assignmentTitle: 'Assignment 1',
            assignmentDescription: 'This is the thrid assignment',
            assignmentDueDate: '2023-2-12',
        },
    ]

    return(<Table columns={columns} dataSource={data}></Table>)
}
export default AssignemntTable;

//style to table can be added like this also
//return(<Table style={{marginTop:"30px"}} columns={columns} dataSource={data}></Table>)