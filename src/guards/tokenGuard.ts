import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserService } from "src/apis/user.service";

@Injectable()
export class tokenGuard implements CanActivate {

    constructor(private auth:UserService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        return this.auth.Verified(req);
    }
}