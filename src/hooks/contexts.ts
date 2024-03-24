import { CardDetail, Column, Dashboard } from '@/@types/type';
import { Dispatch, createContext, useContext } from 'react';
import createStateContext from './createStateContext';

export const [useCardState, CardProvider] =
  createStateContext<CardDetail | null>(null);

export const [useDashboardState, DashboardProvider] =
  createStateContext<Dashboard | null>(null);

export const columnContext = createContext<[Column[], Dispatch<Column[]>] | []>(
  [],
);

export function useColumnListState() {
  const [column, setColumn] = useContext(columnContext);
  return [column, setColumn];
}
