
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

const EditableTimer = React.class({
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
});

const TimerForm = React.class({
  render: function(){
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='field'>
            <label>Title</label>
            <input type='text' defaultValue={this.props.title} />
          </div>
          <div className='field'>
            <label>Project</label>
            <input type='text' defaultValue={this.props.project} />
          </div>
          <div className='ui two bottom attached buttons'>
            <button className='ui basic blue button'>{submitText}</button>
            <button className='ui basic red button'>Cancel</button>
          </div>
        </div>
      </div>
    )
  }
});

const ToggleableTimerForm = React.class({
  render: function(){
    if (this.props.isOpen) {
      return (
        <TimerForm />
      )
    } else {
      <div className='ui basic content center aligned segment'>
        <button><i className='plus icon'></i></button>
      </div>
    }
  }
});
