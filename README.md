# ng-unis

A package for retrieving details of Nigerian universities including; name, related faculties and departments

[![Release](https://github.com/ize-302/ng-unis/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/ize-302/ng-unis/actions/workflows/release.yml)

## Installation guide

```sh
# using npm
npm install @ize-302/ng-unis

#OR

#using yarn
yarn add @ize-302/ng-unis
```

## Usage

```js
import {
  getUniversities,
  getUniversityById,
  getFacultiesByUniversityId,
  getDepartmentsByFacultyId,
} from "@ize-302/ng-unis";

// list all universities
const universities = getUniversities();
// get detail of a university
const university = getUniversityById("university_of_lagos");
// return a list of all faculties in a university
const faculties = getFacultiesByUniversityId("university_of_lagos");
//  return a list of all departments in a faculty
const departments = getDepartmentsByFacultyId("university_of_lagos__sciences");
```

## How to contribute

...
