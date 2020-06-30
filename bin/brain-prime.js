#!/usr/bin/env node

import { name, gameEngine } from '../src/index.js';
import primeGame from '../games/prime.js';

console.log(gameEngine(name(), primeGame()));
