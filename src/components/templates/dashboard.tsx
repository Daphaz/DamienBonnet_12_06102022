import { formatNumberLocalFr } from '@/lib';

import {
  KeyDataItemProps,
  ListKeyData,
  WidgetActivity,
  WidgetAverageSession,
  WidgetPerformance,
  WidgetTodayScore,
} from '@/components/common';
import { Layout } from '@/components/layout';

import { KeyDataType, User } from '@/ts';

/**
 * This function get all property we need for KeyDataItem component
 * @category Templates
 * @subcategory Dashboard
 *
 */
export const getContent = (
  property: keyof KeyDataType,
  value: number
): Pick<KeyDataItemProps, 'title' | 'color' | 'subtitle'> => {
  switch (property) {
    case 'calorieCount':
      return {
        title: `${formatNumberLocalFr(value)} kCal`,
        subtitle: 'Calories',
        color: 'primary',
      };
    case 'proteinCount':
      return {
        title: formatNumberLocalFr(value, {
          style: 'unit',
          unit: 'gram',
        }),
        subtitle: 'Proteines',
        color: 'blue',
      };
    case 'carbohydrateCount':
      return {
        title: formatNumberLocalFr(value, {
          style: 'unit',
          unit: 'gram',
        }),
        subtitle: 'Gluicides',
        color: 'yellow',
      };
    case 'lipidCount':
      return {
        title: formatNumberLocalFr(value, {
          style: 'unit',
          unit: 'gram',
        }),
        subtitle: 'Lipides',
        color: 'pink',
      };
  }
};

/**
 *  This function formating , add static data for key data item
 * component
 * @category Templates
 * @subcategory Dashboard
 */
export const formatKeyData = (object: KeyDataType): KeyDataItemProps[] => {
  const datas: KeyDataItemProps[] = [];

  for (const property in object) {
    const value = object[property as keyof KeyDataType];

    datas.push({
      iconSrc: `/svg/icon-${property}.svg`,
      name: property,
      ...(getContent(property as keyof KeyDataType, value) || {}),
    });
  }

  return datas;
};

/**
 * @category Templates
 * @subcategory Dashboard
 * @description This the Dashbord template ui .
 *
 *
 */
export const DashboardTemplate = ({ user }: { user: User }) => {
  return (
    <Layout>
      <h1 className='dashboard__title'>
        Bonjour&nbsp;<span>{user.userInfos.firstName}</span>
      </h1>
      <p className='dashboard__subtitle'>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>

      <div className='dashboard__grid'>
        <div className='dashboard__left'>
          <WidgetActivity />

          <div className='dashboard__row'>
            <WidgetAverageSession />
            <WidgetPerformance />
            <WidgetTodayScore score={user.score} />
          </div>
        </div>

        <div className='dashboard__right'>
          <ListKeyData items={formatKeyData(user.keyData)} />
        </div>
      </div>
    </Layout>
  );
};
