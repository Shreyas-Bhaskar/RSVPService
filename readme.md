
```markdown
# RSVP App

A small, focused module for managing RSVP responses for an event. This service allows you to add or update a player's RSVP, retrieve all confirmed attendees, and get counts for the total, confirmed, and declined responses.

## Overview

The RSVP service is implemented using TypeScript, following modern best practices such as dependency injection, the Single Responsibility Principle (SRP), pure functions when possible, and a clean file structure. The project demonstrates how to structure code for scalability and maintainability.

## File Structure


/src
 ├── /interfaces
 │    ├── Logger.ts         // Logger interface for dependency injection
 │    ├── Player.ts         // Player interface definition
 │    └── RsvpEntry.ts      // RSVP entry interface and status type
 ├── /services
 │    └── RsvpService.ts    // Core RSVP service logic
 ├── /utils
 │    └── ConsoleLogger.ts  // A basic console logger implementation
 └── index.ts              // Application entry point demonstrating service usage


## Installation

1. **Clone the Repository / Set Up the Project:**

   Clone the repository or create a new project folder and initialize it using:

   ```bash
   npm init -y
   

2. **Install Dependencies:**

   Install TypeScript, ts-node, and Node.js type definitions as development dependencies:

   ``'bash
   npm install typescript ts-node @types/node --save-dev
   
