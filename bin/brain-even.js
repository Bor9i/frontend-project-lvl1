#!/usr/bin/env node

import { name, gameEngine } from '../src/index.js';
import evenGame from '../games/even.js';

console.log(gameEngine(name(), evenGame()));
