import ActivityDashboard from 'features/activities/dashboard/ActivityDashboard';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from 'features/home/HomePage';
import ActivityForm from 'features/activities/form/ActivityForm';
import ActivityDetails from 'features/activities/details/ActivityDetails';

import { ToastContainer } from 'react-toastify';

import AppLayout from './AppLayout';
import TestErrors from 'features/errors/TestError';
import NotFound from 'features/errors/NotFound';
import ServerError from 'features/errors/ServerError';
import LoginForm from 'features/users/LoginForm';
import { useStore } from 'app/stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import Spinner from '../../common/Spinner'
import ModalContainer from 'common/modals/modalContainer';




function App() {
  const location = useLocation();
  const { commonStore, userStore } = useStore();


  useEffect(() => {


    if (commonStore.token) {
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore])


  const renderMultiRoutes = ({ element: Element, paths, ...rest }: any) =>
    paths.map((path: string) => <Route key={location.key} path={path} {...rest} element={Element} />);

  if (!commonStore.appLoaded) return <Spinner />

  return (

    <div className="App">
      <ToastContainer position='bottom-right' hideProgressBar />
      <ModalContainer />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<AppLayout />}>

          <Route path='/activities' element={<ActivityDashboard />} />
          <Route path='/activities/:id' element={<ActivityDetails />} />
          {renderMultiRoutes({
            paths: ['/createActivity', '/manage/:id'],
            element: <ActivityForm />
          })}
          <Route path='/errors' element={<TestErrors />} />
          <Route path='/server-error' element={<ServerError />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>


    </div >
  );
}

export default observer(App);
