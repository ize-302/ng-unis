import db from "./db/index.js"

/**
 * Returns an array of object. Each object contains; name, id
 * @returns {{name: string, id: string}[]}
 */
export function getUniversities() {
  const unis = db.map(({ faculties, ...rest }) => rest);
  return unis;
}

/**
 * Returns an object that contains; name, id, faculties[], faculties[].departments[]
 * @param {string} university_id 
 * @returns {{name: string, id: string, faculties: {id: string, name: string, icon: string, departments: string[]}[]}}
 */
export function getUniversityById(university_id) {
  if (typeof university_id !== 'string') {
    throw new Error('Invalid university_id. It should be a string.');
  }
  const uni_result = db.find(item => item.id === university_id)
  return uni_result || null
}

/**
 * Returns object list of faculties. each object contains id, name, icon, departments[]
 * @param {string} university_id 
 * @returns {{name: string, id: string, icon: string, departments: string[]}[]}
 */
export function getFacultiesByUniversityId(university_id) {
  if (typeof university_id !== 'string') {
    throw new Error('Invalid university_id. It should be a string.');
  }
  const result = db.find(item => item.id === university_id)
  if (result == undefined) return null
  const cleaned_faculties = result.faculties.map(({ departments, ...rest }) => rest)
  return cleaned_faculties
}

/**
 * Returns string list of departments by faculty id
 * @param {string} faculty_id 
 * @returns {string[]}
 */
export function getDepartmentsByFacultyId(faculty_id) {
  if (typeof faculty_id !== 'string') {
    throw new Error('Invalid faculty_id. It should be a string.');
  }
  const [university_id] = faculty_id.split('__')
  const faculties_result = db.find(university => university.id === university_id).faculties
  const departments_result = faculties_result.find(faculty => faculty.id === faculty_id)
  return departments_result == undefined ? null : departments_result.departments
}