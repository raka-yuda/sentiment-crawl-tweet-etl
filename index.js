// const SyncRunner = require('./app/main/syncRunner');
import { SyncRunner } from './app/main/syncRunner.js'
// const 
const syncrunner = new SyncRunner();
await syncrunner.analyzingSentiment()