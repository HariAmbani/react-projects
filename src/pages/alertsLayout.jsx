import { Avatar, Card, Col, Image, Layout, Menu, Row } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import logo from "../assets/samsung-logo-1993.jpg";
import { AlertOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

function alertsLayout() {
    return (
        <Layout style={{ height: "100vh" }}>
            <Header style={{ backgroundColor: "white", display: "flex", justifyContent: "space-between" }}>
                <Image
                    height="75px"
                    src={logo}
                />
                <Avatar size={50} icon={<AlertOutlined />} style={{ margin: "8px" }} />
            </Header>
            <Layout>
                <Sider collapsible={true}>
                    <Menu theme="dark">
                        <Menu.Item icon={<AlertOutlined />}>
                            <Link to="/alerts"> Alerts</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content style={{ padding: "20px" }}>
                    <Row gutter={[16, 16]}>
                        {Array.from({ length: 9 }).map((_, index) => (
                            <Col key={index} xs={24} sm={12} md={8}>
                                <Card title={`Card ${index + 1}`} bordered={true}>
                                    Content of card {index + 1}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Content>
            </Layout>
            <Footer style={{ textAlign: "center", width: "100%", position: "absolute", bottom: "0px" }}>
                Footer
            </Footer>
        </Layout>
    );
}

export default alertsLayout
