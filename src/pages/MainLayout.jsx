import { Avatar, Image, Layout, Menu } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import logo from "../assets/samsung-logo-1993.jpg"
import { UserOutlined, PieChartOutlined, FundProjectionScreenOutlined, AimOutlined } from '@ant-design/icons';
import { Link, Route, Routes } from "react-router-dom";
import Antform from "../components/form";

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
                        <Menu.Item><PieChartOutlined />
                                    <Link to="dashboard"> Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item><FundProjectionScreenOutlined/>
                                    <Link to="courses"> Courses</Link>
                        </Menu.Item>
                        <Menu.Item><AimOutlined/>
                                    <Link to="/assignments"> Assignments</Link>
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
                        <Route path="/" element={<Antform/>} />
                        <Route path="dashboard" element={<p>    dashboard</p>} />
                        <Route path="courses" element={<p>     courses</p>} />
                        <Route path="assignments" element={<p>    assignments</p>} />
                    </Routes>
                </Content>
            </Layout>
            <Footer style={{textAlign:"center", width:"80%", left:"200px", position:"absolute", bottom:"0px"}}>Footer</Footer>
        </Layout>
    )
}
export default MainLayout