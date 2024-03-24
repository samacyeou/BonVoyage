import { CardDetail, Column, Dashboard } from '@/@types/type';
import { Dispatch, createContext, useContext } from 'react';
import createStateContext from './createStateContext';

type ColumnListState = [Column[] | undefined, Dispatch<Column[]> | undefined];

export const [useCardList, CardListProvider] = createStateContext<
  CardDetail[] | null
>(null);

export const [useCardState, CardProvider] =
  createStateContext<CardDetail | null>(null);

export const [useDashboardState, DashboardProvider] =
  createStateContext<Dashboard | null>(null);

export const columnContext = createContext<ColumnListState>([
  undefined,
  undefined,
]);

export function useColumnListState(): ColumnListState {
  const [column, setColumn] = useContext<ColumnListState>(columnContext);
  return [column, setColumn];
}
