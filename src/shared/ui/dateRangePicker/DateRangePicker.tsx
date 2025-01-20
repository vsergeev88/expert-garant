import { DatePicker } from 'antd';
import dayjs from 'dayjs';
type TProps = {
  value: Date[];
  onChange: (dates: Date[]) => void;
};

const DateRangePicker: React.FC<TProps> = ({ value, onChange }) => {
  return (
    <DatePicker.RangePicker
      placeholder={['', 'Till Now']}
      size="large"
      allowEmpty={[true, true]}
      value={
        value.length > 0
          ? [dayjs(value[0]), dayjs(value[1] ?? '')]
          : [null, null]
      }
      onChange={dates => {
        const datesArray =
          dates?.filter(date => date !== null).map(date => date.toDate()) ?? [];
        onChange(datesArray);
      }}
      showWeek
      showNow
    />
  );
};

export default DateRangePicker;
