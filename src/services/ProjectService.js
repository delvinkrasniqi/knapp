import ApiService from "./ApiService"

export const ProjectService  = {
    getAll(){
        return ApiService.getFetch(`/projects`, {});
    },
    getSingleProject(param){
        return ApiService.getFetch(`/wp/v2/projects/${param}`, {});
    },
    getProjectCategory(param){
        return ApiService.getFetch(`/wp/v2/services/${param}`);
    }
};