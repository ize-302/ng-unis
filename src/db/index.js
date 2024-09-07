import university_of_lagos from "./university_of_lagos.json" with {type: "json"}
import university_of_ibadan from "./university_of_ibadan.json" with {type: "json"}
import university_of_benin from "./university_of_benin.json" with {type: "json"}
import university_of_ilorin from "./university_of_ilorin.json" with {type: "json"}

export default [{ ...university_of_lagos }, { ...university_of_ibadan }, { ...university_of_benin }, { ...university_of_ilorin }]