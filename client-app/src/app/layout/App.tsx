import NavBar from 'app/layout/NavBar';
import { v4 as uuid } from 'uuid';
import PageContainer from 'app/layout/PageContainer';
import ActivityDashboard from 'features/activities/dashboard/ActivityDashboard';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from 'features/home/HomePage';
import ActivityForm from 'features/activities/form/ActivityForm';
import ActivityDetails from 'features/activities/details/ActivityDetails';
import { useEffect } from 'react';
import { useStore } from 'app/stores/store';
import AppLayout from './AppLayout';




function App() {
  const location = useLocation();
  const { activityStore } = useStore();




  const renderMultiRoutes = ({ element: Element, paths, ...rest }: any) =>
    paths.map((path: string) => <Route key={location.key} path={path} {...rest} element={Element} />);
  return (

    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<AppLayout />}>

          <Route path='/activities' element={<ActivityDashboard />} />
          <Route path='/activities/:id' element={<ActivityDetails />} />
          {renderMultiRoutes({
            paths: ['/createActivity', '/manage/:id'],
            element: <ActivityForm />
          })}
        </Route>
      </Routes>


    </div >
  );
}

export default App;
