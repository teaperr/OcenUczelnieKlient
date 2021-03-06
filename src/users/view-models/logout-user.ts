import { UserService } from "../services/user-service";
import { Router } from "aurelia-router";
import { Toastr } from "../../core/taostr";
import { autoinject } from "aurelia-dependency-injection";

@autoinject()
export class LogoutUser
{
    constructor(private userService: UserService,private router: Router, private toastr:Toastr)
    {

    }
    activate()
    {
        this.userService.logoutUser();
        this.router.navigate("#/home");
        window.location.reload(true); 
    }
}