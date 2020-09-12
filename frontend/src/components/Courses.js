const courses = ["CS 1101", "CS 1301", "CS 1331", "ENG 1101", "ENG 1102", "APPH 1040", "APPH 1050", "PSYCH 1101", "MATH 1551", "MATH 1552", "MATH 1553", "COE 2001", "HIST 2111"]
module.exports = courses.map((name, id) => ({ id, name }))
