const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost', 
  database: 'bootcampx'
});

const secondQueryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students on students.id = student_id
JOIN cohorts on cohorts.id = cohort_id
WHERE cohorts.name = $1
ORDER BY teacher;
`;

const cohortsName = process.argv[2];

pool.query(secondQueryString, cohortsName);