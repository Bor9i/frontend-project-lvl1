#!/usr/bin/env node

import { name, gameEngine } from '../src/index.js';
import calcGame from '../games/calc.js';

console.log(gameEngine(name(), calcGame()));
