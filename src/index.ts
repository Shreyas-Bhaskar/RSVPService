import { RsvpService } from "./services/RsvpService";
import { ConsoleLogger } from "./utils/ConsoleLogger";
import { Player } from "./interfaces/Player";

// Instantiate logger and RSVP service.
const logger = new ConsoleLogger();
const rsvpService = new RsvpService(logger);

// Example players.
const player1: Player = { id: "1", name: "Alice" };
const player2: Player = { id: "2", name: "Bob" };

// Add or update RSVP responses.
rsvpService.addOrUpdateRsvp(player1, "Yes");
rsvpService.addOrUpdateRsvp(player2, "No");
// Update Bob's RSVP.
rsvpService.addOrUpdateRsvp(player2, "Maybe");

// Get confirmed attendees.
const confirmedAttendees = rsvpService.getConfirmedAttendees();
console.log("Confirmed Attendees:", confirmedAttendees);

// Get counts.
const counts = rsvpService.getCounts();
console.log("RSVP Counts:", counts);
