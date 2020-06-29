import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const allProjects = response.data;
      const projects = [];
      if (allProjects != null) {
        Object.keys(allProjects).forEach((projectId) => {
          const newProject = allProjects[projectId];
          newProject.id = projectId;
          projects.push(newProject);
        });
      }
      resolve(projects);
    })
    .catch((error) => reject(error));
});

const getCapstones = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/capstones.json`)
    .then((response) => {
      const allProjects = response.data;
      const projects = [];
      if (allProjects != null) {
        Object.keys(allProjects).forEach((projectId) => {
          const newProject = allProjects[projectId];
          newProject.id = projectId;
          projects.push(newProject);
        });
      }
      resolve(projects);
    })
    .catch((error) => reject(error));
});

export default { getCapstones, getProjects };
