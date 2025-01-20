import { TableColumnsType } from 'antd';
import BaseLayout from '../../shared/ui/baseLayout';
import DateRangePicker from '../../shared/ui/dateRangePicker';
import ClientTable from './clientTable';
import { DataType } from './types';
import { randomDate } from '../../shared/helpers/date';
import { useState } from 'react';

const CRMData = () => {
  const columns: TableColumnsType<DataType> = [
    { title: 'Index', dataIndex: 'index' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { title: 'Date', dataIndex: 'date' },
    { title: 'Address', dataIndex: 'address' },
    { title: 'OS', dataIndex: 'os' },
  ];

  const startDate = new Date('2024-12-01');
  const endDate = new Date('2026-01-01');

  const dataSource = Array.from<DataType>({ length: 46 }).map<DataType>(
    (_, i) => ({
      key: i,
      index: i,
      name: `Edward King ${i}`,
      age: 32,
      date: randomDate({
        start: startDate,
        end: endDate,
      }),
      address: `London, Park Lane no. ${i}`,
      os: 'Windows',
    })
  );

  const [dates, setDates] = useState<Date[]>([]);

  const prepareData = (data: DataType[]) => {
    let filteredData = data;
    if (dates.length > 0) {
      filteredData = data.filter(item => {
        return item.date >= dates[0] && item.date <= dates[1];
      });
    }
    return filteredData.map(item => ({
      ...item,
      date: item.date.toLocaleDateString(),
    }));
  };

  return (
    <BaseLayout>
      <DateRangePicker value={dates} onChange={dates => setDates(dates)} />
      <ClientTable dataSource={prepareData(dataSource)} columns={columns} />
    </BaseLayout>
  );
};

export default CRMData;
