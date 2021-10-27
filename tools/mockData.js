const students = [
  {
    student_no: "1",
    first_name: "Alaine",
    last_name: "OCahsedy",
    email: "aocahsedy0@homestead.com",
  },
  {
    student_no: "2",
    first_name: "Winne",
    last_name: "Ace",
    email: "wace1@cisco.com",
  },
  {
    student_no: "3",
    first_name: "Ted",
    last_name: "Wells",
    email: "twells2@phoca.cz",
  },
  {
    student_no: "4",
    first_name: "Wille",
    last_name: "Orrill",
    email: "worrill3@dropbox.com",
  },
  {
    student_no: "5",
    first_name: "Culley",
    last_name: "Mattia",
    email: "cmattia4@wix.com",
  },
  {
    student_no: "6",
    first_name: "Serene",
    last_name: "Rabier",
    email: "srabier5@gnu.org",
  },
  {
    student_no: "7",
    first_name: "Elsey",
    last_name: "Edwinds",
    email: "eedwins6@desdev.cn",
  },
  {
    student_no: "8",
    first_name: "Zilvia",
    last_name: "Hutchings",
    email: "shutchings7@gmps.org",
  },
  {
    student_no: "9",
    first_name: "Martyn",
    last_name: "Butfield",
    email: "mbutfield8@vinaora.com",
  },
  {
    student_no: "10",
    first_name: "Patrizio",
    last_name: "Dukelow",
    email: "pdukelow9@army.mil",
  },
];

const courses = [
  {
    course_no: "CS-101",
    course_title: "Introduction to Computer Science",
    max_capacity: 6,
  },
  {
    course_no: "CB-101",
    course_title: "Database",
    max_capacity: 3,
  },
  {
    course_no: "PF-101",
    course_title: "Programming Fundamentals",
    max_capacity: 5,
  },
  {
    course_no: "MA-201",
    course_title: "Calculus",
    max_capacity: 5,
  },
  {
    course_no: "WP-201",
    course_title: "Web Programming",
    max_capacity: 5,
  },
];

const newStudent = {
  student_no: null,
  first_name: "",
  last_name: "",
  email: "",
};

module.exports = {
  newStudent,
  courses,
  students,
};
