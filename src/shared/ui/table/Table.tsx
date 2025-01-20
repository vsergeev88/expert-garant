import React from 'react';
import { Flex, Table as AntdTable } from 'antd';
import type { TableColumnsType } from 'antd';

type TProps = {
  columns: TableColumnsType<unknown>;
  dataSource: unknown[];
};

const Table: React.FC<TProps> = ({ columns, dataSource }) => {
  return (
    <Flex gap="middle" vertical>
      <AntdTable columns={columns} dataSource={dataSource} />
    </Flex>
  );
};

export default Table;
