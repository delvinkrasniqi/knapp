import ApiService from "./ApiService"

export const HeaderService  = {
    getMenuItems(){
        return ApiService.getFetch(`/navigation/menu`, {});
    },
};