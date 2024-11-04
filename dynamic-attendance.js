/**
 * 
    In a virtual classroom, students may join or leave at any time, and the attendance list must 
    stay in alphabetical order. New names are added or removed regularly during a live session. 
    Since this is a small list that changes frequently, which algorithm would be efficient for 
    handling these dynamic updates?
 */
function insertStudent(attendanceList, newStudent) {
  // Binary search to find the correct position
  let left = 0;
  let right = attendanceList.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (attendanceList[mid] === newStudent) {
      left = mid;
      break;
    } else if (attendanceList[mid] < newStudent) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Insert the new student at the found position
  attendanceList.splice(left, 0, newStudent);
}

function removeStudent(attendanceList, studentName) {
  // Find the student by name and remove them
  let indexToRemove = attendanceList.findIndex(
    (student) => student === studentName
  );
  if (indexToRemove !== -1) {
    attendanceList.splice(indexToRemove, 1);
  }
}

// Example usage:
let attendanceList = ["Alice", "Bob", "David"];

insertStudent(attendanceList, "Charlie");
console.log(attendanceList); // Should show ["Alice", "Bob", "Charlie", "David"]

removeStudent(attendanceList, "Bob");
console.log(attendanceList); // Should show ["Alice", "Charlie", "David"]
