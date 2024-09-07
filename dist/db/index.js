import university_of_lagos from "./university_of_lagos.json" with {type: "json"}
import university_of_ibadan from "./university_of_ibadan.json" with {type: "json"}

export default [{ ...university_of_lagos }, { ...university_of_ibadan }]