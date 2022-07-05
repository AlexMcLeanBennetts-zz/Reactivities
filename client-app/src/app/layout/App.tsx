import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from 'app/stores/store';

import NavBar from 'app/layout/NavBar';
import PageContainer from 'app/layout/PageContainer';
import ActivityDashboard from 'features/ActivityDashboard';
import Spinner from 'features/components/Spinner';


function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])

  if (activityStore.loadingInitial === true) return (
    <div className='flex flex-col w-screen h-screen justify-center align-middle items-center'>
      <Spinner />
      <p>Loading Activities...</p>
    </div>
  )

  return (

    <div className="App">
      <NavBar />
      <PageContainer>
        <ActivityDashboard />
      </PageContainer>

    </div>
  );
}

export default observer(App);
