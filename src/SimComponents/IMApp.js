import React, {useRef, useEffect, useReducer, useState, useLayoutEffect} from 'react';
import Matter from 'matter-js';
import {InfectiousMatter, AgentStates, ContactGraph} from '../InfectiousMatter/simulation.js';

const InfectiousMatterAPI = (InfectiousMatterRef, action) => {
  if (action.type === 'setup_environment') {
    InfectiousMatterRef.current.setup_renderer(action.payload.sim_div.current);
    InfectiousMatterRef.current.setup_matter_env();
  }
  if (action.type === 'reset_simulator') {
    InfectiousMatterRef.current.clear_simulator();
    InfectiousMatterRef.current.setup_matter_env();
  }
  if (action.type === 'remove_simulator') {
    InfectiousMatterRef.current.remove_simulator();
  }


  if (action.type === 'update_mask_transmission_params') {
    if (action.payload.self_protection) {
      InfectiousMatterRef.current.mask_transmission_props.self_protection = action.payload.self_protection;
    }
    if (action.payload.others_protection) {
      InfectiousMatterRef.current.mask_transmission_props.others_protection = action.payload.others_protection;
    }
  }
  if (action.type === 'update_movement_scale') {
    if (action.payload.movement_scale) {
      InfectiousMatterRef.current.infection_params.movement_scale = action.payload.movement_scale;
    }
  }

  if (action.type === 'add_location') {
    let res = InfectiousMatterRef.current.add_location('residence', action.payload.residence_props)
    return res;
  }
  if (action.type === 'add_agents') {
    let new_agent = null;
    if (action.payload.residence && action.payload.num_agents) {
      for (let i = 0; i < action.payload.num_agents; i++) {
        new_agent = InfectiousMatterRef.current.add_agent(action.payload.residence)
      }
    }
    if (action.payload.callback && new_agent) {
      action.payload.callback(new_agent.agent_object);
    }
  }
  if (action.type === 'map_agents') {
    return InfectiousMatterRef.current.agents.map((agent, agent_id) => action.payload.callback(agent, agent_id));
  }
  if (action.type === 'forEach_agents') {
    InfectiousMatterRef.current.agents.forEach((agent) => action.payload.callback(agent));
  }
  if (action.type === 'map_locations') {
    return InfectiousMatterRef.current.locations.map((loc, loc_idx) => action.payload.callback(loc, loc_idx));
  }
  if (action.type === 'forEach_location') {
    InfectiousMatterRef.current.locations.forEach((loc) => action.payload.callback(loc));
  }
  if (action.type === 'infect_random_agents') {
    if (action.payload.num_agents) {
      for (let i = 0; i < action.payload.num_agents; i++) {
        let random_agent = Matter.Common.choose(InfectiousMatterRef.current.agents);
        InfectiousMatterRef.current.expose_org(random_agent.body, AgentStates.S_INFECTED);
      }
    }
  }
  if (action.type === 'get_migration_links') {
    return InfectiousMatterRef.current.get_migration_links();
  }
  if (action.type === 'add_migration_link') {
    InfectiousMatterRef.current.add_migration_link(action.payload.from_location, action.payload.to_location, action.payload.num_agents)
  }
  if (action.type === 'clear_migration_links') {
    InfectiousMatterRef.current.migration_graph.clear();
  }
  if (action.type === 'remove_migration_link') {
    InfectiousMatterRef.current.remove_migration_link(action.payload.from_location, action.payload.to_location)
  }
  if (action.type === 'get_state_counts') {
    return {
      state_counts: InfectiousMatterRef.current.state_counts,
      cur_time: InfectiousMatterRef.current.cur_sim_time / InfectiousMatterRef.current.simulation_params.sim_time_per_day
    };
  }
  if (action.type === 'set_num_mask') {
    // get current num of people masked
    let masked_list = [];
    let unmasked_list = [];
    InfectiousMatterRef.current.agents.forEach((agent) => {
      if (agent.masked) {
        masked_list.push(agent);
      } else {
        unmasked_list.push(agent);
      }
    });

    let cur_num_masked = masked_list.length;
    let num_needing_masks = action.payload.num_masked - cur_num_masked;
    if (num_needing_masks > 0) {
      for (let i = 0; i < num_needing_masks; i++) {
        unmasked_list[i].masked = true;
      }
    } else if (num_needing_masks < 0) {
      for (let i = 0; i < -num_needing_masks; i++) {
        masked_list[i].masked = false;
      }
    }
    /*
    if (num_needing_masks > 0){
      for (let i=0; i < num_needing_masks; i++){
        let agent_to_mask = Matter.Common.choose(unmasked_list);
        if (agent_to_mask.masked === false){
          agent_to_mask.masked = true;
        }
      }
    }
    else if(num_needing_masks < 0){
      for (let i=0; i < -num_needing_masks; i++){
        let agent_to_unmask = Matter.Common.choose(masked_list);
        if (agent_to_unmask) {
          agent_to_unmask.masked=false;
        }
      }
    }
    */
  }
}

export const IMContext = React.createContext();

export default function IMApp(props) {

  const InfectiousMatterRef = useRef(null);

  return (
    // Note: This current way of exposing these values can lead to unexpected bugs.
    // We'll talk about this later in the post why writing `{state, dispatch}` can
    // lead to performance issues.
    <IMContext.Provider value={ { InfectiousMatterRef, InfectiousMatterAPI, InfectiousMatter, AgentStates, ContactGraph} }>
      {props.children}
    </IMContext.Provider>
  );
}