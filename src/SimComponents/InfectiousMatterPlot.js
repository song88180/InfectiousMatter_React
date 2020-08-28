import React, {useEffect, useState, useReducer, useLayoutEffect, useContext} from 'react';
import Plot from 'react-plotly.js'; //TODO: use bundles to limit the size of this app
import {AgentStates} from '../InfectiousMatter/simulation.js';
import {IMContext} from '../SimComponents/IMApp';

let get_fresh_traces = function() {
  let exposed = {
      x: [0],
      y: [0],
      stackgroup: 'one',
      //type: "scattergl",
      name: "Exposed",
    marker: { color: "orange" }
  };

  let infected = {
    x: [0],
    y: [0],
    stackgroup: 'one',
    //type: "scattergl",
    name: "Infected",
    marker: { color: "red" }
  };

  let recovered = {
    x: [0],
    y: [0],
    stackgroup: 'one',
    name: "Recovered",
    //type: "scattergl",
    marker: { color: "green" }
  };

  let susceptible = {
      x: [0],
      y: [0],
      stackgroup: 'one',
      name: "Susceptible",
      //type: "scattergl",
      marker: { color: "grey" }
  }
  let plot_data = [exposed, infected, recovered, susceptible];
  return plot_data;
}

let infection_layout = {
  margin: {
      l: 50,
      r: 10,
      b: 50,
      t: 10,
      pad: 10
    },
  showlegend: true,
  legend: {
      x:1,
      xanchor: 'right',
      y:1
  }, 
  xaxis: {
      title: "Days",
      rangemode: 'nonnegative'
  }, 
  yaxis: {
      title: "Count",
      rangemode: 'nonnegative'
  },
  width:300,
  height:300
};

const initial_traces = get_fresh_traces();

function reducer(state, action) {
  if (!state) { console.log('didnt get state');}
  let new_state = [...state];
  switch (action.type) {
    case 'extend': {
      new_state[0].x.push(action.payload.cur_time);
      new_state[0].y.push(action.payload.cur_state_counts[AgentStates.EXPOSED]);

      new_state[1].x.push(action.payload.cur_time);
      new_state[1].y.push(action.payload.cur_state_counts[AgentStates.S_INFECTED] + action.payload.cur_state_counts[AgentStates.A_INFECTED]);

      new_state[2].x.push(action.payload.cur_time);
      new_state[2].y.push(action.payload.cur_state_counts[AgentStates.RECOVERED]);

      new_state[3].x.push(action.payload.cur_time);
      new_state[3].y.push(action.payload.cur_state_counts[AgentStates.SUSCEPTIBLE]);

      // new_state[1].push(action.payload.state_counts[AgentStates.S_INFECTED] + action.state_counts[AgentStates.A_INFECTED]);
      // new_state[2].push(action.payload.state_counts[AgentStates.RECOVERED]);
      // new_state[3].push(action.payload.state_counts[AgentStates.SUSCEPTIBLE]);
      return new_state;
    }
    case 'reset': {
        new_state = get_fresh_traces();
        return new_state;
    }
    default: {

    }
  }
}

const InfectiousMatterPlot = ({redraw_trigger}) => {
  const { InfectiousMatterRef, InfectiousMatterAPI} = useContext(IMContext);
  const [plotTraces, dispatchTraces] = useReducer(reducer, initial_traces);
  const [plotRevision, setPlotRevision] = useState(0);
  let plot_data = get_fresh_traces();
  let plot_layout = infection_layout;

  useEffect( () => {
    const update_traces = () => {
        let api_return = InfectiousMatterAPI(InfectiousMatterRef, {type:'get_state_counts'});
        dispatchTraces({type: 'extend', payload:{cur_time: api_return.cur_time, cur_state_counts: api_return.state_counts}});
        setPlotRevision(p => p+1);
      };

    const interval = setInterval( ()=> {
      update_traces();
    }, 600);
    return () => { clearInterval(interval);};
  }, [redraw_trigger])

  //redraw plot if we get the triggers
  useLayoutEffect(()=> { 
    if(InfectiousMatterRef.current) {
        dispatchTraces({type:'reset'});
        setPlotRevision(p => p+1);
    }
  }, [redraw_trigger])

  return (
    <div style={{height:300, width:300}}>
      <Plot
        data={plotTraces}
        layout={{...plot_layout, datarevision:plotRevision}}
      />
    </div>
  );
};

export default InfectiousMatterPlot;
