import { RsvpEntry, RsvpStatus } from "../interfaces/RsvpEntry";
import { Player } from "../interfaces/Player";
import { Logger } from "../interfaces/Logger";

export class RsvpService {
  private entries: RsvpEntry[] = [];

  constructor(private logger: Logger, initialEntries: RsvpEntry[] = []) {
    if (initialEntries.length) {
      this.entries = [...initialEntries];
      this.logger.log(`Initialized with ${initialEntries.length} entries.`);
    }
  }

  /**
   * Adds a new RSVP or updates an existing one.
   */
  addOrUpdateRsvp(player: Player, status: RsvpStatus): void {
    if (!player || !status) {
      this.logger.error("Invalid player data or status provided.");
      return;
    }

    const index = this.entries.findIndex(entry => entry.player.id === player.id);
    if (index !== -1) {
      // Early return if update is performed.
      this.entries[index].status = status;
      this.logger.log(`Updated RSVP for player: ${player.name}`);
      return;
    }

    // Add new RSVP entry.
    this.entries.push({ player, status });
    this.logger.log(`Added RSVP for player: ${player.name}`);
  }

  /**
   * Retrieves a list of players with a confirmed RSVP ("Yes").
   */
  getConfirmedAttendees(): Player[] {
    return this.entries
      .filter(entry => entry.status === "Yes")
      .map(entry => entry.player);
  }

  /**
   * Returns the counts for total, confirmed, and declined RSVP responses.
   */
  getCounts(): { total: number; confirmed: number; declined: number } {
    const total = this.entries.length;
    const confirmed = this.entries.filter(entry => entry.status === "Yes").length;
    const declined = this.entries.filter(entry => entry.status === "No").length;
    return { total, confirmed, declined };
  }

  // Method to retrieve all RSVP entries as read-only.
  getAllRsvps(): ReadonlyArray<RsvpEntry> {
    return [...this.entries];
  }
}
