import {FaAward} from 'react-icons/fa';
import {TbBooks} from 'react-icons/tb';
import {BiHappyHeartEyes} from 'react-icons/bi';
import React from 'react';

const data = () => [
  {id: 1, icon: <FaAward/>, title: 'Experience', desc: '2+ Years Working'},
  {id: 2, icon: <TbBooks/>,  title: 'Projects', desc: '180+ Completed'},
  {id: 3, icon:<BiHappyHeartEyes/>, title: 'Clients', desc: '70+ happy clients'}
]

export default data;
