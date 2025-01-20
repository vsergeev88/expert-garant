import { Flex, Layout, Typography } from 'antd';
import styles from './BaseLayout.module.css';

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { Header, Footer, Content } = Layout;
  const { Title } = Typography;

  return (
    <Flex gap="middle" wrap>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <Typography>
            <Title className={styles.title}>Expert-Garant Test app</Title>
          </Typography>
        </Header>
        <Content className={styles.content}>{children}</Content>
        <Footer className={styles.footer}>Created by Valentin Sergeev</Footer>
      </Layout>
    </Flex>
  );
};

export default BaseLayout;
