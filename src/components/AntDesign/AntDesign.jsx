import React from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { useDispatch } from "react-redux";
import { selectRoute } from '../../reducers/Reducers';
import Map from '../Leaflet/Leaflet';

const columns = [
    {
        title: 'Маршрут',
        dataIndex: 'route',
        key: 'route',
        render: (text, record) => (
          <Space size="middle">
            <Tag color="blue">{record.routeNumber}</Tag>
            {record.routeName}
          </Space>
        ),
      },
      {
        title: 'Начальная точка',
        dataIndex: 'startPoint',
        key: 'startPoint',
      },
      {
        title: 'Конечная точка',
        dataIndex: 'endPoint',
        key: 'endPoint',
      },
      {
        title: 'Действия',
        key: 'actions',
        render: (text, record) => {
            return <ActionsButton record={record} />;
        },
      },
];
const data = [
    {
      key: '1',
      routeNumber: 'Маршрут №1',
      routeName: 'Красная линия',
      startPoint: '59.84660399, 30.29496392',
      endPoint: '59.83567701, 30.38064206',
    },
    {
      key: '2',
      routeNumber: 'Маршрут №2',
      routeName: 'Синяя линия',
      startPoint: '59.82934196, 30.42423701',
      endPoint: '59.84660399, 30.29496392',
    },
    {
      key: '3',
      routeNumber: 'Маршрут №3',
      routeName: 'Зеленая линия',
      startPoint: '59.83567701, 30.38064206',
      endPoint: '59.82761295, 30.41705607',
    },
  ];

  
const ActionsButton = ({ record }) => {
    const dispatch = useDispatch();
  
    // Обработчик события для выбора маршрута
    const handleSelectRoute = () => {
      dispatch(selectRoute(record));
    };
  
    return (
      <Space size="middle">
        <Button type="primary" onClick={handleSelectRoute}>Просмотреть</Button>
        <Button type="danger">Удалить</Button>
      </Space>
    );
  };

const RoutesTable = () => {
  return <div>
  <Table columns={columns} dataSource={data} />

  {/* Один раз инициализируем компонент Map */}
  <Map />
</div>
};

export default RoutesTable;
