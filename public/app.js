
const TimersDashboard = React.class({
  render: function(){
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList />
          <ToggleableTimerForm
            isOpen={true}
          />
        </div>
      </div>
    );
  }
});

const EditableTimerList = React.class({
  render: function(){
    return (
      <div id='timers'>
        <EditableTimer
          title='Title 1'
          project='Project 1'
          elapsed='100'
          runningSince={null}
          editForm={false}
        />
        <EditableTimer
          title='Title 2'
          project='Project 1'
          elapsed='50'
          runningSince={null}
          editForm={true}
        />
      </div>
    )
  }
});
