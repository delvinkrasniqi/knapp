import ApiService from "./ApiService"

export const HomeService  = {
    getAllData(){
        return ApiService.getFetch(`/wp/v2/pages/7`, {});
    },
    getAllProjects(){
        return ApiService.getFetch(`/projects/all`, {});
    }
};