/**
 * Four-in-a-Row
 * 
 * An implementation of the game.
 * @author Marisa Wong <wwong32@ucsc.edu>
 * April 2025
 * 
 * ---
 * 
 * Set up two players to “red” and “yellow”
 * Decide which player goes first.
 * 
 * Show the current grid to players after every move.
 * Prompt current player to choose a column (0 to 6).
 * 
 * If the chosen column is full:
 *  Print "Column full, choose another.”
 * 
 * Place the player's token in the lowest available row in that column.
 * 
 * Check for a Win.
 * check if there's any "connected" four:
 * - Horizontally
 * - Vertically
 * - Diagonally (both directions)
 * If the board does not have 4 matching tokens, continue to the next step.
 * 
 * Check for a tie
 * if the board is not full, continue to next step.
 * if the board is full and there is no winner, declare a tie.
 * 
 * Switch turns.
 * change to the other player.
 * repeat line 13 - 30 until there is a winner.
 * 
 * If there’s a winner, display the winner and end the game.
 * If it’s a tie, display a tie message and end the game.
 * Offer option to restart or exit.
 */
