import Table from '../../../shared/ui/table';
import type { TableColumnsType } from 'antd';
import { DataType } from '../types';

type TProps = {
  columns: TableColumnsType<DataType>;
  dataSource: Array<Omit<DataType, 'date'> & { date: string }>;
};

const ClientTable: React.FC<TProps> = ({ columns, dataSource }) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns as TableColumnsType<unknown>}
    />
  );
};

export default ClientTable;
