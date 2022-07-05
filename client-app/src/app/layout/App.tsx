import React, { useEffect, useState } from 'react';
import { IActivity } from 'app/models/activity';
import NavBar from 'app/layout/NavBar';
import ActivityDashboard from 'features/ActivityDashboard';
import PageContainer from 'app/layout/PageContainer';
import { v4 as uuid } from 'uuid';
import agent from 'app/api/agent';


function App() {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [submitting, setSubmitting] = useState(false);


  useEffect(() => {
    agent.Activities.list().then(res => {
      let activities: IActivity[] = [];
      res.forEach(activity => {
        activity.date = activity.date.split('T')[0];
        activities.push(activity)
      })
      setActivities(activities);
    })
  }, [])

  function handleSelectedActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectedActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }
  function handleFormClose() {
    setEditMode(false);
  }
  function handleCreateOrEditActivity(activity: IActivity) {
    setSubmitting(true);
    if (activity.id) {
      agent.Activities.update(activity)
        .then(() => {
          setActivities([...activities.filter(x => x.id !== activity.id), activity]);
          setSelectedActivity(activity);
          setEditMode(false);
          setSubmitting(false);
        })
    } else {
      activity.id = uuid();
      agent.Activities.create(activity)
        .then(() => {
          setActivities([...activities, activity]);
          setSelectedActivity(activity);
          setEditMode(false);
          setSubmitting(false);
        })
    }
  }
  function handleDeleteActivity(id: string) {
    setSubmitting(true);
    agent.Activities.delete(id)
      .then(() => {
        setActivities([...activities.filter(x => x.id !== id)]);
        setSubmitting(false);
      })
  }

  return (

    <div className="App">
      <NavBar openForm={handleFormOpen} />
      <PageContainer>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
      </PageContainer>

    </div>
  );
}

export default App;
