
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
          editFormOpen={false}
        />
        <EditableTimer
          title='Title 2'
          project='Project 1'
          elapsed='50'
          runningSince={null}
          editFormOpen={true}
        />
      </div>
    )
  }
});

const EditableTimer = React.create({
  render: function(){
    if (this.props.editFormOpen){
      return (
        <TimerForm
          title={this.props.title}
          project={this.props.project}
        />
      )
    } else {
      return (
        <Timer
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      )
    }
  }
})
