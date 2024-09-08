# ng-unis

A package for retrieving details of Nigerian universities including; name, related faculties and departments

[![Release](https://github.com/ize-302/ng-unis/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/ize-302/ng-unis/actions/workflows/release.yml)

## Installation guide

```sh
# using npm
npm install @i-302/ng-unis

#OR

#using yarn
yarn add @i-302/ng-unis
```

## Usage

```js
import {
  getUniversities,
  getUniversityById,
  getFacultiesByUniversityId,
  getDepartments,
} from "@i-302/ng-unis";

// list all universities
const universities = getUniversities();
// get detail of a university
const university = getUniversityById("university_of_lagos");
// return a list of all faculties in a university
const faculties = getFacultiesByUniversityId("university_of_lagos");
//  return a list of all departments in a faculty
const departments = getDepartments("university_of_lagos', 'sciences");
```

## Supported Universities

```
  University                                      |  Status
--------------------------------------------------+----------
  University of Lagos                             |   ✅
  University of Ibadan                            |   ✅
  University of Ilorin                            |   ✅
  University of Benin                             |   ✅
  Ahmadu Bello University                         |   🚧
  Bayero University                               |   🚧
  Federal University of Technology Akure          |   🚧
  Obafemi Awolowo University                      |   🚧
  University of Nigeria, Nsukka                   |   🚧
  Federal University of Technology, Minna         |   🚧
  Ladoke Akintola University of Technology        |   🚧
  University of Abuja                             |   🚧
```

## How to contribute

...
