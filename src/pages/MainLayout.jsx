import { Avatar, Image, Layout, Menu } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import logo from "../assets/samsung-logo-1993.jpg"
import { UserOutlined, PieChartOutlined, FundProjectionScreenOutlined, AimOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Link, Route, Routes } from "react-router-dom";
import Antform from "../components/form";
import Counter from "../components/Counter";
import AdminPage from "./adminpage";
import { ErrorBoundary } from 'react-error-boundary';


const FallbackComponentfunc = ({ error }) => {
    return(
        <div>
            <h1>Counter Maximum Value is reach </h1>
            <p>{error.message}</p>
        </div>
    )
}

function MainLayout(){
    return(
        <Layout style={{height:"100vh"}}>
            <Header style={{backgroundColor:"white",display:"flex",justifyContent:"space-between"}}>
                <Image height="75px"
                    src={logo}
                />
                <Avatar size={50} icon={<UserOutlined />} style={{margin:"8px"}} />
            </Header>
            <Layout>
                <Sider collapsible={true}>
                    <Menu theme="dark">
                        <Menu.Item><UserOutlined />
                                    <Link to="/"> Login</Link>
                        </Menu.Item>
                        <Menu.Item><UserOutlined/>
                                    <Link to="/admin"> Admin</Link>
                        </Menu.Item>
                        <Menu.Item><PieChartOutlined />
                                    <Link to="/dashboard"> Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item><FundProjectionScreenOutlined/>
                                    <Link to="/courses"> Courses</Link>
                        </Menu.Item>
                        <Menu.Item><AimOutlined/>
                                    <Link to="/assignments"> Assignments</Link>
                        </Menu.Item>
                        <Menu.Item><PlusSquareOutlined/>
                                    <Link to="/counter"> Counter</Link>
                        </Menu.Item>


                        {/* can be written using <a href> ankar tag of html like below
                        <Menu.Item><UserOutlined /><a href="/"></a> Login</Menu.Item>
                        <Menu.Item><PieChartOutlined /><a href="/dashboard"></a> Dashboard</Menu.Item>
                        <Menu.Item><FundProjectionScreenOutlined/><a href="/courses"></a> Courses</Menu.Item>
                        <Menu.Item><AimOutlined/><a href="/assignments"></a> Assignments</Menu.Item> */}
                    </Menu>
                </Sider>
                <Content>
                    <Routes>
                        <Route path="/" element={<div style={{marginTop:"50px"}}><Antform/></div>} />
                        <Route path="/admin" element={<AdminPage></AdminPage>} />
                        <Route path="dashboard" element={<p>    dashboard</p>} />
                        <Route path="courses" element={<p>     courses</p>} />
                        <Route path="assignments" element={<p>    assignments</p>} />
                        <Route path="counter" element={
                            <ErrorBoundary FallbackComponent={FallbackComponentfunc}>
                                 <Counter/>
                            </ErrorBoundary>   
                        } />
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}
//<Footer style={{textAlign:"center", width:"80%", left:"200px", position:"absolute", bottom:"-10px"}}></Footer>
export default MainLayout
