#!/usr/bin/env node

import { name, gameEngine } from '../src/index.js';
import progressionGame from '../games/progression.js';

console.log(gameEngine(name(), progressionGame()));
