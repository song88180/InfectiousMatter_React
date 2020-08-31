import React, {useEffect, useRef, useLayoutEffect, useContext} from 'react';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
//import {InfectiousMatter, AgentStates, ContactGraph} from '../InfectiousMatter/simulation.js';
import {IMContext} from '../SimComponents/IMApp';
const Matter = require('matter-js');


const GrowthSimulation = ({redraw_trigger, setWorldReadyTrigger, numMasked, divSize,curItemName}) => {
    const sim_div = useRef(null);
    const { InfectiousMatterRef, InfectiousMatterAPI, InfectiousMatter} = useContext(IMContext);
    const setup_world = (birth_per_agent_per_day = 50, env_capacity = null) => {
        let res_prop = {
            type: "residence", 
            friction: 0.1,
            bounds: {
                min: {
                    x: 10,
                    y: 10,
                },
                max: {
                    x: divSize-10,
                    y: divSize-10,
                }
            }
        };


        let res1 = InfectiousMatterAPI(InfectiousMatterRef, {type:'add_location', payload:{residence_props: res_prop}});

        InfectiousMatterAPI(InfectiousMatterRef, {type:'add_agents', payload:{residence: res1, num_agents: 10}});

        InfectiousMatterRef.current.add_event({time: 1000, callback: InfectiousMatterRef.current.birth_death_event( birth_per_agent_per_day, env_capacity), recurring: true });
        
        //shuffle the agents
        Matter.Common.shuffle(InfectiousMatterRef.current.agents);
    };

    useEffect(() => {

        let world_params = {
            num_residences: 1,
            residence_options: [],
            pop_size: 2,
            num_to_infect: 0,
            num_visitors: 0,
            residence_size: 10,
            residence_padding: 20
        
        };
        
        let simulation_params = {
            sim_time_per_day: 1000,
            agent_size: 2,
            link_lifetime: 200,
        };

        simulation_params.link_lifetime = 7*simulation_params.sim_time_per_day;
        
        var infection_params = {
            per_contact_infection: 0.5, 

            incubation_period_mu: 5,
            incubation_period_sigma: 3,
            
            infectious_period_mu: 7,
            infectious_period_sigma: 4,
            fraction_asymptomatic: 0.2,
            
            asymptomatic_infectious_period_mu: 1.5,
            asymptomatic_infectious_period_sigma: 1.5,
        
            fraction_seek_care: 0.5,
            fraction_isolate: 0.2,
            time_to_seek_care: 2.5,
            movement_scale: 2.0,
        };
  
        let default_simulation_colors = {
            viva_colors: [0x9370DBff, 0x00FF00ff, 0xFFFF00ff, 0xFFA500ff, 0x0000FFff, 0xA9A9A9ff, 0xFF00FFff, 0x00CED1ff,0x98FB98ff, 0xCD853Fff],
            matter_colors: ["mediumpurple", "lime", "yellow", "orange", "blue", "darkgrey", "fuchsia", "darkturquoise", "palegreen", "peru"]
        }

        InfectiousMatterRef.current = new InfectiousMatter(false, simulation_params, infection_params, default_simulation_colors);
        InfectiousMatterAPI(InfectiousMatterRef, {type:'setup_environment', payload:{sim_div:sim_div}});

        setup_world();

        //InfectiousMatterAPI(InfectiousMatterRef, {type:'reset_simulator'});
        return ()=>{
            InfectiousMatterAPI(InfectiousMatterRef, {type:'reset_simulator'});
        }
    }, [])

    //redraw simulation if we get the triggers
    useLayoutEffect(()=> {
        console.log('useLayoutEffect in GrowthSimulation', curItemName);
        if(InfectiousMatterRef.current) {
            if (curItemName == 'exponential'){
                InfectiousMatterAPI(InfectiousMatterRef, {type:'reset_simulator'});
                setup_world(50,null);
            }
            else if (curItemName == 'logistic'){
                InfectiousMatterAPI(InfectiousMatterRef, {type:'reset_simulator'});
                setup_world(50, 100);
            }

            setWorldReadyTrigger( c => c+1);
        }
    }, [redraw_trigger])

    return (

            <div ref={sim_div} style={{height:divSize, width:divSize, margin:'0 auto'}}>

            </div>

        
    );

};

export default GrowthSimulation;
