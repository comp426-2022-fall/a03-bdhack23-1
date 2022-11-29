#!/usr/bin/env node

// import stuff
import minimist from 'minimist'
import { roll } from "../lib/roll.js"

// arg const
const args = minimist(process.argv.slice(2))

// create constants for sides, dice, and rolls. Default values included.
const sides = args.sides ? args.sides: 6;
const dice = args.dice ? args.dice: 2;
const rolls = args.rolls ? args.rolls: 1;

// print out the results using stringify
console.log(JSON.stringify(roll(sides, dice, rolls)));
// all done!
process.exit(0);
