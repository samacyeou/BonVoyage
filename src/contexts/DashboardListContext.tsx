import { Dashboard } from '@/@types/type';
import { createContext, useState } from 'react';

export const DashboardListContext = createContext<{
  dashboardList: Dashboard[];
  setDashboardList: React.Dispatch<React.SetStateAction<Dashboard[]>>;
}>({ dashboardList: [], setDashboardList: () => {} });

export function DashboardListProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dashboardList, setDashboardList] = useState<Dashboard[]>([]);

  return (
    <DashboardListContext.Provider value={{ dashboardList, setDashboardList }}>
      {children}
    </DashboardListContext.Provider>
  );
}
