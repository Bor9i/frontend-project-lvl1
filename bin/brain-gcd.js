#!/usr/bin/env node

import { name, gameEngine } from '../src/index.js';
import gcdGame from '../games/gcd.js';

console.log(gameEngine(name(), gcdGame()));
