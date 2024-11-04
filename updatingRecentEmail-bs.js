/**
 * 
Updating Recent Emails:

Your email application receives new emails constantly throughout the day. To keep the inbox
usable, new emails need to be inserted into the correct place based on their timestamp, 
ensuring that the most recent emails appear at the top. Since the list size is relatively small 
but frequently updated, how would you efficiently insert each new email without resorting to 
complete re-sorting every time?
 */
function insertEmail(inbox, newEmail) {
  const { timestamp } = newEmail;

  // Binary search to find the correct position
  let left = 0;
  let right = inbox.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (inbox[mid].timestamp === timestamp) {
      left = mid;
      break;
    } else if (inbox[mid].timestamp > timestamp) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    // Insert the new email at the found position
    inbox.splice(left, 0, newEmail);
    return inbox;
  }
}

// Example usage:
let inbox = [
  { id: 1, timestamp: 10, subject: "Earlier email" },
  { id: 2, timestamp: 2, subject: "Latest email" },
];

let newEmail = {
  id: 3,
  timestamp: 3,
  subject: "New Email in between",
};

let result = insertEmail(inbox, newEmail);
console.log(result);
