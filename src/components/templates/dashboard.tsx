import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

import { formatNumberLocalFr } from '@/lib/utils';

import { usersService } from '@/api/users.service';
import { KeyDataType, User } from '@/ts';

import {
  KeyDataItemProps,
  ListKeyData,
  WidgetActivity,
  WidgetAverageSession,
  WidgetPerformance,
  WidgetTodayScore,
} from '../common';
import { Layout } from '../layout';

export const DashboardTemplate = () => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const fetchUser = useCallback(async () => {
    try {
      const data = await usersService.getById();

      setUser(data);
    } catch (e) {
      console.error('FetchUser: ', e);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const getContent = (
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

      default:
        return {
          title: '',
          subtitle: '',
        };
    }
  };

  const formatKeyData = (object: KeyDataType): KeyDataItemProps[] => {
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

  return (
    <Layout>
      <h1 className='dashboard__title'>
        Bonjour&nbsp;<span>{user && user.userInfos.firstName}</span>
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
            {user?.score && <WidgetTodayScore score={user.score} />}
          </div>
        </div>

        <div className='dashboard__right'>
          {user?.keyData ? (
            <ListKeyData items={formatKeyData(user.keyData)} />
          ) : (
            <p>pas de données pour l'instant</p>
          )}
        </div>
      </div>
    </Layout>
  );
};
